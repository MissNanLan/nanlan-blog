import Index from './pages/index';
import Home from './pages/home';
import Note from './pages/note';
import Login from './pages/login';
import Detail from './pages/detail';

const routers = [
  { path: '/login', name: 'login', component: Login },
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      { path: '/home', name: 'home', component: Home },
      { path: '/detail/:id', name: 'detail', component: Detail },
      { path: '/note', name: 'note', component: Note },
      { path: '/', name: 'index', component: Index }
    ]
  }
];

export default routers;
