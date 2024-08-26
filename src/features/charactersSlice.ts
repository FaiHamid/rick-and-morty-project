"use client";
import { getAllCharacters } from "@/api/characters";
import { Character, Info } from "@/types/Character";
import { Gender, Species, Status } from "@/types/Status";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CharactersState {
  characters: Character[];
  status: "idle" | "loading" | "failed";
  info: Info | null;
}

const initialState: CharactersState = {
  characters: [],
  status: "idle",
  info: null,
};

interface Props {
  currentPage: number, 
  search: string,
  status: Status,
  gender: Gender,
  species: Species,
}

export const getCharactersAsync = createAsyncThunk(
  "characters/fetchCharacters",
  async ({currentPage, search, status, gender, species}: Props) => {
    const CharactersFromServer = await getAllCharacters(currentPage, search, status, gender, species);

    return CharactersFromServer;
  }
);

export const CharactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharactersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharactersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.characters = action.payload.results;
        state.info = action.payload.info;
      })
      .addCase(getCharactersAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = CharactersSlice.actions;
export default CharactersSlice.reducer;
