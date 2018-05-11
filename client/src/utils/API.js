import axios from "axios";



export default {
  
 

  // Gets all Videos
  getVideos: function() {
    return axios.get("/api/videos");
  },
  // Gets the Video with the given id
  getVideo: function(id) {
    return axios.get("/api/videos/" + id);
  },
  // Deletes the Video with the given id
  deleteVideo: function(id) {
    return axios.delete("/api/videos/" + id);
  },
  updateComments: function(id, commentsData) {
    return axios.put("/api/videos/" + id, commentsData);
  },

  //  // Saves a comment/question to the database
  //  saveName: function(name) {
  //   return axios.post("/api/videos", name);
  // },
  // // Saves a User to the database
  // saveComment: function(comment) {
  //   return axios.post("/api/videos", comment);
  // },
   // Saves comments to the database
   saveComments(commentsData) {
    return axios.put("/api/videos", commentsData);
  }
};

