var Search = (props) => (
  <div className="search-bar form-inline">
    <form>
      <input id="search" className="form-control" type="text"/>
      <button id="searchButton" className="btn" onClick={(event) => {
        console.log('button clicked');
        props.searchYouTube({
          key: YOUTUBE_API_KEY,
          max: 10,
          query: document.getElementById('search').value
        }, props.callback);
        document.getElementById('search').value = '';
        event.preventDefault();
      }}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
