import { connectPagination } from "react-instantsearch-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";

const CustPagination = ({ currentRefinement, nbPages, refine, createURL, total }) => {
  var pagesToDisplay = Math.round(total / 5)
  if (pagesToDisplay > 41) {
    pagesToDisplay = 41
  }
  return (
    <>
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
    {currentRefinement > 40 ? (
      <Box sx={{ width: "100%", maxWidth: 450, paddingTop: "20px" }}>
        <Alert
          severity="error"
          variant="outlined"
          sx={{ borderRadius: "10px" }}
        >
          <AlertTitle>Rezi has more results, I promise</AlertTitle>
            Rezi actually have over 250k results, but it is limited to 40 pages of results. Please refine your search to get more results.
        </Alert>
      </Box>
    ) : null}
    </>
  )
}
  


const CustomPagination = connectPagination(CustPagination);
export default CustomPagination;