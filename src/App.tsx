import DashboardPage from './Pages/Dashboard'
import LoginPage from './Pages/Login'
import { useUserStore } from './store/UserStore'

function App() {
    const user = useUserStore((store) => store.user)
    if(user) {
        return (
            <DashboardPage />
        )
    } else {
        return <LoginPage />
    }
}

export default App