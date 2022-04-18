import './SeasonDisplay.css';//Webpack automatically pulls this into index.html
import React from "react";



//This is referred to as a config object
const seasonConfig = {
    summer : {
        text : "Lets hit the beach",
        iconName : 'sun'
    },
    winter : {
        text :"Burr its cold",
        iconName : 'snowflake'
    }
}


//Function to determine the season
const getSeason = (lat,month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = (props) =>{
   let season = getSeason(props.lat, new Date().getMonth());
   //Here we destructure our seasonConfig object using object bracket notation
   let {text, iconName} = seasonConfig[season]

    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
    )
}

export default SeasonDisplay;

