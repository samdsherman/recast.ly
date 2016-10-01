class App extends React.Component { 
  constructor(props) {
    super(props);


    this.state = {
      searchResults: [],
      currentVideo: exampleVideoData[0]
    };

  }

  updateVideoData(videoData) {
    this.setState({
      searchResults: videoData,
      currentVideo: videoData[0]
    });
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: YOUTUBE_API_KEY,
      query: 'cats',
      max: 10
    }, this.updateVideoData.bind(this));
  }

  videoChange(video) {
    this.setState({
      searchResults: this.state.searchResults,
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav searchYouTube={this.props.searchYouTube} callback={this.updateVideoData.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.searchResults} clickHandler={video=>this.videoChange(video)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
