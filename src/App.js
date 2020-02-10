//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./Components/BottomRow";
import TopRow from "./Components/TopRow";
import Buttons from './Components/Buttons';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //NOTE: cannot set the useState to a const or it can't be changed by the setter function
  let [ homeScore, setHomeScore ] = useState(0);
  let [awayScore, setAwayScore ] = useState(0);

  // console.log("homeScore", homeScore)
  // console.log("awayScore", awayScore)

//   const handleScores = (teamName, scoreChange) => {
//     // if teamName = home
//     if(teamName === 'home' && scoreChange === 'touchdown'){
//         // if scoreChange = 7
//         setHomeScore(homeScore += 7)
//         console.log('Home touch down', homeScore)
//     }        
//     // if scoreChange = 3
//     else if(teamName === 'home' && scoreChange === 'fieldgoal'){
//         setHomeScore(homeScore += 3)
//         console.log('Home field goal', homeScore)
//     }
    
//     // if teamName = Away
//     else if(teamName === "away" && scoreChange === 'touchdown'){
//         setAwayScore(awayScore += 7)
//         console.log('Away team touch down', awayScore)
//     }
//     // if scoreChange = 3
//     else if(teamName === "away" && scoreChange === 'fieldgoal'){
//         setAwayScore(awayScore += 3)
//         console.log('Away team field goal', awayScore)
//     }
// }



  // console.log("homeScore", homeScore)
  // console.log("awayScore", awayScore)
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => setHomeScore(homeScore += 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => setHomeScore(homeScore += 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => setAwayScore(awayScore += 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => setAwayScore(awayScore += 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>

        <TopRow homeScore={homeScore} awayScore ={awayScore} />
        <BottomRow />
      </section>
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <Buttons homeScore={homeScore} setHomeScore ={setHomeScore} awayScore ={awayScore} setAwayScore = {setAwayScore} />

    </div>
  );
}

export default App;
