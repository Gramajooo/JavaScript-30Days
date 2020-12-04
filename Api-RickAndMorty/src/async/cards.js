const cardGenerator = (character, origin) => {
  const card = document.createElement("div");
  card.innerHTML = `
    <div class="card bg-dark text-white">
        <img id="foto" src="${character.image}" class="card-img" alt="imagen de ${character.name}">
        <div class="card-img-overlay">
            <h5 class="card-title badge badge-success">${character.name}</h5>
            <p class="card-text">Type: ${character.name}</p>
            <p class="card-text">Dimension: ${origin.dimension}</p>
            <p class="card-text"><span class="badge badge-dark">Status: ${character.status}</span></p>
        </div>
    </div>
    `;

  return card;
};
