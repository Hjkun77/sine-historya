const browseTitle = document.querySelector("#browse-title");
const browseHighlights = document.querySelector("#browse-highlights");
const browseTopics = document.querySelector("#browse-topics");
const browseStream = document.querySelector("#browse-stream");
const browseRating = document.querySelector("#browse-rating");
const browseNextButton = document.querySelector("#browse-next");
const browsePreviousButton = document.querySelector("#browse-previous");
const browseGrid = document.querySelector(".grid-browse");

function browseNext() {
  browseTitle.style.display = "none";
  browseHighlights.style.display = "none";
  browseTopics.style.display = "none";
  browseStream.style.display = "flex";
  browseRating.style.display = "flex";
  browseNextButton.style.display = "none";
  browsePreviousButton.style.display = "block";
  browseGrid.style.gridTemplateColumns = "auto 1fr 1fr 1fr";
}

function browsePrevious() {
  browseTitle.style.display = "flex";
  browseHighlights.style.display = "flex";
  browseTopics.style.display = "flex";
  browseStream.style.display = "none";
  browseRating.style.display = "none";
  browseNextButton.style.display = "block";
  browsePreviousButton.style.display = "none";
  browseGrid.style.gridTemplateColumns  = "1fr 1fr 1fr auto";
}
