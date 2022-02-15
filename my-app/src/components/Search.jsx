const Search = (props) => {
  const {search, setSearch} = props
  return (
    <>
      <input
          className="nameSearch"
          type="text"
          value={search}
          placeholder="Search by name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
    </>
  )
}

export default Search;