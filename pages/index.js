import Head from "next/head";
import { useState } from "react";
import {
  fireIcon,
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
import { SITE_META, HOME_ADS_ID } from "../lib/constants";
import List from "../components/List";
import Adsense from "../components/Adsense";
import InfiniteScroll from "react-infinite-scroll-component";
import Category from "../components/Category";

export default function Home({ games, newGames, featuredGames, categories }) {
  const initGames = games.slice(0, 24);
  const total = games.length;

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
          <title>{`${SITE_META.name} | Play Free Games Online`}</title>
        </Head>
        <div className="relative z-30 grow py-4">
          <div className="px-6 md:px-8">
            <List
              icon={hotIcon()}
              games={featuredGames}
              title="Popular This Week"
              cols="3"
            />
          </div>

          <Adsense height="h-[100px]" slot={HOME_ADS_ID} />
          <div className="px-6 md:px-8">
            <List
              icon={topIcon()}
              games={newGames}
              title="New Games"
              cols="5"
            />
          </div>

          <Adsense height="h-[100px]" slot={HOME_ADS_ID} />
          <div className="px-6 md:px-8">
            <h2 className="flex items-center space-x-2 py-2 pb-0 font-semibold text-sky-100 drop-shadow md:text-lg">
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
              <ul className="grid grid-cols-4 gap-3 py-3 md:grid-cols-6 md:gap-6 xl:grid-cols-8 2xl:grid-cols-12">
                {scrollGames.map((game) => (
                  <li
                    key={game.id}
                    className="second:col-span-2 md:second:col-auto second:row-span-2 md:second:row-auto"
                  >
                    <Link href={`/game/${game.slug}`}>
                      <a className="group md:delay-50 duration-400 relative block aspect-square overflow-hidden rounded-2xl shadow-md shadow-black/30 transition ease-in-out hover:shadow-lg hover:shadow-black/40 md:hover:origin-bottom md:hover:scale-110">
                        <Image
                          src={game.icon}
                          alt={game.title}
                          width={200}
                          height={200}
                          layout="responsive"
                          className="bg-loading w-full bg-center bg-no-repeat"
                        />
                        <div className="absolute -bottom-[150%] hidden h-full w-full items-end justify-center text-center text-xs font-semibold group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-black/0 sm:flex md:group-hover:bottom-0">
                          <div className="h-auto w-full text-ellipsis p-2 text-center">
                            <h3 className="leading-4">{game.title}</h3>
                            <p className="flex flex-row items-center justify-center text-xl font-bold text-orange-500">
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
          </div>
          <Adsense height="h-[200px]" slot={HOME_ADS_ID} />
          <div className="px-6">
            <Category
              icon={categoryIcon()}
              title="Categories"
              categories={categories}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  // const games = await getGames();
  const games = await getGames();
  const newGames = await getGames("LATEST", 10);
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
