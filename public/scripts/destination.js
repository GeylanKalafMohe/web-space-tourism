const destinationButtonElements = document.querySelectorAll(
  ".picked-destination .nav-list button"
);

const destinationImgElement = document.querySelector(".item-image");
const destinationTitleElement = document.querySelector(
  ".destination-explanation h2"
);
const destinationDescriptionElement =
  document.getElementById("main-description");
const destinationDistanceElement = document.getElementById("avg-distance");
const destinationTravelTimeElement = document.getElementById("travel-time");

getSpaceData().then((spaceDataArray) => {
  addPaginationClickListeners(destinationButtonElements, () => {
    let destinations = spaceDataArray.destinations;

    const currentDestination = destinations[selectedIndex];

    destinationImgElement.src = currentDestination.images.webp;
    destinationTitleElement.textContent = currentDestination.name;
    destinationDescriptionElement.textContent = currentDestination.description;
    destinationDistanceElement.textContent = currentDestination.distance;
    destinationTravelTimeElement.textContent = currentDestination.travel;
  });
});
