import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import Detail from "@/components/Detail";
import { sparklesIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import ListItem from "@/components/ListItem";
// import { getGames } from "@/lib/api";
import { categoryList, dataBySlug, getAllGamesWithSlug } from "@/lib/api/v2";
import { SHOW_AD, ADS_SLOT_ID, SITE_META, ADS_ID } from "@/lib/constants";
const Banner = dynamic(() => import("@/components/Banner"));

export default function Games({ game, categories, leftGames, rightGames }) {
  console.log(`game: `, game);

  let gameName = game.title.toLowerCase();

  const AsideGameList = ({ games }) => {
    return (
      <ul className="grid w-full grid-cols-4 gap-3 md:grid-cols-10 md:gap-6 xl:grid-cols-2">
        <ListItem games={games} />
      </ul>
    );
  };

  return (
    <>
      <Layout navItems={categories}>
        <Head>
          <title>
            {`${game.title}  - Play Now for Free at ${SITE_META.NAME}!`}
          </title>
          <link
            ref={`canonial`}
            href={`${
              SITE_META.URL + game.category.slug + "/" + game.slug + "/"
            }`}
          />
          {/* <title>
            {`${game.title} by ${SITE_META.NAME} : Free Online Games to Play`}
          </title> */}
          <meta name="description" content={game.description} />
          <meta
            name="keywords"
            content={`${gameName}, ${gameName} game, ${gameName} games`}
          />
          {/* <meta
            name="keywords"
            content={`${game.title.toLowerCase()}, instant games, easy game, free online games, flash games, casual games,, browser games, free games to play, arcade games, pc games download, online games for pc, best online games, free games for pc, play games online`}
          /> */}
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

        <div className="relative z-30 grow pt-6">
          <div className="grid gap-3 md:my-8 md:gap-6 xl:mx-8 xl:grid-cols-12 xl:grid-rows-4">
            <div className="xl:col-span-8 xl:col-start-3 xl:row-span-4 xl:row-start-1">
              <div className="breadcrumb">
                <Link href={`/`}>Home</Link>
                <span>/</span>
                <Link href={`/${game.category.slug}`}>
                  <a title={game.category.name}>{game.category.name}</a>
                </Link>
                <span>/</span>
                <span>{game.title}</span>
              </div>
              <Detail game={game} />
            </div>

            <h3 className="mx-6 flex flex-row px-2 text-lg font-semibold text-sky-100/80 md:mx-8 xl:sr-only">
              <span className="mr-1 text-yellow-500">{sparklesIcon()}</span>
              You may also like
            </h3>
            <div className="mx-6 flex items-end md:mx-0 xl:col-span-2 xl:col-start-1 xl:row-span-4 xl:row-start-1 ">
              {/* <Adsense height={`h-[200px] md:h-[200px] xl:h-[200px]`} wFull /> */}
              <AsideGameList games={leftGames} />
            </div>
            <div className="mx-6 mb-4 flex items-end md:mx-0 xl:col-span-2 xl:col-start-11 xl:row-span-4 xl:row-start-1 xl:mb-0 ">
              <AsideGameList games={rightGames} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const categories = await categoryList();
  const data = await dataBySlug(ctx.params.game);
  console.log(`data: `, data);
  const game = data.game[0];

  const relatedGames = data.related;

  return {
    props: {
      game: game,
      categories: categories,
      leftGames: relatedGames.slice(0, 8),
      rightGames: relatedGames.slice(8, 16),
      // bottomGames: relatedGames.slice(16, 24),
    },
  };
}

export const getStaticPaths = async () => {
  const games = await getAllGamesWithSlug();
  const paths = games.map((game) => ({
    params: {
      game: game.slug,
      category: game.category.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
