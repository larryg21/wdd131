const tempStatic = 30;
const speedStatic = 20;

const calculateWindChill = (temp, speed) => (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);

const windchillSpan = document.querySelector('#windchill');
const tempSpan = document.querySelector('#temp-static');
const speedSpan = document.querySelector('#speed-static');

tempSpan.textContent = `${tempStatic} °C`;
speedSpan.textContent = `${speedStatic} km/h`;

if (tempStatic <= 10 && speedStatic > 4.8) {
    const windChill = calculateWindChill(tempStatic, speedStatic);
    windchillSpan.textContent = `${windChill} °C`;
} else {
    windchillSpan.textContent = "N/A";
}

document.querySelector('#currentyear').textContent = new Date().getFullYear();

document.querySelector('#lastmodified').textContent = document.lastModified;