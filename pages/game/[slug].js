import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { getCategories, getGames } from "../../lib/api";
import Detail from "../../components/Detail";
import ListItem from "../../components/ListItem";
import Link from "next/link";
import Banner from "../../components/Banner";
import { ADS_SLOT_ID, SITE_META } from "../../lib/constants";
import { sparklesIcon } from "../../components/Icons";
import Head from "next/head";

export default function Games({
  game,
  categories,
  leftGames,
  rightGames,
  bottomGames,
}) {
  // console.log(game);
  const router = useRouter();
  const { slug } = router.query;

  const AsideGameList = ({ games }) => {
    return (
      <ul className="grid w-full grid-cols-4 gap-3 md:grid-cols-10 md:gap-6 xl:grid-cols-2">
        <ListItem games={games} />
      </ul>
    );
  };

  return (
    <>
      <Layout items={categories}>
        <Head>
          <title>
            {`${game.title} by ${SITE_META.name} : Free Online Games to Play`}
          </title>
          <meta name="description" content={game.description} />
          <meta
            name="keywords"
            content={`${game.title.toLowerCase()}, instant games, easy game, free online games, flash games, casual games,, browser games, free games to play, arcade games, pc games download, online games for pc, best online games, free games for pc, play games online`}
          />
        </Head>

        <div className="relative z-30 grow">
          <div className="grid gap-3 md:my-8 md:gap-6 xl:mx-8 xl:grid-cols-12 xl:grid-rows-4">
            <div className="xl:col-span-8 xl:col-start-3 xl:row-span-4 xl:row-start-1">
              <div className="mx-6 mt-4 flex flex-row space-x-2 pb-3 drop-shadow md:mx-8">
                <Link href={`/`}>Home</Link>
                <span>/</span>
                <Link href={`/category/${game.category.toLowerCase()}`}>
                  <a title={game.category}>{game.category}</a>
                </Link>
                <span>/</span>
                <span>{game.title}</span>
              </div>
              <Detail game={game} />
              <Banner
                className={`banner mt-4`}
                slot={ADS_SLOT_ID.detail}
                auto
              />
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

export async function getStaticProps(context) {
  let data = await getGames();
  let game = data.games.filter((game) => game.slug == context.params.slug);
  const categories = data.categories;
  let relatedGames = data.basicData.filter(
    (game) => game.slug !== context.params.slug
  );

  return {
    props: {
      game: game[0],
      categories,
      leftGames: relatedGames.slice(0, 8),
      rightGames: relatedGames.slice(8, 16),
      bottomGames: relatedGames.slice(16, 24),
    },
  };
}

export const getStaticPaths = async () => {
  const games = await getGames().then((res) => res.basicData);
  const paths = games.map((game) => ({
    params: {
      slug: game.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
