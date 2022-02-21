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
        <a className="group md:delay-50 duration-400 relative block overflow-hidden rounded-2xl shadow-md shadow-black/30 transition ease-in-out hover:shadow-lg hover:shadow-black/40 md:hover:origin-bottom md:hover:scale-110">
          <Image
            src={game.icon}
            alt={game.title}
            width={200}
            height={200}
            className="bg-loading w-full bg-center bg-no-repeat"
            layout="responsive"
          />
          <div className="-bottom-[150%] h-8 w-full items-end justify-center overflow-hidden text-ellipsis whitespace-nowrap bg-[#463838] text-center text-xs font-semibold group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-black/0 sm:flex md:absolute md:hidden md:h-full md:group-hover:bottom-0">
            <div className="h-auto w-full p-2 text-center">
              <h3 className="overflow-hidden text-ellipsis leading-4">
                {game.title}
              </h3>
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
            className={`grid ${setCol()} gap-3 py-3 px-6 sm:grid-cols-4 md:grid-cols-6 md:gap-6 xl:grid-cols-8 2xl:grid-cols-12`}
          >
            {gamesList}
          </ul>
        </>
      );
    } else {
      return (
        <>
          <h2 className="relative z-20 flex items-center space-x-2 px-4 pt-4 pb-0 font-semibold text-[#463838] md:text-lg">
            <span>{icon}</span>
            <span>{title}</span>
          </h2>
          <ul
            className={`relative z-20 grid ${setCol()} gap-3 py-3 px-6 sm:grid-cols-4 md:grid-cols-6 md:gap-6 md:px-8 md:pb-8 xl:grid-cols-8 2xl:grid-cols-12`}
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
