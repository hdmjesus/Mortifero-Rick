/* eslint-disable no-tabs */
import getData from '../utils/getData';

const Home = async () => {
  const { results: characters } = await getData();
  console.log(characters);

  const view = `
<div class="characters">
	${characters
    .map(
      (personaje) => `
	<article class="character-item">
			<a href="#/${personaje.id}/">
				<img src="${personaje.image}" alt="${personaje.name}"/>
				<h2>${personaje.name}</h2>
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
