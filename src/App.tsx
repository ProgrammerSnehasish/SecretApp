import { useEffect } from 'react'
import DashboardPage from './Pages/Dashboard'
import LoginPage from './Pages/Login'
import { useUserStore } from './store/UserStore'
import { LocalStorageItems } from './configs/config'
import useUserApi from './api/user/useUserApi'
import Loading from './components/Loading'

function App() {
    const user = useUserStore((store) => store.user);
    const {getUser, loading} = useUserApi();     
    useEffect(() => {
        const token = localStorage.getItem(LocalStorageItems.TOKEN);
        const expires = localStorage.getItem(LocalStorageItems.EXPIRES_AT);
        if (token && expires && new Date().getTime() < Number(expires)) {
            getUser();
        } 
    },[])
    if (loading)
        return <Loading />
    return user ? <DashboardPage /> : <LoginPage />;
}

export default App