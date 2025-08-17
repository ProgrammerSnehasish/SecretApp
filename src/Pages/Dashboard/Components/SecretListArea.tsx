import AddSecret from "./addSecret";
// import SearchBar from "./search_bar";
// import SortButton from "./sort_button";

export default function SecretListArea() {
    return (
            <div style={{height: '100%', width: 800, borderRight: '1px solid #ede3e3ff', padding: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                {/* Search Bar */}
                {/* <SearchBar /> */}
                {/* Sort Button */}
                {/* <SortButton /> */}
                {/* Add New Button */}
                <AddSecret />
            </div>
    );
}