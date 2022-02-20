import Layout from "../../components/Layout";
import List from "../../components/List";
import { useRouter } from "next/router";
import { getGamesByCategory, getCategories } from "../../lib/api";
import Head from "next/head";
import { SITE_NAME, CAT_ADS_ID } from "../../lib/constants";
import Adsense from "../../components/Adsense";

export default function GamesListByCategory({ games, categories }) {
  // console.log(games);
  const router = useRouter();
  const { slug } = router.query;
  // console.log(router.query);
  // console.log({ slug });
  const categoryName = slug.toString().replace(/^\S/, (s) => s.toUpperCase());
  // console.log(categoryName);
  return (
    <>
      <Layout items={categories} isOpen>
        <Head>
          <title>
            {categoryName} Games | Play {categoryName} Games on {SITE_NAME}
          </title>
        </Head>

        <Adsense height="h-[100px]" slot={CAT_ADS_ID} />

        <div className="grow p-4 md:p-8">
          <h1 className="px-2 pb-2 text-center text-xl font-semibold capitalize text-sky-100/90 md:pb-3 md:text-3xl">
            {categoryName} Games
          </h1>
          <List cols="4" games={games} />
        </div>

        <Adsense height="h-[200px]" slot={CAT_ADS_ID} />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const games = await getGamesByCategory(`${context.params.slug}`);
  const categories = await getCategories();

  return {
    props: {
      games,
      categories,
    },
  };
}

export const getStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((category) => ({
    params: {
      slug: category,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
