import Layout from "@/components/Layout";
import Link from "next/link";
import List from "@/components/List";
import { useRouter } from "next/router";
import { getGamesByCategory, getGames } from "@/lib/api";
import Head from "next/head";
import { SHOW_AD, ADS_SLOT_ID, SITE_META, ADS_ID } from "@/lib/constants";
import Banner from "@/components/Banner";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";
import { dataByCategorySlug, categoryList, getTotal } from "@/lib/api/v2";

export default function GamesByCategory({
  games,
  categories,
  total,
  category,
}) {
  // console.log(games);
  const router = useRouter();
  // const { category } = router.query;
  // console.log(router.query);
  // console.log({ slug });
  console.log(`category: `, category.name);
  const categoryName = category.name;
  return (
    <>
      <Layout navItems={categories}>
        <Head>
          <title>
            {`${categoryName} Games - Play Now for Free at ${SITE_META.NAME}!`}
          </title>
          <link rel="canonical" href={`${SITE_META.URL + category.slug}/`} />
          {/* <title>
            {`${categoryName} Games by ${SITE_META.NAME} : Free Online Games to Play`}
          </title> */}
          <meta name="description" content={category.description} />
          <meta
            name="keywords"
            content={`${categoryName} game, ${categoryName} games, free ${categoryName} game, free ${categoryName} games, ${categoryName} online game, ${categoryName} online games`}
          />
        </Head>

        <div className="grow pt-6 md:p-8">
          <div className="xl:col-span-8 xl:col-start-3 xl:row-span-3 xl:row-start-1">
            <div className="breadcrumb">
              <Link href={`/`}>Home</Link>
              <span>/</span>
              <span>{categoryName}</span>
            </div>
          </div>
          <h1 className="px-2 pb-2 text-center text-xl font-semibold capitalize text-sky-100 drop-shadow md:pb-3 md:text-3xl">
            {categoryName} Games
          </h1>
          <div className="text-center text-xs xl:text-sm">{`(Total: ${total})`}</div>
          <div className="my-3 mx-4 text-xs xl:text-center xl:text-sm">
            {category.description}
          </div>
          <div className="mx-6 mb-4">
            <List cols="4" games={games} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const total = await getTotal(ctx.params.category);
  const data = await dataByCategorySlug(ctx.params.category, 1, total);
  const categories = await categoryList();

  console.log(`${ctx.params.category}: `, total);

  return {
    props: {
      category: data.category,
      games: data.games,
      total: data.total,
      categories: categories,
    },
  };
}

export const getStaticPaths = async () => {
  const categories = await categoryList();
  const paths = categories.map((category) => ({
    params: {
      category: category.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
