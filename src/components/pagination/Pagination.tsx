import React from "react";
import Pagination from "@mui/material/Pagination";


const TOTAL_PAGES = 42;

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}


export const Paginations: React.FC<Props> = ({ currentPage, onPageChange }) => {

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Pagination
      count={TOTAL_PAGES}
      variant="outlined"
      color="primary"
      page={currentPage}
      onChange={handleChange}
      sx={{
        '& .MuiPaginationItem-root': {
          color: 'green',
          borderColor: 'green',
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
        },
        '& .MuiPaginationItem-outlined': {
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
          },
        },
        '& .MuiPaginationItem-outlinedPrimary.Mui-selected': {
          color: 'white',
          backgroundColor: 'green',
        },
      }}
    />
  );
};
