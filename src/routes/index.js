import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const Routes = {
  '/': Home(),
  '/:id': Character(),
};

const router = async () => {
  // renderizado del header
  const header = null || document.getElementById('Header');
  const content = null || document.getElementById('Content');
  header.innerHTML = await Header();
  // Renderizado de contenido
  let hash = getHash(); /* Se obtiene el hash */
  let route = await resolveRoutes(
    hash
  ); /* Se valida la ruta que se esta recibiendo para ver que se renderiza */

  let render = Routes[route] ? Routes[route] : Error404();
  content.innerHTML = await render;
};

export default router;
