import React from 'react';
import NavBar from "./navbar";

const MovieDetails = () => {
    return(
        <div>
          <NavBar/>
          <div className="container-fluid pt-4">
              <div className="row">
                  <div className="col-8">
                      <iframe width="725" height="408" src="https://www.youtube.com/embed/HhesaQXLuRY"
                              title="YouTube video player" frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen>
                      </iframe>
                      <h3>Title</h3>
                  </div>
                  <div className="col-4"><h3>Related</h3></div>
              </div>
          </div>
        </div>
    )
};

export default MovieDetails;