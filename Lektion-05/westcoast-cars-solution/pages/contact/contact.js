const form = document.querySelector('form');

const initApp = () => {};

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener('submit', handleSubmit);
