import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
  const id = await getHash();
  const data = await getData(id);
  console.log(data);
  const {
    name,
    status,
    species,
    gender,
    episode,
    image,
    location,
    origin,
  } = data;

  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
      </article>
      <article class="Characters-card ">
        <h3>Episodes: ${episode.length}</h3>
        <h3>Status: ${status}</h3>
        <h3>Species:${species}</h3>
        <h3>Gender:${gender}</h3>
        <h3>Origin:${origin.name}</h3>
        <h3>Last Location:${location.name}</h3>
      </article>
    </div>
  `;

  return view;
};

export default Character;
