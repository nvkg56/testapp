export default function Search() {
  function search(formData: FormData) {
    const myQuery = formData.getAll("query");
    console.log(myQuery);
  }
  return (
    <form action={search}>
      <label>
        <input type="text" name="query" placeholder="search ..." />
      </label>
      <label>
        <button type="submit" name="submitButton">
          Search
        </button>
      </label>
    </form>
  );
}
