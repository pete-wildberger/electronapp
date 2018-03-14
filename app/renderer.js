const os = require('os');
const fs = require('fs');

const linkTemplate = document.querySelector('#link-template');
const cpuSection = document.querySelector('#cpu-section');

const files = fs.readdirSync(os.homedir());
const cpus = os.cpus();
console.log(cpus);

const addToPage = ({model, speed }) => {
  const newCpu = linkTemplate.content.cloneNode(true)
  const modelElement = newCpu.querySelector('.link--title');
  const speedElement = newCpu.querySelector('.link--speed');

  modelElement.textContent = model;
  speedElement.textContent = speed;

  cpuSection.appendChild(newCpu);
  return { model, speed };
};

files.forEach(name => {
  const file = document.createElement('li');
  console.log(file);
  // file.textContent = name;
  // document.body.appendChild(file);
});

cpus.forEach(cpu => {
  addToPage(cpu);
});
