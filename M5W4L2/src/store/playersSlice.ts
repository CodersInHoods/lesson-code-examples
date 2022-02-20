import { createSlice } from "@reduxjs/toolkit";
import { TeamType } from "../views/Team/types";

export interface IPlayersState {
  pool: string[];
  teamOne: string[];
  teamTwo: string[];
}

const initialState: IPlayersState = {
  pool: ["Sam", "Vasile", "Bob", "Mimi", "Sarah", "John", "Tom", "David"],
  teamOne: [],
  teamTwo: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    movePlayerToTeam: (state, { payload }) => {
      const { index, teamType }: { index: number; teamType: TeamType } =
        payload;
      const selectedPlayer = state.pool.splice(index, 1);
      state[teamType].push(selectedPlayer[0]);

      return state;
    },
    movePlayerToPool: (state, { payload }) => {
      const { index, teamType }: { index: number; teamType: TeamType } =
        payload;
      const selectedPlayer = state[teamType].splice(index, 1);
      state.pool.push(selectedPlayer[0]);

      return state;
    },
  },
});

export const { movePlayerToTeam, movePlayerToPool } = playersSlice.actions;

export default playersSlice.reducer;
