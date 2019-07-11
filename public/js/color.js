const search = new URLSearchParams(window.location.search);
const name = search.get('name');

const root = document.getElementById('root');
const p = document.createElement('p');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(colorsArray => {
    p.textContent = `${colorsArray.name}`;
  });

root.appendChild(p);

