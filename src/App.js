//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./Components/BottomRow";
import TopRow from "./Components/TopRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //NOTE: cannot set the useState to a const or it can't be changed by the setter function
  let [ homeScore, setHomeScore ] = useState(0);
  let [awayScore, setAwayScore ] = useState(0);

  // console.log("homeScore", homeScore)
  // console.log("awayScore", awayScore)

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore ={awayScore} />
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHomeScore( homeScore += 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHomeScore( homeScore += 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAwayScore( awayScore += 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayScore( awayScore += 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
