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
import Layout from "../components/Layout";
import { SITE_NAME, HOME_ADS_ID } from "../lib/constants";
import List from "../components/List";
import Adsense from "../components/Adsense";
import InfiniteScroll from "react-infinite-scroll-component";
import Category from "../components/Category";
import ListItem from "../components/ListItem";

export default function Home({ games, newGames, featuredGames, categories }) {
  const initGames = games.slice(0, 48);
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
          <title>{SITE_NAME} | Play Free Games Online</title>
        </Head>
        <div className="relative z-30 grow py-4">
          {/* <Adsense height="h-[100px]" slot={HOME_ADS_ID} /> */}
          <div className="px-6 md:px-8">
            <h2 className="flex items-center space-x-2 py-2 pb-0 font-semibold text-sky-100 drop-shadow md:text-lg">
              <span className="text-lime-400">{gameIcon()}</span>
              <span>
                All Games <span>({total})</span>
              </span>
            </h2>
            <InfiniteScroll
              style={{ overflow: "visible" }}
              dataLength={scrollGames.length}
              next={getMoreGames}
              hasMore={hasMore}
              loader={<div className="my-2 text-center">Loading...</div>}
            >
              <ul className="grid h-full grid-cols-1 gap-4 overflow-visible py-4 md:grid-cols-3 xl:grid-cols-5 xl:gap-8">
                <ListItem
                  type="card"
                  games={scrollGames}
                  className={`second:col-span-2 md:second:col-auto second:row-span-2 md:second:row-auto`}
                />
              </ul>
            </InfiniteScroll>
          </div>
          {/* <Adsense height="h-[200px]" slot={HOME_ADS_ID} /> */}
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
