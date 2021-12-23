function MouseOver(currentPictureID, changedPictureSRC) {
  changedPicture = '../Pictures/' + changedPictureSRC + currentPictureID + '.png';
  document.getElementById(currentPictureID).src = changedPicture;
};
function MouseOut(currentPicture, currentPictureID) {
    document.getElementById(currentPicture).src= '../Pictures/' + currentPictureID + '.png';
};