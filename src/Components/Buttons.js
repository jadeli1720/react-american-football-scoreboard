import React from "react";

// Could not get this to work properly without the output reading object,objects7

const Buttons = (props) => {
    // destructuring props passed from App.js
    let {homeScore, awayScore} = props
    // let setHomeScore = [props]
    // let setAwayScore = [props]
    console.log("Props", props)

    // handler functions for scores:
    /*
    takes in team name and amount
    function will be passed to click handler
    increment the correct team's score by the passed in amount

    2 inputs: "team name" and amount
    1 output: score ==> based off of conditional statements
    */

    const handleScores = (teamName, scoreChange) => {
        // if teamName = home
        if(teamName === 'home' && scoreChange === 'touchdown'){
            // if scoreChange = 7
            props.setHomeScore(homeScore += 7)
            console.log('Home touch down', homeScore)
        }        
        // if scoreChange = 3
        else if(teamName === 'home' && scoreChange === 'fieldgoal'){
            props.setHomeScore(homeScore += 3)
            console.log('Home field goal', homeScore)
        }
        
        // if teamName = Away
        else if(teamName === "away" && scoreChange === 'touchdown'){
            props.setAwayScore(awayScore += 7)
            console.log('Away team touch down', awayScore)
        }
        // if scoreChange = 3
        else if(teamName === "away" && scoreChange === 'fieldgoal'){
            props.setAwayScore(awayScore += 3)
            console.log('Away team field goal', awayScore)
        }
    }

    

    return (

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
    )
}

export default Buttons;