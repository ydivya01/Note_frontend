import React from "react";
import {
  
  Button,
  Row,

  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  
} from "reactstrap";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
 
     <Link to="/home">
         <button className="back-button">back</button>
        </Link>

      
          <CardTitle tag="h3">
            NoteKeeper: Introducing digital note Keeping app
          </CardTitle>
          <CardText>
            <ul>
              <li>Best-in-class collaboration and team note-taking features</li>
               <li>Packs in lots of features, like task management, databases, and pretty much anything else you care to think of</li>
            <li>A new way of approaching note-taking that allows you to create an interlinked digital database</li>
            </ul>
          </CardText>
          
       
      
    </>
  );
}

export default About;
