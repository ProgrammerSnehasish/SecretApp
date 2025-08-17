export default function SortButton() {
    return (
        <div>
            <select name="sortBy" id="sortBy" style={{cursor: "pointer", height: 31.3, width: 30}}>
                <optgroup label="Sort By">
                    <option value="Title">Title</option>
                    <option value="Website">Website</option>
                    <option value="DateCreated">Date Created</option>
                    <option value="DateEdited">Date Edited</option>
                </optgroup>
                <hr />
                <optgroup label="Order By">
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </optgroup>
            </select>
        </div>
    );
}