
const cardsContent = document.getElementById('cards');

const API = `https://rickandmortyapi.com/api/character/`;

const anotherFunction = async (url_api, index) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[index].id}`);
    const origin = await fetchData(character.origin.url);
    data.results.map(character => {
      const card = cardGenerator(character, origin);
      cardsContent.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
};

for (let index = 0; index < 1; index++) {
  anotherFunction(API, index);
}
