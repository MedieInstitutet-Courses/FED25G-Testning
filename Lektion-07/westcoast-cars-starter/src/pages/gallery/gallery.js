import HttpClient from '../../data/httpClient.js';
import {
  createCard,
  createImage,
  createSpan,
  addImageNavigateClickHandler,
} from '../../scripts/dom.js';

const gallery = document.querySelector('#vehicles-gallery');

const initApp = async () => {
  try {
    displayVehicles(await new HttpClient('vehicles').listAllVehicles());
  } catch (error) {
    console.error(error);
  }
};

const displayVehicles = (vehicles) => {
  let html = '';
  vehicles.map((vehicle) => {
    html += `<li class="card">
      <img src="${vehicle.imageUrl}" id="${vehicle.id}"/>
      <span class="image-info">${vehicle.manufacturer} ${vehicle.model}</span>
      </li>`;
  });

  gallery.innerHTML = html;

  const images = document.querySelectorAll('.card img');
  images.forEach((image) => {
    const id = image.getAttribute('id');
    image.addEventListener('click', () => {
      location.href = `../vehicle/vehicle-details.html?id=${id}`;
    });
  });
};

document.addEventListener('DOMContentLoaded', initApp);
