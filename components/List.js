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
        <a className="group aspect-square relative block md:hover:origin-bottom md:hover:scale-110 md:delay-50 transition duration-400 ease-in-out rounded-2xl overflow-hidden shadow-md hover:shadow-lg shadow-black/30 hover:shadow-black/40">
          <Image
            src={game.icon}
            alt={game.title}
            width={200}
            height={200}
            className="w-full bg-loading bg-center bg-no-repeat"
            layout="responsive"
          />
          <div className="absolute hidden sm:flex justify-center items-end w-full h-full font-semibold -bottom-[150%] md:group-hover:bottom-0 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-black/0 text-center text-xs">
            <div className="p-2 h-auto w-full text-ellipsis text-center">
              <h3 className="leading-4">{game.title}</h3>
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
            className={`grid ${setCol()} sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-3 md:gap-6 py-3`}
          >
            {gamesList}
          </ul>
        </>
      );
    } else {
      return (
        <>
          <h2 className="flex items-center py-2 pb-0 md:text-lg font-semibold space-x-2">
            <span className="text-lime-400">{icon}</span>
            <span>{title}</span>
          </h2>
          <ul
            className={`grid ${setCol()} sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-3 md:gap-6 py-3`}

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
