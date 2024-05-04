import { Header, Navigation, Search } from '@/containers/public';
import React from 'react'
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  return (
    <div className="w-full flex gap-6 flex-col items-center h-full">
      <Header />
      <Navigation />
      {/* {isLoggedIn && <Search />} */}
      <Search/>
      <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
      {/* <Intro />
      <Contact /> */}
      <div className="h-[500px]"></div>
    </div>
  );
}

export default Home