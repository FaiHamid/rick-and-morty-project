import {
  addSearch,
  changeGander,
  changeSpecies,
  changeStatus,
} from "@/features/filtersAndSearchSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Gender, Species, Status } from "@/types/Status";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const FiltersAndSearch = () => {
  const search = useAppSelector((state) => state.filters.search);
  const status = useAppSelector((state) => state.filters.status);
  const gender = useAppSelector((state) => state.filters.gender);
  const species = useAppSelector((state) => state.filters.species);
  const dispatch = useAppDispatch();

  const allStatus = Object.entries(Status);
  const allGender = Object.entries(Gender);
  const allSpecies = Object.entries(Species);

  return (
    <div className="w-[80%] h-[200px]  mb-10 p-5 flex flex-col">
      <TextField
        id="outlined-search"
        label="Search for character"
        type="search"
        sx={{
          backgroundColor: "white",
          borderColor: "lightblue",
          width: "100%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "lightblue",
            },
            "&:hover fieldset": {
              borderColor: "lightblue",
            },
            "&.Mui-focused fieldset": {
              borderColor: "lightblue",
            },
          },
        }}
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(addSearch(event.target.value));
        }}
      />
      <div className="flex gap-x-10 mt-5">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={(e) => dispatch(changeStatus(e.target.value as Status))}
          >
            {allStatus.map((oneStatus) => (
              <MenuItem key={oneStatus[1]} value={oneStatus[1]}>
                {oneStatus[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={(e) => dispatch(changeGander(e.target.value as Gender))}
          >
            {allGender.map((oneGender) => (
              <MenuItem key={oneGender[1]} value={oneGender[1]}>
                {oneGender[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Species</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={species}
            label="Species"
            onChange={(e) => dispatch(changeSpecies(e.target.value as Species))}
          >
            {allSpecies.map((oneSpecie) => (
              <MenuItem key={oneSpecie[1]} value={oneSpecie[1]}>
                {oneSpecie[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
