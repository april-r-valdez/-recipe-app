
import React, { useState, useEffect } from 'react';
import { fetchVideos } from './YouTubeAPI';
import YouTube from 'react-youtube';
import he from 'he';

const YouTubeTips = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const randomQuery = generateRandomQuery(); // generates random query
    onSearchSubmit(randomQuery);
  }, []);

  const generateRandomQuery = () => {
    const keywords = ['cooking tutorials', 'healthy recipes', 'easy recipes', 'how to cook food']; // Add more keywords if needed
    const randomIndex = Math.floor(Math.random() * keywords.length);
    return keywords[randomIndex];
  };

  const onSearchSubmit = async (query) => {
    const videos = await fetchVideos(query);
    setVideos(videos);
  };

  return (
    <div className="container-xl">
      <h1 className="display-5">Tips & Tutorials</h1><br></br><br></br>
      {videos.length > 0 && (
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div key={videos[0].id.videoId}>
              <YouTube videoId={videos[0].id.videoId} />
              <p className="h4">{he.decode(videos[0].snippet.title)}</p>
            </div><br></br>
          </div>
          <div className="col-6">
            <div key={videos[1].id.videoId}>
              <YouTube videoId={videos[1].id.videoId} />
              <p className="h4">{he.decode(videos[1].snippet.title)}</p>
            </div><br></br>
          </div>
        </div>
      )}
      {videos.length > 0 && (
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div key={videos[2].id.videoId}>
              <YouTube videoId={videos[2].id.videoId} />
              <p className="h4">{he.decode(videos[2].snippet.title)}</p>
            </div><br></br>
          </div>
          <div className="col-6">
            <div key={videos[3].id.videoId}>
              <YouTube videoId={videos[3].id.videoId} />
              <p className="h4">{he.decode(videos[3].snippet.title)}</p>
            </div><br></br>
          </div>
        </div>
      )}
      {videos.length > 0 && (
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div key={videos[4].id.videoId}>
              <YouTube videoId={videos[4].id.videoId} />
              <p className="h4">{he.decode(videos[4].snippet.title)}</p>
            </div><br></br>
          </div>
          <div className="col-6">
            <div key={videos[5].id.videoId}>
              <YouTube videoId={videos[5].id.videoId} />
              <p className="h4">{he.decode(videos[5].snippet.title)}</p>
            </div><br></br>
          </div>
        </div>
      )}
      {videos.length > 0 && (
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div key={videos[6].id.videoId}>
              <YouTube videoId={videos[6].id.videoId} />
              <p className="h4">{he.decode(videos[6].snippet.title)}</p>
            </div><br></br>
          </div>
          <div className="col-6">
            <div key={videos[7].id.videoId}>
              <YouTube videoId={videos[7].id.videoId} />
              <p className="h4">{he.decode(videos[7].snippet.title)}</p>
            </div><br></br>
          </div>
        </div>
      )}    
    </div>
  );
};

export default YouTubeTips;