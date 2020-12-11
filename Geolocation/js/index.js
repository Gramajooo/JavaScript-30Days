const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = Math.round(data.coords.speed);
    // console.log(speed.textContent)
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (error) => {
    console.log(error);
    alert("Hay caray, algo salio mal :(");
  }
);