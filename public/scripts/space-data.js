async function getSpaceData() {
  try {
    const response = await fetch("/space-data");

    const destinationArray = await response.json();

    return destinationArray.data;
  } catch (error) {
    console.log(error);
    alert("Unknown error occurred: " + error);
  }
}
