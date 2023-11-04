import React from "react";
import Links from "./Links";

function About(props) {
  function bioExist (bio) {
    console.log(bio)
    if (bio === undefined || bio.length === 0 ){
      console.log('No')
      return null;
   }else{    
    console.log("yes")
      return (
        <p>{bio}</p>
      )
   }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioExist(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}



export default About;
