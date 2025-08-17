export default function SearchBar() {
    return (
        <div style={{position: 'relative', width: '100%', marginBottom: 12}}>
            <input type="text" placeholder="Search..." style={{width: '100%', padding: '6px 36px 6px 10px'}}/>
            <button
                style={{
                    position: 'absolute',
                    right: 6,
                    top: '2.45%',
                    transform: 'translateY(-50%)',
                    border: 'none',
                    background: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    }}
                    >
                    <img src="./src/assets/search_icon.png" alt="search" style={{ height: '24px', width: '24px'}} />
            </button>
        </div>
    )
}