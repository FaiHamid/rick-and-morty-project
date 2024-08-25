import { TextField } from "@mui/material";

export const FiltersAndSearch = () => {
  return (
    <div className="w-[80%] h-[200px]  mb-10 p-5">
      <TextField
        id="outlined-search"
        label="Search for character"
        type="search"
        sx={{
          backgroundColor: 'white',
          borderColor: 'lightblue',
          width: "100%",
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'lightblue',
            },
            '&:hover fieldset': {
              borderColor: 'lightblue',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'lightblue',
            },
          },
        }}
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
    </div>
  );
};
