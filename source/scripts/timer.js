/* eslint-disable no-use-before-define */
import { openModal } from './modal';
import { fetchedData } from './fetch';
import { renderNoDiscountTariffs } from './render';

export const initTimer = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const timer = document.querySelector('.timer');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const tariffItems = document.querySelectorAll('.tariff-list__item');

    let minutes = 2;
    let seconds = 0;

    const updateDisplay = () => {
      minutesDisplay.textContent = minutes.toString().padStart(2, '0');
      secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    };

    const startCountdown = () => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
        tariffItems.forEach((item) => {
          item.classList.add('no-discount');
        });
        fetchedData.then((data) => {
          renderNoDiscountTariffs(data);
        });
        openModal();
      }

      if (minutes === 0 && seconds === 30) {
        timer.classList.toggle('expired');
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(intervalId);
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }

      updateDisplay();
    };

    const intervalId = setInterval(startCountdown, 1000);
    updateDisplay();
  });
};
