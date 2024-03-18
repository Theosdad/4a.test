export const renderTariffs = (tariffs) => {
  const tariffItems = document.querySelectorAll('.tariff-list__insert');
  const modalNames = document.querySelectorAll('.modal__name');
  const modalPrices = document.querySelectorAll('.modal__price');
  const modalTariffs = tariffs.filter((tariff) => tariff.isDiscount === true && tariff.isPopular === false);
  const discounts = ['-40%', '-50%', '-60%'];

  tariffItems.forEach((tariffItem, index) => {
    if (index < tariffs.length) {
      const tariff = tariffs[index];

      if (tariff.isDiscount === false && tariff.isPopular === true) {
        const tariffHTML = `
          <h2 class="tariff-name">${tariff.name}</h2>
          <span class="tariff-price">${tariff.price}₽</span>
        `;
        tariffItem.insertAdjacentHTML('beforeend', tariffHTML);
      }
    }
  });

  modalTariffs.forEach((tariff, index) => {
    if (index < modalNames.length) {
      const modalNameHTML = `<h2>${tariff.name}</h2>`;
      modalNames[index].insertAdjacentHTML('beforeend', modalNameHTML);

      const modalPriceHTML = `<p class="modal__new-price" data-discount="${discounts[index]}">${tariff.price}₽</p>`;
      modalPrices[index].insertAdjacentHTML('beforeend', modalPriceHTML);
    }
  });
};

export const renderNoDiscountTariffs = (tariffs) => {
  const noDiscountTariffs = tariffs.filter((tariff) => tariff.isDiscount === false && tariff.isPopular === false);
  const tariffItems = document.querySelectorAll('.tariff-list__insert');

  tariffItems.forEach((tariffItem, index) => {
    if (index < noDiscountTariffs.length) {
      const tariff = noDiscountTariffs[index];
      const tariffHTML = `
          <h2 class="tariff-name">${tariff.name}</h2>
          <span class="tariff-price">${tariff.price}₽</span>
        `;
      tariffItem.innerHTML = '';
      tariffItem.insertAdjacentHTML('beforeend', tariffHTML);
    }
  });
};
