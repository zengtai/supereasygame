import { useState } from "react";
import {
  SITE_META,
  ADS_SLOT_ID,
  FEATURED_GAMES,
  IMAGE_PATH,
  IMAGE_FORMAT,
  ADS_ID,
  SHOW_AD,
} from "@/lib/constants";

import Head from "next/head";
// import { useAmp } from "next/amp";

import { getGames } from "@/lib/api/index";

import {
  // fireIcon,
  hotIcon,
  topIcon,
  gameIcon,
  categoryIcon,
  starIcon,
} from "@/components/Icons";

import Link from "next/link";
import Image from "@/components/Image";
import Layout from "@/components/Layout";
import List from "@/components/List";

import Category from "@/components/Category";
import dynamic from "next/dynamic";
import Script from "next/script";
import { categoryList, dataForHome } from "@/lib/api/v2";

// import InfiniteScroll from "react-infinite-scroll-component";
const InfiniteScroll = dynamic(() => import("react-infinite-scroll-component"));
const Banner = dynamic(() => import("@/components/Banner"));
// export const config = { amp: "hybrid" };

export default function Home({
  games,
  newGames,
  featuredGames,
  categories,
  tmp,
}) {
  // const isAmp = useAmp();
  console.log(`tmp: `, tmp);

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
      <Layout navItems={categories}>
        <Head>
          <title>{`${SITE_META.NAME} : Free Online Games to Play`}</title>
          <link rel="canonical" href={SITE_META.URL} />
          <meta
            name="description"
            content="Come to Supereasy Game to play the newest online casual games for free!"
          />
          <meta
            name="keywords"
            content={`supereasy game, supereasy games, instant games, easy game, free online games, casual games, flash games, browser games, free games to play, arcade games, pc games download, online games for pc, best online games, free games for pc, play games online`}
          />
        </Head>
        {SHOW_AD && (
          <Script
            id="ads-init"
            strategy="beforeInteractive"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}`}
            crossOrigin="anonymous"
          />
        )}
        <div className="relative z-30 grow pt-5">
          <div className="px-6 md:px-8">
            <List
              icon={hotIcon()}
              games={featuredGames}
              title="Popular This Week"
              cols="3"
            />
          </div>

          <div className="px-6 md:px-8">
            <List
              icon={topIcon()}
              games={newGames}
              title="New Games"
              cols="4"
            />
          </div>

          <div className="px-6 md:px-8">
            <h2 className="flex items-center space-x-2 py-2 pb-0 font-semibold text-sky-100 drop-shadow md:text-lg">
              <span className="text-lime-400">{gameIcon()}</span>
              <span>All Games</span>
            </h2>

            <List games={games} />
          </div>

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
  // const data = await getGames();
  const games = await dataForHome(1, 24).then((res) => res.games);
  const newGames = games.slice(0, 8);
  const featuredGames = games.filter((item) =>
    FEATURED_GAMES.includes(item.name)
  );
  // const categories = data.categories;

  const tmp = await dataForHome();

  const categories = await categoryList();

  return {
    props: {
      games: games.reverse(),
      newGames,
      featuredGames,
      categories,
    },
  };
};
