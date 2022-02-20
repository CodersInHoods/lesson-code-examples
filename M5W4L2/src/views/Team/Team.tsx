import { useDispatch, useSelector } from "react-redux";
import { PlayersSearch } from "../../components/PlayersSearch";
import { RootState } from "../../store";
import { movePlayerToPool } from "../../store/playersSlice";
import { ITeam } from "./types";

export const Team: React.FC<ITeam> = ({ teamType }) => {
  const dispatch = useDispatch();
  const teamPlayers = useSelector(
    (state: RootState) => state.players[teamType]
  );

  const removePlayerHandler = (index: number) => {
    dispatch(movePlayerToPool({ index, teamType }));
  };

  return (
    <div>
      <h1>team {teamType}</h1>
      <PlayersSearch teamType={teamType}/>
      {teamPlayers.map((player, index) => {
        return (
          <li key={index}>
            {player}{" "}
            <button onClick={() => removePlayerHandler(index)}>remove</button>
          </li>
        );
      })}
    </div>
  );
};
