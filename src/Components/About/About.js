import React from "react";
import {
  InputGroup,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardGroup,
  CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
     

      <Card>
        {/* <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="80%"
    /> */}
        <CardBody>
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
          <Row style={{ margin: "80px" }}>
        <Link to="/home">
          <Button className="text-center"> Back</Button>
        </Link>
      </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default About;
