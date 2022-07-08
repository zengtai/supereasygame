import Link from "next/link";
import Image from "./Image";
import { starIcon } from "./Icons";
export default function List({ title, games, icon, cols, className }) {
  const setCol = () => {
    if (cols == "2") return `grid-cols-2`;
    else if (cols == "3") return `grid-cols-3`;
    else if (cols == "5") return `grid-cols-5`;
    else return `grid-cols-4`;
  };

  const gamesList = games.map((game) => (
    <li key={game.id} className={className}>
      <Link href={`/game/${game.slug}`}>
        <a className="group md:delay-50 duration-400 relative block aspect-square overflow-hidden rounded-2xl shadow-md shadow-black/30 transition ease-in-out hover:shadow-lg hover:shadow-black/40 md:hover:origin-bottom md:hover:scale-110">
          <Image
            src={game.icon}
            alt={game.title}
            width={200}
            height={200}
            className="bg-loading w-full bg-center bg-no-repeat"
            layout="responsive"
          />
          <div className="absolute -bottom-[150%] hidden h-full w-full items-end justify-center text-center text-xs font-semibold group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-black/0 sm:flex md:group-hover:bottom-0">
            <div className="h-auto w-full text-ellipsis p-2 text-center">
              <h3 className="leading-4">{game.title}</h3>
              <p className="flex flex-row items-center justify-center text-xl font-bold text-orange-500">
                {starIcon()}
                {game.stars}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  ));
  if (games.length != 0) {
    if (title === undefined) {
      return (
        <>
          <ul
            className={`grid ${setCol()} gap-3 py-3 sm:grid-cols-4 md:grid-cols-6 md:gap-6 xl:grid-cols-8 2xl:grid-cols-12`}
          >
            {gamesList}
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
            className={`grid ${setCol()} gap-3 py-3 sm:grid-cols-4 md:grid-cols-6 md:gap-6 xl:grid-cols-8 2xl:grid-cols-12`}

            // className={
            //   setCol()
            //     ? `grid grid-cols-${cols} sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-3 p-2`
            //     : `grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-3 p-2`
          >
            {gamesList}
          </ul>
        </>
      );
    }
  } else {
    return <></>;
  }
}
