import AddSecret from "./addSecret";
import { SecretList } from "./SecretList";
// import SearchBar from "./search_bar";
// import SortButton from "./sort_button";

export default function SecretListArea() {
    return (
            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 12, borderRight: '1px solid #ede3e3ff'}}>
                <div style={{width: 600, padding: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    {/* Search Bar */}
                    {/* <SearchBar /> */}
                    {/* Sort Button */}
                    {/* <SortButton /> */}
                    {/* Add New Button */}
                    <AddSecret />
                </div>
                <div style={{paddingLeft: 6, paddingRight:6}}>
                    {/* Secret List */}
                    <SecretList />
                </div>
            </div>
    );
}