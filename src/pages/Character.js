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
    <div class="Characters-inner mt-20 flex flex-col p-3 lg:flex-row lg:mt-32 lg:items-center lg: justify-center">
      <article class="Characters-card mb-3 lg:h-100vh" lg:w-1/2 >
        <img src="${image}" alt="${name}" class="rounded-md w-1/2 mx-auto lg:w-full">
        <h2 class="p-2 text-cyan text-center font-bold lg:text-xl">${name}</h2>
      </article>
      <article class="Characters-card flex flex-col px-10 sm:px-4 sm:w-1/2 sm:mx-auto lg:mx-0 lg:ml-5">
        <h3 class="text-sm lg:text-lg"><span class="Characters-description lg:text-xl">Episodes:</span>  ${episode.length}</h3>
        <h3 class="text-sm lg:text-lg"><span class="Characters-description lg:text-xl">Status:</span> ${status}</h3>
        <h3 class="text-sm lg:text-lg"><span class="Characters-description lg:text-xl">Gender:</span>${gender}</h3>
        <h3 class="text-sm lg:text-lg"><span class="Characters-description lg:text-xl">Origin:</span>${origin.name}</h3>
        <h3 class="text-sm lg:text-lg"><span class="Characters-description lg:text-xl">Last Location:</span>${location.name}</h3>
        <h3 class="text-sm lg:text-lg"><span class="Characters-description lg:text-xl">Species:</span>${species}</h3>
      </article>
    </div>
  `;

  return view;
};

export default Character;
