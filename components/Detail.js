import Image from "./Image";
import Link from "next/link";
import Head from "next/head";
import { SITE_NAME } from "../lib/constants";
import { starIcon } from "./Icons";

export default function Detail({ game }) {
  return (
    <>
      <Head>
        <title>
          Play {game.title} on {SITE_NAME}
        </title>
      </Head>
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white border-8 border-sky-100 rounded-[2rem] p-5 shadow-lg shadow-black/10 text-cyan-700">
        <div className="aspect-square w-24 h-24 md:w-40 md:h-40 shrink-0">
          <Image
            src={game.icon}
            alt={game.title}
            width={200}
            height={200}
            className="w-full rounded-xl bg-loading bg-center bg-no-repeat bg-black/10"
          />
        </div>
        <div className="text-center md:text-left md:px-5">
          <h1 className="py-2 text-xl md:text-3xl font-semibold">
            <span>{game.title}</span>
          </h1>
          <p className="capitalize">
            <Link href={`/category/${game.category.toLowerCase()}`}>
              <a className="text-xs py-1 px-2 bg-lime-600/80 text-sky-100/90 shadow-lime-500/30 rounded-md shadow-md">
                {game.category.toLowerCase()}
              </a>
            </Link>
          </p>
          <p className="flex flex-row justify-center md:justify-start items-center mt-3 space-x-3">
            <span className="text-2xl font-bold">
              <span className="flex flex-row items-center text-orange-500">
                <span>{starIcon()}</span>
                {game.stars}
              </span>
            </span>
            <span className="opacity-50">{game.played} played</span>
          </p>
          <p className="py-3 text-left text-sky-800/80 text-xs md:text-sm">
            {game.description}
          </p>
        </div>
      </div>
      <p className="py-4 md:pt-2">
        <Link href={game.url}>
          <a
            className="block md:hover:scale-110 md:hover:shadow-2xl md:hover:delay-100 md:hover:shadow-black/40 transition-transform ease-in-out duration-300 md:w-96 mx-auto bg-lime-500 text-center p-3 lg:p-4 text-lg lg:text-2xl font-semibold text-white rounded-full shadow-xl shadow-black/20"
            title={`Play ${game.title} now`}
          >
            PLAY NOW
          </a>
        </Link>
      </p>
    </>
  );
}
