export const createCard = () => {
  const card = document.createElement('section');
  card.classList.add('card');
  return card;
};

export const createImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', imageUrl);
  image.setAttribute('id', id);
  return image;
};

export const createSpan = (text, className) => {
  const span = document.createElement('span');
  span.textContent = text;
  span.classList.add(className);
  return span;
};

export const createHeader = (text, headerType, classes) => {
  const header = document.createElement(headerType);
  header.setAttribute('class', classes);
  header.textContent = text;
  return header;
};

export const addImageNavigateClickHandler = (images, url) => {
  images.forEach((image) => {
    const id = image.getAttribute('id');
    image.addEventListener('click', () => {
      location.href = url + '?id=' + id;
    });
  });
};

export const createDetailsView = (vehicle) => {
  return `
    <a class="goback" href="../gallery/gallery.html">
      <i class="fa-regular fa-arrow-left-long"></i>Tillbaka till
      galleriet</a
    >
    <section class="card">
      <img src="${vehicle.imageUrl}" alt="${vehicle.model}" />
      <div class="info">
        <h2>${vehicle.manufacturer} ${vehicle.model}</h2>
        <div>
          <span>Pris</span>
          <span>${vehicle.value}</span>
        </div>
        <div>
          <span>Årsmodell</span>
          <span>${vehicle.modelYear}</span>
        </div>
        <div>
          <span>Antal km</span>
          <span>${vehicle.mileage}</span>
        </div>
        <h3>Beskrivning</h3>
        <div class="description">${vehicle.description}</div>
      </div>
    </section>
  `;
};
