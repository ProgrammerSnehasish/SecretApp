export default function DisplayPassword() {
    function showPassword() {
        var passwordField = document.getElementById("password") as HTMLInputElement | null;
        // Toggle the type of the password field between 'password' and 'text'
        if (passwordField) {
            passwordField.type = passwordField.type === "password" ? "text" : "password";
        }
    }

    return (
        <>
            <button type="button" onClick={showPassword} style={{ cursor: 'pointer' }}>
                <img src="./src/assets/view.png" style={{ height: 10, width: 10 }} />
            </button>
        </>
    );
}