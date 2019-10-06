// UNUSED FILE

import App from './App';
import Players from './ui/Players/Players';

const routes = [
    {
        id: 1,
        isNavBar: true,
        isExact: true,
        path: '/',
        name: 'Homepage',
        component: App
    },
    {
        id: 2,
        isNavBar: true,
        isExact: true,
        path: '/players',
        name: 'Players',
        component: Players
    },
    {
        id: 3,
        isNavBar: true,
        isExact: true,
        path: '/table',
        name: 'Table',
        component: ''
    }
]

export default routes;