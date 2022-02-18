import ListItem from "./ListItem";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ScrollList({
  title,
  games,
  icon,
  cols,
  className,
  init = 12,
  step = 4,
}) {
  const setCol = () => {
    if (cols == "2") return `grid-cols-2`;
    else if (cols == "3") return `grid-cols-3`;
    else if (cols == "5") return `grid-cols-5`;
    else return `grid-cols-4`;
  };
  const initGames = games.slice(0, init);

  const [scrollGames, setScrollGames] = useState(initGames);
  const [hasMore, setHasMore] = useState(true);

  const getMoreGames = () => {
    const newGames = games.slice(scrollGames.length, scrollGames.length + step);
    setScrollGames((game) => [...game, ...newGames]);

    if (scrollGames.length >= games.length) setHasMore(!hasMore);
  };

  if (games.length != 0) {
    return (
      <>
        {title !== undefined ? (
          <h2 className="flex items-center px-3 xl:px-8 py-2 xl:pb-1 pb-0 md:text-sm xl:text-xl font-semibold text-slate-600 space-x-2">
            {icon}
            <span>{title}</span>
          </h2>
        ) : (
          ``
        )}
        <InfiniteScroll
          style={{ overflow: "visible" }}
          dataLength={scrollGames.length}
          next={getMoreGames}
          hasMore={hasMore}
          loader={
            <div
              className="m-3 p-4 w-auto mx-auto animate-pulse text-center text-md"
              onClick={getMoreGames}
            >
              <span className="p-4 bg-slate-200 rounded-lg cursor-pointer">
                Load More
              </span>
            </div>
          }
        >
          <ul
            className={`overflow-visible grid ${setCol()} sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-4 xl:gap-6 p-2 xl:py-4 xl:px-8`}
          >
            <ListItem games={scrollGames} className={className} />
          </ul>
        </InfiniteScroll>
      </>
    );
  } else {
    return <></>;
  }
}
