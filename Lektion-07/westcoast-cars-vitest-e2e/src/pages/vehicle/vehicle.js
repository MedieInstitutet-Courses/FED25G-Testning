import HttpClient from '../../data/httpClient.js';

import { createDisplayVehicle, createPageTitle } from './vehicle.dom.js';

const initApp = async () => {
  try {
    const vehicleId = location.search.split('=')[1];
    const vehicle = getVehicle(vehicleId);

    document.querySelector('main').prepend(createPageTitle(vehicle));
    document.querySelector('#details-area').innerHTML = generateHtml(vehicle);
  } catch (error) {
    console.error(error);
  }
};

export const addVehicle = async (vehicle) => {
  // return { status: 201, vehicle };
  const http = new HttpClient('vehicles');
  return await http.addVehicle(vehicle);
};

export const getVehicle = async (id) => {
  // TODO: Hämta ifrån REST API när Alexander är klar...
  const vehicle = VEHICLES.find((v) => v.id === id);
  return vehicle;
  // return await new HttpClient('vehicles').findVehicle(id);
  // return {
  //   id: 1,
  //   registrationNumber: 'ABC123',
  //   manufacturer: 'Chevrolet',
  //   model: 'Corvette',
  //   modelYear: '2015',
  //   imageUrl:
  //     'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
  //   mileage: 125000,
  //   value: 175000,
  //   description:
  //     'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  // };
};

export const generateHtml = (vehicle) => {
  return createDisplayVehicle(vehicle);
};

initApp();
// document.addEventListener('DOMContentLoaded', initApp);

const VEHICLES = [
  {
    id: 1,
    registrationNumber: 'ABC123',
    manufacturer: 'Chevrolet',
    model: 'Corvette',
    modelYear: '2015',
    imageUrl:
      'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
    mileage: 125000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    id: 2,
    registrationNumber: 'DEF345',
    manufacturer: 'Ford',
    model: 'Mustang',
    modelYear: '2017',
    imageUrl:
      'https://res.cloudinary.com/softtech-dev/image/upload/v1744229052/car2_ljnqt8.jpg',
    mileage: 48500,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    id: 3,
    registrationNumber: 'GHI678',
    manufacturer: 'Porsche',
    model: 'Alpine',
    modelYear: '1967',
    imageUrl:
      'https://res.cloudinary.com/softtech-dev/image/upload/v1769077570/car3_mbq58x.jpg',
    mileage: 89000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];
