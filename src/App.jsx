import React, { Component } from "react";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "./api/youtube";

import "./App.css";

class App extends Component {
  state = { selectedVideo: null, videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo });
  };
  renderContent = () => {
    return (
      <React.Fragment>
        <h1>It's like youtube, but worse.</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <main>
          {this.state.selectedVideo ? (
            <VideoDetail video={this.state.selectedVideo} />
          ) : null}
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </main>
      </React.Fragment>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default App;
