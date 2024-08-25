
import { Gender, Species, Status } from '@/types/Status';
import { createSlice } from '@reduxjs/toolkit';


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
    
  },
});

export const {} = filtersSlice.actions;
export default filtersSlice.reducer;
