import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import API from "../../utils/API";
import "./Videos.css";


import YouTube from 'react-youtube';
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { rainbow } from 'react-syntax-highlighter/styles/prism';



class VideosPage extends Component {
  state = {
    videos: [],
    videoClick: false,
    // videoId,
    

  };

  componentDidMount() {
    this.loadVideos();

  }

  loadVideos = () => {
    API.getVideos()
      .then(res => {
        console.log('length', res.data.length)
        this.setState({ videos: res.data })
      })
      .catch(err => console.log(err));
  };



  render() {
    return (

      <Container style={{width:"1200px", height:"100%"}}>
        <Row>
          <Jumbotron className="jumbotron" style={{ width: "1200px", height: "100%" }}>
            
            <h1>Sesame Script</h1>
             <h2>"Reality is a thing of the past."</h2>
           
            {/* <h4>Sesame Script is a website that explains various Javascript functions, loops and terms. 
              To help students understand Javascript, we have made visual representations of various elements in Javascript. </h4>
              */}
              </Jumbotron>
        </Row>
        <Row>

          {this.state.videos.map(video => (

            <Col size="md-3">
              <Card style={{width:"300px", height:"250px"}}>
                <CardTitle className="CardTitle">
                  <strong>
                    <h3>{video.title}</h3>
                  </strong>
                </CardTitle>
                <CardBody className = "CardBody">
                  <Link to={`/video/${video._id}`}>

                    <img style={{width:"100%", height:"90%"}} src={video.image} />
                  </Link>

                </CardBody>
                <CardText className="CardText">

               {/* <PreTag>
    <CodeTag> */}
                            
                                {/* <SyntaxHighlighter language='javascript' style={rainbow}>{video.code}</SyntaxHighlighter>;  */}
                                    
                            {/* </CodeTag>
                            </PreTag> */}

                </CardText>

              </Card>
            </Col>
          ))}

        </Row>
   
      </Container>
    )

  }
}




  export default VideosPage;
