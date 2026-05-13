import { it, describe, expect, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom';
import { createDisplayVehicle } from './vehicle';

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

describe('Vehicle', () => {
  it('should create vehicle display html', () => {
    const vehicle = {};
    const html = createDisplayVehicle(vehicle);
    console.log(html);
    expect(html).toBeDefined();
  });

  it('should display correct vehicle', async () => {
    const vehicle = {
      id: 1,
      registrationNumber: 'ABC123',
      manufacturer: 'Chevrolet',
      model: 'Chevrolet',
      modelYear: '2015',
      imageUrl:
        'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
      mileage: 125000,
      value: 175000,
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    };
    const html = await createDisplayVehicle(vehicle);
    document.querySelector('#details-area').innerHTML = html;
    const title = document.querySelector('h2');

    expect(html).toBeDefined();
    expect(title.innerText).toMatch(/Chevrolet Chevrolet/i);
  });
});
