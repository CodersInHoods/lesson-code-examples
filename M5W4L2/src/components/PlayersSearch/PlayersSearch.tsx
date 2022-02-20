import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { movePlayerToTeam } from "../../store/playersSlice";
import styles from "./PlayersSearch.module.scss";
import { IPlayersSearch } from "./types";

export const PlayersSearch: React.FC<IPlayersSearch> = ({ teamType }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const poolPlayers = useSelector((state: RootState) => state.players.pool);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const index = poolPlayers.findIndex((player) => player === inputValue);
    dispatch(movePlayerToTeam({ index, teamType }));
    setInputValue("");
  };

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setInputValue(value);
  };
  const poolPlayersToRender = poolPlayers.filter((player) =>
    player.toLowerCase().includes(inputValue.toLowerCase())
  );

  const isInputValueMatch = poolPlayers.some(
    (player) => player.toLowerCase() === inputValue.toLowerCase()
  );

  return (
    <div className={styles.searchFormWrapper}>
      <form onSubmit={formSubmitHandler}>
        <input type="text" onChange={inputChangeHandler} value={inputValue} />
        <button type="submit">Add</button>
        {inputValue && !isInputValueMatch && (
          <ul>
            {poolPlayersToRender.length
              ? poolPlayersToRender.map((player, index) => {
                  return (
                    <li key={index} onClick={() => setInputValue(player)}>
                      {player}
                    </li>
                  );
                })
              : "No users with such name"}
          </ul>
        )}
      </form>
    </div>
  );
};
