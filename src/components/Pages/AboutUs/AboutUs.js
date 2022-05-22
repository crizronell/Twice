import React from "react";
import track from "../../assets/img/track.png";
import { TrackListData } from "./TrackListData";

function AboutUs() {
  return (
    <div className="bg-slate-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
        <div className="p-4">
          <img
            className="w-fit h-screen sm:h-[40rem] sm:min-w-xl rounded-lg"
            src={track}
            alt="bg"
          />
        </div>
        <div className="p-4 w-fit font-mono text-2xl sm:text-xl ">
          <p className="italic font-bold text-justify grid place-items-center ">
            Formula of Love: O+T=＜3
          </p>
          <p className="text-justify mt-4 sm:max-w-screen-sm">
            The third Korean studio album by South Korean girl group Twice. It
            was released on November 12, 2021, by JYP Entertainment and Republic
            Records. Its title track, "Scientist", a "funky" dance-pop song,
            blending elements of synth-pop and deep house by featuring
            '80s-inspired synths with "groovy" bass lines in its production.
            Lyrically, it delves into the theme of love and studying the
            fundamentals of romance, and by using science-related word play,
            they declare there is no right answer to love.
          </p>
          <div className="text-xl font-bold font-mono sm:text-md ">
            <div className="italic font-bold grid place-items-center   ">
              <p className="mt-4">TrackList</p>
            </div>
            <div className="grid grid-cols-2 mt-4 ">
              {TrackListData.map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <iframe
          width="950"
          height="534"
          src="https://www.youtube.com/embed/vPwaXytZcgI?list=OLAK5uy_mW7fzKBaEEbLHmQwAqTA76SOcqAgOZPjk"
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
}

export default AboutUs;
