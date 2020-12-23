const API = `https://quote-garden.herokuapp.com/api/v3/quotes/random`;
const random = document.querySelector(".random");

const anotherFunction = async (url_api) => {
  try {
    const info = await fetchData(url_api);
    const cita = await info.data[0].quoteText;
    const autor = await info.data[0].quoteAuthor;

    document.querySelector(".quoteTxt").innerHTML = `"${cita}"`;
    document.querySelector(".autor").innerHTML = `➖${autor}`;
    // console.log(cita);
    // console.log(autor);
  } catch (error) {
    console.error(error);
  }
};
anotherFunction(API);
random.addEventListener("click", () => {
  anotherFunction(API);
});
