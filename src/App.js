//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./Components/BottomRow";
import TopRow from "./Components/TopRow";
// import Buttons from './Components/Buttons';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //NOTE: cannot set the useState to a const or it can't be changed by the setter function
  let [ homeScore, setHomeScore ] = useState(0);
  let [awayScore, setAwayScore ] = useState(0);

  // console.log("homeScore", homeScore)
  // console.log("awayScore", awayScore)

  const handleScores = (teamName, scoreChange) => {
    // if teamName = home
    if(teamName === 'home' && scoreChange === 'touchdown'){
        // if scoreChange = 7
        setHomeScore(homeScore += 7)
        console.log('Home touch down', homeScore)
    }        
    // if scoreChange = 3
    else if(teamName === 'home' && scoreChange === 'fieldgoal'){
        setHomeScore(homeScore += 3)
        console.log('Home field goal', homeScore)
    }
    
    // if teamName = Away
    else if(teamName === "away" && scoreChange === 'touchdown'){
        setAwayScore(awayScore += 7)
        console.log('Away team touch down', awayScore)
    }
    // if scoreChange = 3
    else if(teamName === "away" && scoreChange === 'fieldgoal'){
        setAwayScore(awayScore += 3)
        console.log('Away team field goal', awayScore)
    }
}


  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore ={awayScore} />
        <BottomRow />
      </section>
      {/* <Buttons homeScore={homeScore} setHomeScore ={setHomeScore} awayScore ={awayScore} setAwayScore = {setAwayScore} /> */}
      <section className="buttons">
            <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button onClick={() => handleScores('home', 'touchdown')} className="homeButtons__touchdown">Home Touchdown</button>
                <button onClick={() => handleScores('home', 'fieldgoal')} className="homeButtons__fieldGoal">Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button onClick={() => handleScores('away', 'touchdown')} className="awayButtons__touchdown">Away Touchdown</button>
                <button onClick={() => handleScores('away', 'fieldgoal')} className="awayButtons__fieldGoal">Away Field Goal</button>
            </div>
        </section>
    </div>
  );
}

export default App;
