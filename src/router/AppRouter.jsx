import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { FavoritesPage, HomePage } from '../pages';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
