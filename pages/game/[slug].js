import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { getCategories, getGames } from "../../lib/api";
import Detail from "../../components/Detail";
import ListItem from "../../components/ListItem";
import Link from "next/link";
import Adsense from "../../components/Adsense";
import { DETAIL_ADS_ID } from "../../lib/constants";
import { sparklesIcon } from "../../components/Icons";

export default function Games({
  game,
  categories,
  leftGames,
  rightGames,
  bottomGamesX44,
}) {
  // console.log(game);
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Layout items={categories}>
        <Adsense height="h-[100px]" slot={DETAIL_ADS_ID} />

        <div className="grow p-4 md:p-8 relative z-30">
          <div className="grid xl:grid-cols-12 xl:grid-rows-5 gap-3 md:gap-6">
            <div className="xl:col-start-3 xl:row-start-1 xl:col-span-8 xl:row-span-3">
              <div className="pb-3 flex flex-row space-x-2">
                <Link href={`/`}>Home</Link>
                <span>/</span>
                <Link href={`/category/${game.category.toLowerCase()}`}>
                  <a title={game.category}>{game.category}</a>
                </Link>
                <span>/</span>
                <span>{game.title}</span>
              </div>
              <Detail game={game} />
            </div>
            <h3 className="flex flex-row text-lg text-sky-100/80 font-semibold px-2 xl:sr-only">
              <span className="mr-1 text-yellow-500">
                <sparklesIcon />
              </span>
              You may also like
            </h3>
            <div className="xl:col-start-1 xl:row-start-1 xl:col-span-2 xl:row-span-5 ">
              <ul className="grid grid-cols-5 md:grid-cols-10 xl:grid-cols-2 gap-3 md:gap-6">
                {/* <ListItem games={leftGames} /> */}
              </ul>
            </div>
            <div className="xl:col-start-11 xl:row-start-1 xl:col-span-2 xl:row-span-5">
              <ul className="grid grid-cols-5 md:grid-cols-10 xl:grid-cols-2 gap-3 md:gap-6">
                {/* <ListItem games={rightGames} /> */}
              </ul>
            </div>
            <div className="xl:col-start-3 xl:row-start-4 xl:col-span-8 xl:row-span-2">
              <ul className="grid grid-cols-5 md:grid-cols-10 xl:grid-cols-8 gap-3 md:gap-6">
                {/* <ListItem games={bottomGamesX44} /> */}
              </ul>
            </div>
          </div>
        </div>

        <Adsense height="h-[200px]" slot={DETAIL_ADS_ID} />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  let games = await getGames();
  const categories = await getCategories();
  let game = games.filter((game) => game.slug == `${context.params.slug}`);
  // console.log(game);
  const currentGameIndex = games.findIndex(
    (game) => game.slug == `${context.params.slug}`
  );
  // console.log(currentGameIndex);
  games.splice(currentGameIndex, 1);
  games.sort(function (a, b) {
    return Date.parse(a.time) > Date.parse(b.time) ? 1 : -1;
  });
  return {
    props: {
      game: game[0],
      categories,
      rightGames: games.slice(0, 10),
      leftGames: games.slice(11, 21),
      bottomGamesX44: games.slice(22, 38),
      games,
    },
  };
}

export const getStaticPaths = async () => {
  const games = await getGames("SELECTED");
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
