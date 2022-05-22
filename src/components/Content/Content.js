import React from "react";
import { ContenData } from "./ContentData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

function Content() {
  return (
    <>
      <div className="container mx-auto ">
        <Splide
          aria-label="Formula of Love"
          options={{
            gap: "1rem",
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
            },
            pagination: false,
            arrows: false,
            snap: true,
          }}
        >
          {ContenData.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="p-4 relative">
                  <Link to="/members">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded-3xl max-w-[25rem] mx-auto hover:opacity-75 sm:max-w-screen"
                    />
                  </Link>
                  <p className=" absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 text-4xl font-bold font-sans text-white sm:text-3xl ">
                    {item.name}
                  </p>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Content;
