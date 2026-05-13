import { it, describe, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom';
import { generateHtml, getVehicle, addVehicle } from './vehicle';

// 1. Hämta in html dokumentet vehicle-details.html...
const docPath = path.join(
  process.cwd(),
  'src/pages/vehicle/vehicle-details.html',
);
const docContent = fs.readFileSync(docPath).toString();
const window = new Window(); // Happy-Dom...
const document = window.document;

// 2. Koppla document ifrån Happy-Dom till vitest via vi.stubGlobal funktionen...
vi.stubGlobal('document', document);

afterEach(() => {
  vi.clearAllMocks();
});

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(docContent);
});

describe('Display Vehicle', () => {
  it('should return correct vehicle by id', async () => {
    const vehicle = await getVehicle(1);
    expect(vehicle).toBeDefined();
  });

  it('should return correct properties', async () => {
    const vehicle = await getVehicle(1);

    expect(vehicle).toHaveProperty('registrationNumber');
    expect(vehicle).toHaveProperty('manufacturer');
    expect(vehicle).toHaveProperty('model');
    expect(vehicle).toHaveProperty('modelYear');
  });

  it('should return correct properties with correct values', async () => {
    const vehicle = await getVehicle(1);

    expect(vehicle).toHaveProperty('registrationNumber', 'ABC123');
    expect(vehicle).toHaveProperty('manufacturer', 'Chevrolet');
    expect(vehicle).toHaveProperty('model', 'Corvette');
    expect(vehicle).toHaveProperty('modelYear', '2015');
  });

  it('should create vehicle display html', () => {
    const vehicle = {};
    const html = generateHtml(vehicle);
    expect(html).toBeDefined();
  });

  it('should display correct vehicle', () => {
    const vehicle = {
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
    };
    const html = generateHtml(vehicle);
    document.querySelector('#details-area').innerHTML = html;
    const title = document.querySelector('h2');

    expect(html).toBeDefined();
    expect(title.innerText).toMatch(/Chevrolet Corvette/i);
  });
});

describe('Manage Vehicle', () => {
  it('should add a new vehicle to the database', async () => {
    const response = await addVehicle({
      registrationNumber: 'RNG001',
      manufacturer: 'Volvo',
      model: 'X40e',
      modelYear: '2025',
      imageUrl: '',
      mileage: 1000,
      value: 345000,
      description: 'Test bil',
    });

    expect(response).toBeDefined();
    expect(response.status).toBe(201);
  });
});
