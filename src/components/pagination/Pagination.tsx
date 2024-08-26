import React from "react";
import Pagination from "@mui/material/Pagination";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}


export const Paginations: React.FC<Props> = ({ currentPage, onPageChange }) => {
  const total = useAppSelector(state => state.characters.info);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Pagination
      count={total?.pages}
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
