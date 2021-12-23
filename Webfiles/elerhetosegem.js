function MouseOver(currentPictureID, changedPictureSRC) {
  changedPicture = '../Pictures/' + changedPictureSRC
  document.getElementById(currentPictureID).src = changedPicture;
}
function MouseOut(currentPicture, keyword) {
    document.getElementById(currentPicture).src= '../Pictures/' + keyword + '.png';
}