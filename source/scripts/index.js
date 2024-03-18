import { initTimer } from './timer';
import { fetchedData } from './fetch';
import { renderTariffs } from './render';

initTimer();

fetchedData.then((data) => {
  renderTariffs(data);
});

document.addEventListener('DOMContentLoaded', () => {
  const tariffItems = document.querySelectorAll('.tariff-item');

  tariffItems.forEach((tariffItem) => {
    tariffItem.addEventListener('click', () => {
      tariffItems.forEach((item) => {
        item.classList.remove('selected');
      });

      tariffItem.classList.add('selected');
    });
  });
});


