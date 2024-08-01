
import { useEffect } from 'react';
import './App.css'
import Header from './layout/Header/Header';
import { Outlet } from 'react-router-dom';
import { store } from './store';
import { fetchUser } from './store/userSlice';
import HeaderUser from './layout/HeaderUser/HeaderUser';

function App() {

  useEffect(() => {
    store.dispatch(fetchUser())
  }, [])

  return (
    <>
      <Header />
      <HeaderUser />
      <Outlet />
    </>
  )
}

export default App

