/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import HomeProjects from "./component/HomeProjects";

const page = () => {
  return (
    <>
      <Banner></Banner>
      <HomeProjects></HomeProjects>
      <Contact></Contact>
    </>
  );
};

export default page;
