import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

export const Navbar = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {
        navigate('/')
      },
    },
    {
      label: 'Favorites',
      icon: 'pi pi-fw pi-heart',
      command: () => {
        navigate('/favorites')
      },
    },
  ];
  
  return <Menubar model={items} />;
};
