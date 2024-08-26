"use client";
import { Character } from "@/types/Character";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectedCharacterState {
  character: Character | null;
}

const initialState: SelectedCharacterState = {
  character: null
};

export const CharacterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    changeSelectedPerson: (state: SelectedCharacterState, action: PayloadAction<Character>) => {
      state.character = action.payload;
    },
    removePerson: (state: SelectedCharacterState) => {
      state.character = null;
    }
  },
});

export const { changeSelectedPerson, removePerson } = CharacterSlice.actions;
export default CharacterSlice.reducer;
