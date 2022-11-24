import { SITE_META, ADS_ID, SHOW_AD } from "@/lib/constants";

import Head from "next/head";
// import { useAmp } from "next/amp";

import {
  // fireIcon,
  hotIcon,
} from "@/components/Icons";

import Layout from "@/components/Layout";
import List from "@/components/List";

import Script from "next/script";
import { categoryList, dataForHome } from "@/lib/api/v2";

export default function Home({ data }) {
  // const isAmp = useAmp();
  console.log(`games: `, data.games);
  console.log(`categories: `, data.categories);
  return (
    <>
      <Layout navItems={data.categories}>
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

        <div className="grow px-6 md:px-8">
          <List games={data.games} />
        </div>
      </Layout>
    </>
  );
}

export const PER_PAGE = 24;

export const getStaticProps = async (ctx) => {
  const categories = await categoryList();
  console.log(`categories: `, categories);
  console.log(`type categories: `, typeof categories);

  const currentPage = ctx.params.page || 1;
  console.log(`currentPage: `, +currentPage);

  const data = await dataForHome(+currentPage, PER_PAGE);

  return {
    props: {
      data: {
        games: data.games,
        categories: categories,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const total = await dataForHome().then((res) => res.total);
  // console.log(`total: `, total);

  const totalPages = Math.ceil(total / PER_PAGE);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: {
      page: `${i + 1}`,
    },
  }));

  // console.log(`paths: `, paths);
  return {
    paths,
    fallback: "blocking",
  };
};
