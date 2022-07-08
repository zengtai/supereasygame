import Image from "./Image";
import Link from "next/link";
import Head from "next/head";
import { SITE_META } from "../lib/constants";
import { starIcon } from "./Icons";
import { useState } from "react";

export default function Detail({ game }) {
  const [isShowAll, setIsShowAll] = useState(false);
  function toggle() {
    setIsShowAll(!isShowAll);
  }

  // const handleClick = () => {
  //   if (typeof window !== "undefined") {
  //     let currentPlayedGames =
  //       JSON.parse(localStorage.getItem("playedGames")) || [];
  //     currentPlayedGames.push(game.slug);
  //     localStorage.setItem("playedGames", JSON.stringify(currentPlayedGames));
  //   }
  // };
  return (
    <>
      <div className="flex flex-col items-center rounded-[2rem] border-8 border-sky-100 bg-white p-5 text-cyan-700 shadow-lg shadow-black/10 md:flex-row md:items-start">
        <div className="aspect-square h-24 w-24 shrink-0 md:h-40 md:w-40">
          <Image
            src={game.icon}
            alt={game.title}
            width={200}
            height={200}
            className="bg-loading w-full rounded-xl bg-black/10 bg-center bg-no-repeat"
            layout="responsive"
          />
        </div>
        <div className="text-center md:px-5 md:text-left">
          <h1 className="py-2 text-xl font-semibold md:text-3xl">
            <span>{game.title}</span>
          </h1>
          <p className="capitalize">
            <Link href={`/category/${game.category.toLowerCase()}`}>
              <a className="rounded-md bg-lime-600/80 py-1 px-2 text-xs text-sky-100/90 shadow-md shadow-lime-500/30">
                {game.category.toLowerCase()}
              </a>
            </Link>
          </p>
          <p className="mt-3 flex flex-row items-center justify-center space-x-3 md:justify-start">
            <span className="text-2xl font-bold">
              <span className="flex flex-row items-center text-orange-500">
                <span>{starIcon()}</span>
                {game.stars}
              </span>
            </span>
            <span className="opacity-50">{game.played} played</span>
          </p>
          <p className="py-3 text-left text-sm text-sky-800/80 md:text-sm">
            <div
              onClick={toggle}
              className={`
            ${
              isShowAll ? `h-auto` : `max-h-16`
            } relative w-full overflow-hidden text-ellipsis py-3 text-slate-500 after:absolute after:left-0 after:bottom-0 after:h-5 after:w-full after:bg-gradient-to-t after:from-white after:to-white/0`}
            >
              {game.description}
            </div>
          </p>
        </div>
      </div>
      <p className="py-4 md:pt-4">
        <Link href={game.url}>
          <a
            // onClick={handleClick}
            className="mx-auto block rounded-full bg-lime-500 p-3 text-center text-lg font-semibold text-white shadow-xl shadow-black/20 transition-transform duration-300 ease-in-out md:w-96 md:hover:scale-110 md:hover:shadow-2xl md:hover:shadow-black/40 md:hover:delay-100 lg:p-4 lg:text-2xl"
            title={`Play ${game.title} now`}
          >
            PLAY NOW
          </a>
        </Link>
      </p>
    </>
  );
}
