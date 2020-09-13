import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters flex flex-wrap  justify-center px-5 mt-3">
      ${characters.results
        .map(
          (character) => `
        <article class="Character-item mb-6 shadow-xxg sm:mr-20 sm:w-1/3 sm:mx-1 md:mx-3 lg:w-1/5">
          <a class="block" href="#/${character.id}/">
            <img class="w-full  p-3 rounded-lg " src="${character.image}" alt="${character.name}">
            <h2 class="text-center pb-2 font-body">${character.name}</h2>
          </a>
        </article>

      `
        )
        .join('')}
    </div>
  `;
  return view;
};

export default Home;
