'use client';
import { getAllCharacters } from "@/api/characters";
import { Character } from "@/types/Character";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CharactersState {
  characters: Character[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CharactersState = {
  characters: [],
  status: 'idle',
};

export const getCharactersAsync = createAsyncThunk(
  'characters/fetchCharacters',
  async (page: number) => {
    const CharactersFromServer = await getAllCharacters(page);

    return CharactersFromServer.results;
  },
);

export const CharactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCharactersAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCharactersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.characters = action.payload;
      })
      .addCase(getCharactersAsync.rejected, state => {
        state.status = 'failed';
      })
  },
});

export const { } = CharactersSlice.actions;
export default CharactersSlice.reducer;
