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

// import InfiniteScroll from "react-infinite-scroll-component";
const InfiniteScroll = dynamic(() => import("react-infinite-scroll-component"));
const Banner = dynamic(() => import("@/components/Banner"));
// export const config = { amp: "hybrid" };

export default function Home({ games, newGames, featuredGames, categories }) {
  // const isAmp = useAmp();

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
        <Script
          id="ads-init"
          strategy="beforeInteractive"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}`}
          crossOrigin="anonymous"
        />
        <div className="relative z-30 grow pt-5">
          <div className="px-6 md:px-8">
            <List
              icon={hotIcon()}
              games={featuredGames}
              title="Popular This Week"
              cols="3"
            />
          </div>

          <Banner
            className={`banner`}
            slot={ADS_SLOT_ID.HOME}
            responsive="false"
            key={`home-ad-1-${Math.random()}`}
          />

          <div className="px-6 md:px-8">
            <List
              icon={topIcon()}
              games={newGames}
              title="New Games"
              cols="4"
            />
          </div>

          <Banner
            slot={ADS_SLOT_ID.HOME}
            auto
            key={`home-ad-2-${Math.random()}`}
          />

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
                          src={
                            IMAGE_PATH +
                            IMAGE_FORMAT +
                            `/` +
                            game.name +
                            `.` +
                            IMAGE_FORMAT
                          }
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

          <div className="px-6">
            <Category
              icon={categoryIcon()}
              title="Categories"
              categories={categories}
            />
          </div>

          <div className="mt-4">
            <Banner
              slot={ADS_SLOT_ID.HOME}
              auto
              key={`home-ad-3-${Math.random()}`}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  // const games = await getGames();
  const data = await getGames();
  const games = data.basicData;
  const newGames = games.slice(0, 8);
  const featuredGames = games.filter((item) =>
    FEATURED_GAMES.includes(item.name)
  );
  const categories = data.categories;

  return {
    props: {
      games: games.reverse(),
      newGames,
      featuredGames,
      categories,
    },
  };
};
