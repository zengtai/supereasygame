import Layout from "@/components/Layout";
import Link from "next/link";
import List from "@/components/List";
import { useRouter } from "next/router";
import { getGamesByCategory, getGames } from "@/lib/api";
import Head from "next/head";
import { ADS_SLOT_ID, SITE_META, ADS_ID } from "@/lib/constants";
import Banner from "@/components/Banner";
import Script from "next/script";
import Breadcrumb from "@/components/Breadcrumb";

export default function GamesListByCategory({ games, categories }) {
  // console.log(games);
  const router = useRouter();
  const { slug } = router.query;
  // console.log(router.query);
  // console.log({ slug });
  let categoryName = slug
    .toString()
    .replace(/^\S/, (s) => s.toUpperCase())
    .replace(/-/g, ` `);

  categoryName = categoryName.toLowerCase() === "io" ? `IO` : categoryName;
  // console.log(categoryName);
  return (
    <>
      <Layout items={categories}>
        <Head>
          <title>
            {`${categoryName} Games - Play Now for Free at ${SITE_META.NAME}!`}
          </title>
          <link rel="canonical" href={`${SITE_META.URL + slug}/`} />
          {/* <title>
            {`${categoryName} Games by ${SITE_META.NAME} : Free Online Games to Play`}
          </title> */}
          <meta name="description" content="" />
          <meta
            name="keywords"
            content={`${categoryName} game, ${categoryName} games, free ${categoryName} game, free ${categoryName} games, ${categoryName} online game, ${categoryName} online games`}
          />
        </Head>
        <Script
          id="ads-init"
          strategy="beforeInteractive"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}`}
          crossOrigin="anonymous"
        />

        <div className="grow pt-6 md:p-8">
          <div className="xl:col-span-8 xl:col-start-3 xl:row-span-3 xl:row-start-1">
            <div className="mx-6 flex flex-row space-x-2 pb-3 drop-shadow md:mx-8">
              <Link href={`/`}>Home</Link>
              <span>/</span>
              <span>{categoryName} Games</span>
            </div>
          </div>
          <h1 className="px-2 pb-2 text-center text-xl font-semibold capitalize text-sky-100 drop-shadow md:pb-3 md:text-3xl">
            {categoryName} Games
          </h1>
          <div className="mb-3 text-center text-xs">{`About ${categoryName} games`}</div>
          <div className="mx-6 mb-4">
            <List cols="4" games={games} />
          </div>
        </div>

        <Banner
          slot={ADS_SLOT_ID.CATEGORY}
          auto
          key={`category-ad-${categoryName}-${Math.random()}`}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const games = await getGamesByCategory(`${context.params.slug}`);
  const categories = await getGames().then((res) => res.categories);

  return {
    props: {
      games,
      categories,
    },
  };
}

export const getStaticPaths = async () => {
  const categories = await getGames().then((res) => res.categories);
  const paths = categories.map((category) => ({
    params: {
      slug: category.toLowerCase().replace(/ /g, `-`),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
