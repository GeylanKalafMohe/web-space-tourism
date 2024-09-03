const paginationListElements = document.querySelectorAll(".main-content ol li");
const roleElement = document.querySelector(".item-details h2");
const crewNameElement = document.querySelector(".item-details h3");
const crewBioElement = document.querySelector(".item-details p");
const crewImagelement = document.querySelector(".item-image");

getSpaceData()
  .then(function (spaceDataArray) {
    setCrewDetails(0);

    addPaginationClickListeners(paginationListElements, function () {
      setCrewDetails(selectedIndex);
    });

    function setCrewDetails(index) {
      const crewDetails = spaceDataArray.crew;

      crewImagelement.src = crewDetails[index].images.webp;
      roleElement.textContent = crewDetails[index].role;
      crewNameElement.textContent = crewDetails[index].name;
      crewBioElement.textContent = crewDetails[index].bio;
    }
  })
  .catch((_) => {});
