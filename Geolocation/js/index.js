const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

if (!navigator.geolocation){
     console.log('polacos');
  }

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (error) => {
    console.log(error);
    alert("Hay caray, algo salio mal :(");
  }
);