const paginationListElements = document.querySelectorAll(".main-content ol li");
const techNameElement = document.querySelector(".item-details h3");
const techDescElement = document.querySelector(".item-details p");
const techImageElement = document.querySelector(".item-image");

const techImageLandscapeMediaMatch = window.matchMedia("(max-width: 81rem)");
const techImagePortraitMediaMatch = window.matchMedia(
  "(max-width: 30rem) or (min-width: 81.5rem)"
);

getSpaceData()
  .then(function (spaceDataArray) {
    const techDetails = spaceDataArray.technology;

    setCrewDetails(0);

    addPaginationClickListeners(paginationListElements, function () {
      setCrewDetails(selectedIndex);
    });

    function setCrewDetails(index) {
      techImageElement.src = techImagePortraitMediaMatch.matches
        ? techDetails[index].images.portrait
        : techDetails[index].images.landscape;
      techNameElement.textContent = techDetails[index].name;
      techDescElement.textContent = techDetails[index].description;
    }

    techImageLandscapeMediaMatch.addEventListener("change", () => {
      techImageElement.src = techDetails[selectedIndex].images.landscape;
    });

    techImagePortraitMediaMatch.addEventListener("change", () => {
      techImageElement.src = techDetails[selectedIndex].images.portrait;
    });
  })
  .catch((_) => {});
