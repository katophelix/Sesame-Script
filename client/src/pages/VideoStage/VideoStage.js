import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText, Navbar } from 'reactstrap';

import Background from "./movie-background.jpg";
import API from "../../utils/API";
import "./VideosStage.css";
import YouTube from 'react-youtube';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';




const opts = {
  height: '550',
  width: '700',

};

class VideoStage extends Component {
  state = {
    video: { comments: [] },
    videoClick: false,
    comments: {
      name: "",
      comment: ""
    }
    // videoId,

  };

  componentDidMount() {
    this.loadVideo()

  }

  loadVideo = () => {
    console.log(this.props.match.params.id)
    API.getVideo(this.props.match.params.id)
      .then(res => {
        console.log(res.data)
        this.setState({ video: res.data })
      })
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name) {
      API.updateComments(this.props.match.params.id, {
        name: this.state.name,
        comment: this.state.comment
      })
        .then(res => this.loadVideo())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (

      <Container style={{ width: "1200px", height: "100%" }}>
        <Row>
          <Jumbotron className="jumbotron" style={{ width: "100%", height: "100%" }}>

            <h1> {this.state.video.title}</h1>

            <h2>Starring </h2>
            <h2> Kat Harris and Hannah Patellis. </h2>

          </Jumbotron>
        </Row>

        <Row>
          <Col>
            <Card style={{ width: "725px", height: "100%" }}>
              <CardText>
                {/* <PreTag>
    <CodeTag> */}

                <SyntaxHighlighter language='javascript' style={tomorrow}>{this.state.video.code}</SyntaxHighlighter>
                {/*                                     
                            </CodeTag>
                            </PreTag> */}

              </CardText>
              <CardBody>
                <YouTube
                  videoId={this.state.video.link}
                  opts={opts}
                  onReady={this._onReady}
                />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "325px", height: "100%" }}>
              {/* <CardTitle className="CardTitle">
                <strong>
                  <h3>
                    Javascript
                  </h3>
                </strong>
              </CardTitle> */}


              <CardTitle className="DefTitle">
                <strong>
                  <h3>
                    Definition
                  </h3>
                </strong>
              </CardTitle>
              <CardBody>
                <strong>
                  <h5>
                    {this.state.video.definition}

                  </h5>
                </strong>
                <hr />
                <CardTitle className="DefTitle">
                  <strong>
                    <h3>
                      Leave a comment or ask a Question.
                  </h3>
                  </strong>
                </CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input value={this.state.name}
                      onChange={this.handleInputChange}
                      name="name"
                      placeholder="Name (required)" />
                  </FormGroup>

                  <FormGroup>
                    <Label for="comments">Comments</Label>
                    <Input value={this.state.comment}
                      onChange={this.handleInputChange}
                      name="comment"
                      placeholder="Leave a comment or ask a question!" />
                  </FormGroup>
                  <Button
                    disabled={!(this.state.name)}
                    onClick={this.handleFormSubmit} >
                    Submit
              </Button>
                </Form>
                <hr />
                <CardTitle className="DefTitle">
                  <strong>
                    <h8>
                      Comments.
                  </h8>
                  </strong>
                </CardTitle>
                {this.state.video.comments.map(comment => (
                  <Row>

                    <Form>
                      <FormGroup className="FormGroup">

                        <Label for="Name"><h8>{comment.name}</h8></Label>
                        <FormText>
                          <p>{comment.comment}</p>
                        </FormText>
                      </FormGroup>
                    </Form>

                  </Row>
                ))}


              </CardBody>


            </Card>

            {/* </Row>
        <Row> */}
            <Col md="6">

            </Col>

          </Col>
        </Row>





        <Navbar id="footer">
          <Col>
            <h9>Seame Script</h9></Col>
          <Col>
            <h9>Kat Harris</h9>
          </Col>
          <Col>
            <h9> 2018</h9>
          </Col>

        </Navbar>
      </Container>
    )

  }
}

export default VideoStage;
