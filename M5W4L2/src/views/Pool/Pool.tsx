import { IPool } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { movePlayerToTeam } from "../../store/playersSlice";

export const Pool: React.FC<IPool> = () => {
  const dispatch = useDispatch();
  const pool = useSelector((state: RootState) => state.players.pool);

  const movePlayerHandler = (index: number, teamType: string) => {
    dispatch(movePlayerToTeam({ index, teamType }));
  };

  return (
    <div>
      <h1>Pool</h1>
      {pool.map((player, index) => {
        return (
          <li key={index}>
            {player}{" "}
            <button onClick={() => movePlayerHandler(index, "teamOne")}>
              To Team 1
            </button>
            <button onClick={() => movePlayerHandler(index, "teamTwo")}>
              To Team 2
            </button>
          </li>
        );
      })}
    </div>
  );
};
