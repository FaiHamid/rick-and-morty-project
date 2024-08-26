
import { Gender, Species, Status } from '@/types/Status';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface FiltersState {
  search: string;
  status: Status;
  gender: Gender;
  species: Species;
}

const initialState: FiltersState = {
  search: '',
  status: Status.All,
  gender: Gender.All,
  species: Species.All,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addSearch: (state: FiltersState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    changeStatus: (state: FiltersState, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    changeGander: (state: FiltersState, action: PayloadAction<Gender>) => {
      state.gender = action.payload;
    },
    changeSpecies: (state: FiltersState, action: PayloadAction<Species>) => {
      state.species = action.payload;
    },
  },
});

export const { addSearch, changeStatus, changeGander, changeSpecies } = filtersSlice.actions;
export default filtersSlice.reducer;
