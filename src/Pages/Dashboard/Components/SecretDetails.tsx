import { useSecretStore } from "../../../store/SecretStore"

export default function SecretDetails() {
    const selectedSecret = useSecretStore((store) => store.selectedSecret)
    const removeSecret = useSecretStore((store) => store.removeSecret)
    const updateSecret = useSecretStore((store) => store.updateSecret)
    return (
        <div>
            {selectedSecret ? (
                <>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
                        <h3>{selectedSecret.title}</h3>
                        <p>{selectedSecret.Value}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
                        <button onClick={() => {
                            const newTitle = prompt("Enter new title", selectedSecret.title);
                            const newValue = prompt("Enter new value", selectedSecret.Value);
                            if (newTitle !== null && newValue !== null) {
                                updateSecret({
                                    ...selectedSecret,
                                    title: newTitle,
                                    Value: newValue
                                });
                            }
                        }} style={{cursor: 'pointer'}}>Edit</button>

                        <button onClick={() => {removeSecret(selectedSecret.id)}} style={{cursor: 'pointer'}}>Delete</button>
                    </div>
                </>
            ) : (
                <p>No item Selected.</p>
            )}
        </div>
    )
}

