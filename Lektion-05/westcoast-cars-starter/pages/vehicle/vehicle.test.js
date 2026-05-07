import { it, expect, vi, describe, beforeEach, afterEach } from 'vitest';
import { Window } from 'happy-dom';
import HttpClient from '../../data/httpClient';
import { createHeader, createDetailsView } from '../../scripts/dom';
import fs from 'fs';
import path from 'path';

// Ta reda på sökvägen till vår vehicle-details.html fil...
const docPath = path.join(process.cwd(), 'pages/vehicle/vehicle-details.html');
// Läs in filens innehåll...
const docContent = fs.readFileSync(docPath).toString();

const window = new Window();
const document = window.document;

// variabel som referens till HttpClient klassen...
let http;

// Koppla document objektet till Vitest...
vi.stubGlobal('document', document);

afterEach(() => {
  vi.clearAllMocks();
});

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(docContent);
  http = new HttpClient('vehicles');
});

// Här börjar testerna...
describe('Vehicle details', () => {
  it('should display correct page title for vehicle with id: 1', async () => {
    // Arrange...
    // Hämta bilen med id 1...
    const vehicle = await http.findVehicle(1);
    // Skapa en pageTitle för bilen...
    const pageTitle = createHeader(
      `${vehicle.manufacturer} ${vehicle.model}`,
      'h1',
      'page-title center-text mt-3',
    );
    // Lägga till pageTitle till vår virtuella sida(dom)...
    document.querySelector('main').prepend(pageTitle);

    // Act...
    const title = document.querySelector('h1');

    // Assert...
    expect(title.innerText).toMatch(/chevrolet corvette/i);
  });

  it('should render correct vehicle information for id: 1', async () => {
    const vehicle = await http.findVehicle(1);
    const html = createDetailsView(vehicle);

    document.querySelector('#details-area').innerHTML = html;

    const image = document.querySelector('.card img');
    const goBackAnchor = document.querySelector('a.goback');
    const descriptionTitle = document.querySelector('h3');
    const infoLista = document.querySelectorAll(
      'div.info div span:nth-child(2)',
    );

    expect(image.getAttribute('src')).toBe(
      'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
    );

    expect(goBackAnchor.getAttribute('href')).toBe('../gallery/gallery.html');
    expect(descriptionTitle.innerText).toMatch(/beskrivning/i);
    expect(descriptionTitle.innerText).toBe('Beskrivning');
    expect(infoLista[0].innerText).toBe('175000');
    expect(infoLista[1].innerText).toBe('2015');
    expect(infoLista[2].innerText).toBe('125000');
  });
});
