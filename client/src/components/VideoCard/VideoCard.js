import React, {Component} from "react";
import "./VideoCard.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';
import { Row, Container, Col } from "../../components/Grid";
//import "./Videos.css";
import YouTube from 'react-youtube';
import Jumbotron from "../../components/Jumbotron";
import API from '../../utils/API';

const opts = {
  height: '200',
  width: '100%',

};


class VideoCard extends Component {
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



//   VideoCardClick = (videoID) => {
//     const videoClick = this.state.videoClick;
//     if (videoClick) {
// retun()
 
  render(){
    return (
  <Container>
  <Row>
    <Jumbotron>
      <h1>See Javascript - like you have never seen it before!!!!</h1>
    </Jumbotron>
  </Row>
  <Row>
    <CardDeck>
      <Card>
        <CardTitle className="CardTitle">
          <strong>
            {this.video.title}
          </strong>
        </CardTitle>
        <CardBody>
        <Button> <img alt={this.props.title} src={this.props.link} onClick={this.props.VideoCardClick} className="bigCard"/>
    
    
          <YouTube
            videoId={this.video.link}
            opts={opts}
            onReady={this._onReady}
          />
         </Button> 
        </CardBody>
        <CardText>
          {this.video.definition}
          <pre>
            <code>
              {this.video.code}
            </code>
          </pre>

        </CardText>
        <Form >
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="name" name="name" id="name" placeholder="Name" />
            <Input type="comment" name="comment" id="comment" placeholder="Leave a comment or ask a question!" />
          </FormGroup>
          <Button>Submit</Button>

          <FormText>Name: {this.state.video.comments} Comment/Question: {this.video.comments.comment}</FormText>
        </Form>
      </Card>
    </CardDeck >
  </Row >
</Container >
);
   
  }    

}
export default VideoCard;
