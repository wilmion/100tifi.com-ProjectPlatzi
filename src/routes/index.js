import Header from '../templates/Header';
import Home from '../pages/home';
import Error404 from '../pages/error404';
import Character from '../pages/character';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
const routes = {
    '/': Home,
    '/:id': Character,
    '/Contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('Header');
    const content = null || document.getElementById('content');
    
    header.innerHTML = await Header();
    
    let hash = getHash();
    let route = await resolveRoutes(hash); 
    let render = routes[route]?routes[route]:Error404;
    content.innerHTML = await render();
};
export default router;