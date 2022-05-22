import React from "react";
import Banner from "../../components/Banner/Banner";
import Content from "../../components/Content/Content";

function Home() {
  return (
    <>
      <div className="bg-slate-200">
        <Banner />
        <Content />
      </div>
    </>
  );
}

export default Home;
