import './App.css'
import Header from './layout/Header/Header';
import { Outlet } from 'react-router-dom';
import { store } from './store';
import { fetchUser } from './store/userSlice';
import HeaderUser from './layout/HeaderUser/HeaderUser';
import { useSelector } from 'react-redux';
import { IUser, IUserData } from "./interface/interface";
import { fetchUserData } from "./store/transitionSlice.ts";;
import { useEffect } from "react";

function App() {

  const getData = useSelector((state: {user: IUser, userData: IUserData})=> {return state})


  useEffect(() => {
    if(getData.user.status !== "fulfilled") {
      store.dispatch(fetchUser());
    }
    if(getData.user.status === "fulfilled") {
      store.dispatch(fetchUserData(getData.user.record.transitions))
      store.dispatch(fetchUserData(getData.user.record.card))
    }
    console.log("end")

  }, [getData.user])


  return (
    <>
      <Header />
      <HeaderUser />
      <Outlet />
    </>
  )
}

export default App

