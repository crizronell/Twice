import React, { useState } from "react";
import { MembersData } from "./MembersData";

function Members() {
  const [background, setBackground] = useState("1");

  return (
    <>
      <div className=" flex justify-center relative bg-slate-200">
        <div className="w-fit h-auto  flex flex-row flex-wrap sm:w-1/2 lg:w-96 gap-4 p-4 absolute top-0 left-0 right-0 ">
          {MembersData.map((item) => {
            return (
              <img
                onClick={() => setBackground(item.ref)}
                key={item.id}
                src={item.img}
                alt={item.name}
                className="w-16 h-16 border-2 border-black hover:opacity-75 cursor-pointer sm:h-[6.5rem] sm:w-[6.5rem] md:h-[6.9rem] md:w-[6.9rem]  lg:w-28 lg:h-28"
              />
            );
          })}
        </div>
        <div className="flex justify-end">
          {MembersData.map((item) => {
            return (
              <div key={item.ref}>
                {background === item.ref ? (
                  <>
                    <div className="p-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-screen w-fit  rounded-lg"
                      />
                    </div>
                    <div className="w-fit flex flex-col absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 sm:top-[40%] sm:left-[80%]">
                      <p className="text-3xl font-bold font-mono text-white sm:text-md sm:text-black ">
                        {item.name}
                      </p>
                      <p className="text-3xl font-bold font-mono text-white sm:text-md sm:text-black ">
                        {item.birthday}
                      </p>
                    </div>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Members;
