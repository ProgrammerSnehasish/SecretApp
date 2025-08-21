// import { use, useEffect } from 'react'
import DashboardPage from './Pages/Dashboard'
import LoginPage from './Pages/Login'
import { useUserStore } from './store/UserStore'

function App() {
    const user = useUserStore((store) => store.user)     
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         console.log(token);
    //     } 
    // },[user])

    return user ? <DashboardPage /> : <LoginPage />;
}

export default App