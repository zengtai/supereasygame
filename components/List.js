import ListItem from "./ListItem";

export default function List({ title, games, icon, cols, className, type }) {
  const setCol = () => {
    if (cols == "2") return `grid-cols-2`;
    else if (cols == "3") return `grid-cols-3`;
    else if (cols == "5") return `grid-cols-5`;
    else return `grid-cols-4`;
  };

  if (games.length != 0) {
    if (title === undefined) {
      return (
        <>
          <ul
            className={`grid ${setCol()} h-full grid-cols-1 gap-4 overflow-visible py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8`}
          >
            <ListItem games={games} className={className} type={type} />
          </ul>
        </>
      );
    } else {
      return (
        <>
          <h2 className="flex items-center space-x-2 py-2 pb-0 font-semibold drop-shadow md:text-lg">
            <span className="text-lime-400">{icon}</span>
            <span>{title}</span>
          </h2>
          <ul
            className={`grid ${setCol()} h-full grid-cols-1 gap-4 overflow-visible py-4 md:grid-cols-3 xl:grid-cols-5 xl:gap-8`}
          >
            <ListItem games={games} className={className} type={type} />
          </ul>
        </>
      );
    }
  } else {
    return <></>;
  }
}
