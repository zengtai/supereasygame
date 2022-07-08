import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { getCategories, getGames } from "../../lib/api";
import Detail from "../../components/Detail";
import ListItem from "../../components/ListItem";
import Link from "next/link";
import Banner from "../../components/Banner";
import { ADS_SLOT_ID } from "../../lib/constants";
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
        <Banner
          className={`banner mt-4`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.detail}
          responsive="false"
        />

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
            <div className="flex items-end xl:col-span-2 xl:col-start-1 xl:row-span-5 xl:row-start-1">
              {/* <Adsense height={`h-[200px] md:h-[200px] xl:h-[200px]`} wFull /> */}
              <AsideGameList games={leftGames} />
            </div>
            <div className="flex items-end xl:col-span-2 xl:col-start-11 xl:row-span-5 xl:row-start-1">
              <AsideGameList games={rightGames} />
            </div>
            <div className="flex items-end xl:col-span-8 xl:col-start-3 xl:row-span-2 xl:row-start-4">
              <ul className="grid w-full grid-cols-5 gap-3 md:grid-cols-10 md:gap-6 xl:grid-cols-8">
                <ListItem games={bottomGames} />
              </ul>
            </div>
          </div>
        </div>

        <Banner
          className={`banner mt-4`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.detail}
          responsive="false"
        />
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
      leftGames: relatedGames.slice(0, 10),
      rightGames: relatedGames.slice(10, 20),
      bottomGames: relatedGames.slice(20, 36),
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
