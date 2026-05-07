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
  vehicles.map((vehicle) => {
    const card = createCard();
    const image = createImage(vehicle.imageUrl, vehicle.id);
    const info = createSpan(
      `${vehicle.manufacturer} ${vehicle.model}`,
      'image-info',
    );

    card.appendChild(image);
    card.appendChild(info);
    gallery.appendChild(card);

    const images = document.querySelectorAll('.card img');
    addImageNavigateClickHandler(images, '../vehicle/vehicle-details.html');
  });
};

document.addEventListener('DOMContentLoaded', initApp);
