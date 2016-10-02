var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      key: options.key,
      q: options.query,
      maxResults: options.max
    },
    error: function(error) {
      console.error(error.responseText);
    },
  }).done((data) => {
    console.log(data.items);
    callback(data.items);
  });
  var headers = new Headers({
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true,
    key: options.key,
    q: options.query,
    maxResults: options.max
  });
};

window.searchYouTube = searchYouTube;

