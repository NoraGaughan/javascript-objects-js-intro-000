var playlist = { artistName: 'songTitle'};

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});} 

updatePlaylist(playlist, "Alison", "Slowdive");

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName];
  return thePlaylist;
}

removeFromPlaylist(playlist, "artist2");