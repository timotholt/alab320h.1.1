export function SearchBar() {
    const style = {
        border: "0.1rem solid green",
        margin: "0.2rem",
        padding: "0.3rem",
    }

    return (
        <div className="search-bar" style={style}>
            <input type="text" placeholder="Search" />
        </div>
    )
}
