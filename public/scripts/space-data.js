async function getSpaceData() {
  try {
    const response = await fetch("/space-data");

    const responseJSON = await response.json();

    const responseError = responseJSON.error;
    if (responseError != null) {
      throw responseError;
    }

    return responseJSON.data;
  } catch (error) {
    console.log(error);
    alert("Unknown error occurred: " + error);
    throw error;
  }
}
