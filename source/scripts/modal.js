const modal = document.getElementById('modal');
const modalClosers = document.querySelectorAll('.modal-close');

export const openModal = () => {
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
};

modalClosers.forEach((closer) => closer.addEventListener('click', closeModal));
