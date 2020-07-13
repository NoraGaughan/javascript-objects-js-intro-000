var playlist = { artist: 'song'}
function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}
updatePlaylist(playlist, "Phil Ochs", "Slowdive");
