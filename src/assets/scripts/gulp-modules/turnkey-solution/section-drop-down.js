function dropDown() {
  const dropDown = document.querySelector('[drop-down]');
  const dropDownBtn = document.querySelector('[open-drop-down]');
  dropDownBtn.addEventListener('click', () => {
    dropDown.classList.toggle('open');
    dropDownBtn.classList.toggle('open');

    window.dispatchEvent(new Event('resize')); // Спрацьовує при зміні розміру вікна


  });

}

dropDown();
