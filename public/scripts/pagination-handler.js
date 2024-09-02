let selectedIndex = 0;

function addPaginationClickListeners(btns, customAction) {
  for (const [newIndex, button] of btns.entries()) {
    button.addEventListener("click", (event) => {
      changePaginationStep(btns, selectedIndex);

      changePaginationStep(btns, newIndex);

      selectedIndex = newIndex;

      if (customAction) customAction();
    });
  }
}

function changePaginationStep(btns, index) {
  btns[index].classList.toggle("selected");
}
