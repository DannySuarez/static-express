const root = document.getElementById('root');
const colorsList = document.createElement('ul');

fetch('/api/v1/colors')
  .then(res => res.json())
  .then(colorsArray => {
    colorsArray.forEach(colorsArray => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `/color.html?name=${colorsArray.name}`;
      a.textContent = `${colorsArray.name}`;
      li.appendChild(a);
      colorsList.appendChild(li);
    });
  });

root.appendChild(colorsList);
