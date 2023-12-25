var showMoreButton = document.getElementById("show-more-button");
var newsContainer = document.querySelector(".construction-progress__list");
var newsItems = newsContainer.querySelectorAll(".construction-progress-card");
var itemsPerLoad = 4;
let visibleCardCount = 4;
var startIndex = 0;


function hideAllNews() {
  newsItems.forEach(function (item) {
    item.classList.add("card-hidden");
  });
}

function showNews(startIndex, endIndex) {
  for (var i = startIndex; i < endIndex; i++) {
    if (newsItems[i]) {
      newsItems[i].classList.remove("card-hidden");
    }
  }

  if (visibleCardCount == newsItems.length) {
    showMoreButton.style.display = 'none';
  }
}

function showMoreNews() {
  var nextIndex = startIndex + itemsPerLoad;
  showNews(startIndex, nextIndex);
  startIndex = nextIndex;

  if (startIndex >= newsItems.length) {
    showMoreButton.style.display = "none";
  }
}

hideAllNews();

showMoreButton.addEventListener('click', function () {
  const cards = document.querySelectorAll('.construction-progress__list .construction-progress-card');

  if (visibleCardCount < cards.length) {
    for (let i = visibleCardCount; i < visibleCardCount + 4; i++) {
      if (cards[i]) {
        cards[i].style.display = 'block';
      }
    }
    visibleCardCount += 4;

    if (visibleCardCount >= cards.length) {
      showMoreButton.style.display = 'none';
    }
  }
});

showNews(startIndex, startIndex + itemsPerLoad);
