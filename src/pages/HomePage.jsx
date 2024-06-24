import React from "react";
import HomeView from "../components/views/home/HomeView";
import LandingView from "../components/views/home/LandingView";

const HomePage = () => {
  const isLogin = false;
  if (isLogin) {
    return <HomeView />;
  } else {
    return <LandingView />;
  }
};

export default HomePage;
