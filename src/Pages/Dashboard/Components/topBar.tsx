import { useUserStore } from "../../../store/UserStore";

export default function TopBar() {
    const user = useUserStore((store) => store.user)
    const setUser = useUserStore((store) => store.setUser);
    return (
    <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, backgroundColor: '#f5ededff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{height: 46, width: 46}}>
                <img src="./src/assets/secret_locker_icon.png" alt="secret_locker_icon" height="50" width="50" />
            </div>
            <div>
                <p>Welcome {user?.firstName} {user?.lastName}</p>
            </div>
        <button onClick={() => {
            setUser(undefined),
            localStorage.clear();
        }} style={{cursor: "pointer"}}>Logout</button>
    </div>
    );
}