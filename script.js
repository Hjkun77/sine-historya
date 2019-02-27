const browseTitle = document.querySelector("#browse-title");
const browseHighlights = document.querySelector("#browse-highlights");
const browseTopics = document.querySelector("#browse-topics");
const browseStream = document.querySelector("#browse-stream");
const browseRating = document.querySelector("#browse-rating");
const browseNextButton = document.querySelector("#browse-next");
const browsePreviousButton = document.querySelector("#browse-previous");

const hrBatch81 = document.querySelector("#hr-batch81");
const hrDekada70 = document.querySelector("#hr-dekada70");
const hrBatas = document.querySelector("#hr-batas");
const hrTatlong = document.querySelector("#hr-tatlong");
const hrML = document.querySelector("#hr-ml");
const hrGiveup = document.querySelector("#hr-giveup");
const hrNextButton = document.querySelector("#hr-next");
const hrPreviousButton = document.querySelector("#hr-previous");

const wAishite = document.querySelector("#w-aishite");
const wLiway = document.querySelector("#w-liway");
const wOro = document.querySelector("#w-oro");
const wGamugamo = document.querySelector("#w-gamugamo");
const wNextButton = document.querySelector("#w-next");
const wPreviousButton = document.querySelector("#w-previous");

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

function browseNextHR() {
  hrBatch81.style.display = "none";
  hrDekada70.style.display = "none";
  hrBatas.style.display = "none";
  hrTatlong.style.display = "flex";
  hrML.style.display = "flex";
  hrGiveup.style.display = "flex";
  hrNextButton.style.display = "block";
  hrPreviousButton.style.display = "block";
  browseGrid.style.gridTemplateColumns = "auto 1fr 1fr 1fr";
}

function browsePreviousHR() {
  hrBatch81.style.display = "flex";
  hrDekada70.style.display = "flex";
  hrBatas.style.display = "flex";
  hrTatlong.style.display = "none";
  hrML.style.display = "none";
  hrGiveup.style.display = "none";
  hrNextButton.style.display = "block";
  hrPreviousButton.style.display = "block";
  browseGrid.style.gridTemplateColumns = "auto 1fr 1fr 1fr";
}

function browseNextW() {
  wAishite.style.display = "none";
  wLiway.style.display = "none";
  wOro.style.display = "none";
  wGamugamo.style.display = "flex";
  wNextButton.style.display = "block";
  wPreviousButton.style.display = "block";
  browseGrid.style.gridTemplateColumns = "auto 1fr 1fr 1fr";
}

function browsePreviousW() {
  wAishite.style.display = "flex";
  wLiway.style.display = "flex";
  wOro.style.display = "flex";
  wGamugamo.style.display = "none";
  wNextButton.style.display = "block";
  wPreviousButton.style.display = "block";
  browseGrid.style.gridTemplateColumns = "auto 1fr 1fr 1fr";
}
