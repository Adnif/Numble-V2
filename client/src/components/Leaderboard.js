import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../css/leaderBoard.css";
import { getAllUsers } from "../redux/slice/userSlice";

function Leaderboard() {
  // const dispatch = useDispatch();
  // dispatch(getAllUsers());
  // const leaderBoard = useSelector((state) => state.user.leaderBoard);
  // console.log(leaderBoard);

  const [leaderBoard, setleaderBoard] = useState([]);

  const getLeaderBoard = async () => {
    try{
      const response = await fetch("http://localhost:5000/users/board");
      const jsonData = await response.json();

      setleaderBoard(jsonData);
    } catch(err){
      console.error(err.message);
    }
  }

  useEffect(() => {
    getLeaderBoard();
  },[]);

  return (
    <div className="leaderBoard">
      <div className="header">
        <h1>Leaderboard</h1>
      </div>

      <div className="refresh">
        <button>Refresh</button>
      </div>
      <div className="line"></div>

      <div>
        <th className="rank">
          <h4>Rank</h4>
        </th>
        <th className="name">
          <h4>Name</h4>
        </th>
        <th className="score">
          <h4>Score</h4>
        </th>
      </div>

      {leaderBoard &&
        leaderBoard.map((item, index) => {
          return (
            <div className="Header">
              <div className="rank">
                <h4>{index + 1}</h4>
              </div>
              <div className="name">
                <h4>{item.name}</h4>
              </div>
              <div className="score">
                <h4>{item.score}</h4>
                {/* <h4>0</h4> */}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Leaderboard;
