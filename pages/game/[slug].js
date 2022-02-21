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
  bottomGames,
}) {
  // console.log(game);
  const router = useRouter();
  const { slug } = router.query;

  const AsideGameList = ({ games }) => {
    return (
      <ul className="grid w-full grid-cols-5 gap-3 md:grid-cols-10 md:gap-6 xl:grid-cols-2">
        <ListItem games={games} />
      </ul>
    );
  };

  return (
    <>
      <Layout items={categories}>
        <Adsense height="h-[100px]" slot={DETAIL_ADS_ID} />

        <div className="relative z-30 grow px-6 md:p-8">
          <div className="grid gap-3 md:gap-6 xl:grid-cols-12 xl:grid-rows-5">
            <div className="xl:col-span-8 xl:col-start-3 xl:row-span-3 xl:row-start-1">
              <div className="flex flex-row space-x-2 pb-3 drop-shadow">
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
            <h3 className="flex flex-row px-2 text-lg font-semibold text-sky-100/80 xl:sr-only">
              <span className="mr-1 text-yellow-500">{sparklesIcon()}</span>
              You may also like
            </h3>
            <div className="flex items-end bg-black/10 xl:col-span-2 xl:col-start-1 xl:row-span-5 xl:row-start-1">
              {/* <Adsense height={`h-[200px] md:h-[200px] xl:h-[200px]`} wFull /> */}
              <AsideGameList games={leftGames} />
            </div>
            <div className="flex items-end bg-black/10 xl:col-span-2 xl:col-start-11 xl:row-span-5 xl:row-start-1">
              <AsideGameList games={rightGames} />
            </div>
            <div className="flex items-end bg-black/10 xl:col-span-8 xl:col-start-3 xl:row-span-2 xl:row-start-4">
              <ul className="grid w-full grid-cols-5 gap-3 md:grid-cols-10 md:gap-6 xl:grid-cols-8">
                <ListItem games={bottomGames} />
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
      rightGames: games.slice(0, 12),
      leftGames: games.slice(13, 25),
      bottomGames: games.slice(26, 42),
      games,
    },
  };
}

export const getStaticPaths = async () => {
  const games = await getGames();
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
