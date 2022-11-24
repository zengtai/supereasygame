import Head from "next/head";
import Layout from "@/components/Layout";
import { getGames } from "@/lib/api";
import { categoryList } from "@/lib/api/v2";

export default function Custom404({ categories }) {
  return (
    <Layout navItems={categories}>
      <Head>
        <title>404</title>
      </Head>
      <div className="grow p-4 md:p-8">
        <h1 className="px-2 pt-8 pb-2 text-center text-2xl font-semibold capitalize text-sky-100 drop-shadow md:pb-3 md:text-3xl">
          404 - Page Not Found
        </h1>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const categories = await categoryList();

  return {
    props: {
      categories,
    },
  };
};
