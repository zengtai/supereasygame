import Head from "next/head";
import { useState } from "react";
import {
  hotIcon,
  topIcon,
  gameIcon,
  categoryIcon,
  starIcon,
} from "../components/Icons";
import { getGames, getCategories } from "../lib/api";
import Link from "next/link";
import Image from "../components/Image";
import Layout from "../components/Layout";
import { SITE_NAME, HOME_ADS_ID } from "../lib/constants";
import List from "../components/List";
import Adsense from "../components/Adsense";
import InfiniteScroll from "react-infinite-scroll-component";
import Category from "../components/Category";

export default function Home({ games, newGames, featuredGames, categories }) {
  const initGames = games.slice(0, 24);
  const total = games.length;
  console.log(total);
  const [scrollGames, setScrollGames] = useState(initGames);
  const [hasMore, setHasMore] = useState(true);

  const getMoreGames = () => {
    const newScrollGames = games.slice(
      scrollGames.length,
      scrollGames.length + 12
    );
    setScrollGames((game) => [...game, ...newScrollGames]);

    if (scrollGames.length >= total) {
      setHasMore(!hasMore);
    }
  };

  return (
    <>
      <Layout items={categories}>
        <Head>
          <title>{SITE_NAME} | Play Free Games Online</title>
        </Head>
        <div className="grow p-4 md:px-8 md:py-4 relative z-30">
          <List
            icon={hotIcon()}
            games={featuredGames}
            title="Popular This Week"
            cols="3"
          />

          <Adsense height="h-[100px]" slot={HOME_ADS_ID} />

          <List icon={topIcon()} games={newGames} title="New Games" cols="5" />

          <Adsense height="h-[100px]" slot={HOME_ADS_ID} />

          {/* <GameList
            icon={gameIcon()}
            games={games}
            title="All Games"
            className="third:col-span-2 md:third:col-auto third:row-span-2 md:third:row-auto"
          /> */}
          <h2 className="flex items-center py-2 pb-0 md:text-lg font-semibold text-sky-100/80 space-x-2">
            <span className="text-lime-400">{gameIcon()}</span>
            <span>All Games</span>
          </h2>
          <InfiniteScroll
            style={{ overflow: "visible" }}
            dataLength={scrollGames.length}
            next={getMoreGames}
            hasMore={hasMore}
            loader={<div className="my-2 text-center">Loading...</div>}
          >
            <ul className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-3 md:gap-6 py-3">
              {scrollGames.map((game) => (
                <li
                  key={game.id}
                  className="second:col-span-2 md:second:col-auto second:row-span-2 md:second:row-auto"
                >
                  <Link href={`/game/${game.slug}`}>
                    <a className="group aspect-square relative block md:hover:origin-bottom md:hover:scale-110 md:delay-50 transition duration-400 ease-in-out rounded-2xl overflow-hidden shadow-md hover:shadow-lg shadow-black/30 hover:shadow-black/40">
                      <Image
                        src={game.icon}
                        alt={game.title}
                        width={200}
                        height={200}
                        layout="responsive"
                        className="w-full bg-loading bg-center bg-no-repeat"
                      />
                      <div className="absolute hidden sm:flex justify-center items-end w-full h-full font-semibold -bottom-[150%] md:group-hover:bottom-0 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-black/0 text-center text-xs">
                        <div className="p-2 h-auto w-full text-ellipsis text-center">
                          <h3 className="leading-4">{game.title}</h3>
                          <p className="flex flex-row justify-center items-center text-xl font-bold text-orange-500">
                            {starIcon()}
                            {game.stars}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </InfiniteScroll>

          <Adsense height="h-[200px]" slot={HOME_ADS_ID} />

          <Category
            icon={categoryIcon()}
            title="Categories"
            categories={categories}
          />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  // const games = await getGames();
  const games = await getGames();
  const newGames = await getGames("LATEST", 20);
  const featuredGames = await getGames("FEATURED_GAMES");
  const categories = await getCategories();

  return {
    props: {
      games,
      newGames,
      featuredGames,
      categories,
    },
  };
};
