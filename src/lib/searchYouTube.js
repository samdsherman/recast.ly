var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=' + options.key + '&q=' + options.query + '&maxResults=' + options.max,
    error: function(error) {
      console.error(error.responseText);
    },
  }).done((data) => (callback(data.items)));
};

window.searchYouTube = searchYouTube;

