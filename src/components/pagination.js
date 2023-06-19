import { connectPagination } from "react-instantsearch-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const CustPagination = ({ currentRefinement, nbPages, refine, createURL, total }) => {
  var pagesToDisplay = Math.round(total / 5)
  return (
    <Pagination
      page={currentRefinement}
      count={pagesToDisplay}
      variant="outlined"
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          component="a"
          href={createURL(item.page)}
          {...item}
          onClick={(event) => {
            event.preventDefault();
            refine(item.page);
          }}
        />
      )}
    >
      <PaginationItem />
    </Pagination>
  )
}
  


const CustomPagination = connectPagination(CustPagination);
export default CustomPagination;