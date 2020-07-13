var playlist = { artistName: 'songTitle'};

function updatePlaylist(thePlaylist, 'Phil Ochs', "Here's to the State of Mississippi") {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}

updatePlaylist(playlist, "artist4", "song4");

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName];
  return thePlaylist;
}

removeFromPlaylist(playlist, "artist2");