import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results
        .map(
          (character) => `
        <article class="Character-item sm:mr-20 sm:w-1/3 sm:mx-1 md:mx-3 lg:w-1/5">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
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
