function MouseOver(currentPictureID) {
  changedPicture = '../Pictures/Inverted-' + currentPictureID + '.png';
  document.getElementById(currentPictureID).src = changedPicture;
};
function MouseOut(currentPictureID) {
  document.getElementById(currentPictureID).src= '../Pictures/' + currentPictureID + '.png';
};