function MouseOver(currentPictureID, changedPictureSRC) {
  changedPicture = '../Pictures/' + changedPictureSRC
  document.getElementById(currentPictureID).src = document.getElementById(currentPictureID).src.replace("Pictures/", ("../Pictures/" + changedPictureSRC))
}
function MouseOut(currentPicture, keyword) {
    document.getElementById(currentPicture).src= '../Pictures/' + keyword + '.png';
}