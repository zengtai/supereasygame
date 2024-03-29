async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.PUBLIC_NEXT_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PUBLIC_NEXT_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Fail to fetch API");
  }

  return json.data;
}

// Data for Category List
export const categoryList = async () => {
  const data = await fetchAPI(`
    query categoryList {
      Categories {
        name
        slug
      }
    }
  `);

  return data?.Categories;
};

// Data for Homepage
export const dataForHome = async (page = 1, limit = 20) => {
  const dataForHome = await fetchAPI(
    `
    query dataForHome ($page: Int, $limit: Int) {
      Games (page: $page, limit: $limit, sort: "-featured") {
          title
          slug
          appid
          rating
          category { name, slug }
      }
      Total: Games_aggregated {
          countDistinct { appid }
      }
    }
  `,
    {
      variables: {
        limit: limit,
        page: page,
      },
    }
  );

  return {
    games: dataForHome.Games,
    total: dataForHome.Total[0].countDistinct.appid,
  };
};

// Data for Games by Category
export const dataByCategorySlug = async (slug, page = 1, limit = 20) => {
  const data = await fetchAPI(
    `
    query dataByCategorySlug ($slug: String, $limit: Int, $page: Int) {
      category: Categories (filter: { slug: { _eq: $slug } }) {
        name,
        slug,
        description
      }
      games : Games (filter: { category: { slug: { _eq: $slug } } }, page: $page, limit: $limit, sort: "-featured") {
        title
        appid
        slug
        rating
        category {
            name
            slug
        }
        featured
      }
      total: Games_aggregated (filter: { category: { slug: { _eq: $slug } } }) {
        countDistinct {
            appid
        }
      }
      }
    `,
    {
      variables: {
        slug: slug,
        limit: limit,
        page: page,
      },
    }
  );

  return {
    category: data.category[0],
    games: data.games,
    total: data.total[0].countDistinct.appid,
  };
};

// Data for All Games
export const getAllGamesWithSlug = async () => {
  const data = await fetchAPI(
    `
    query getAllGamesWithSlug{
      Games {
        slug
        category {
          slug
        }
      }
    }
    `
  );
  return data?.Games;
};

// Data for Game Detail ( with Related Games )
export const dataBySlug = async (slug, limit = 6) => {
  const data = await fetchAPI(
    `
    query dataBySlugAndRelated ($slug: String, $limit: Int) {
      game: Games (filter: { slug: { _eq: $slug } }) {
        title
        appid
        category { name, slug }
        description
        rating
        played
      }
      related: Games (filter: { slug: { _neq: $slug }, featured: { _eq: true } }, limit: $limit) {
        title
        appid
        slug
        category { name, slug }
      }
    }
    `,
    {
      variables: {
        slug: slug,
        limit: limit,
      },
    }
  );
  return {
    game: data.game,
    related: data.related,
  };
};

// Get Data Length
export const getTotal = async (category) => {
  const getAllTotal = await fetchAPI(
    `
      query getTotal {
        total: Games_aggregated {
          countDistinct {
              appid
          }
        }
      }
    `
  );
  const getTotalByCategory = await fetchAPI(
    `
      query getTotalByCategory {
        total: Games_aggregated (filter: { category: { slug: { _eq: $slug } } }) {
          countDistinct {
              appid
          }
        }
      }
    `,
    {
      variables: {
        slug: category,
      },
    }
  );
  const data = category ? getAllTotal : getTotalByCategory;

  return data?.total.countDistinct.appid;
};
