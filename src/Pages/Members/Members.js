import React, { useState } from "react";
import { MembersData } from "./MembersData";

function Members() {
  const [background, setBackground] = useState("10");

  return (
    <>
      <div className=" flex justify-center relative bg-slate-200">
        <div className="flex flex-row flex-wrap w-fit sm:w-[20rem] gap-4 p-4 absolute top-0 left-0 right-0 ">
          {MembersData.map((item) => {
            return (
              <img
                onClick={() => setBackground(item.ref)}
                key={item.id}
                src={item.img}
                alt={item.name}
                className="w-[62px] h-[62px] border-2 border-black hover:opacity-75 sm:min-h-[90px] sm:min-w-[90px] cursor-pointer"
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
