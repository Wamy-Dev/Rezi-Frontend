import { connectSearchBox } from "react-instantsearch-dom";
import TextField from "@mui/material/TextField";
const sa_event = window.sa_event;
const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate role="search" onSubmit={(event) => event.preventDefault()}>
    <TextField
      style={{ minHeight: "70px" }}
      id="SEARCHBOX"
      fullWidth
      placeholder="Search for any game imaginable"
      type="search"
      value={currentRefinement}
      onChange={(event) => {
        event.preventDefault();
        sa_event("search")
        refine(event.currentTarget.value);
      }}
    />
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);
export default CustomSearchBox;
