import Link from "next/link";
import Image from "./Image";
import { iconFirst, iconSecond, iconThird, starIcon, triIcon } from "./Icons";

const ListItem = ({ games, className }) => {
  const featuredIcons = [iconFirst(), iconSecond(), iconThird()];
  return games.map((game, index) => (
    <li key={game.id} className={className}>
      {game.featured == true ? (
        <div className="mb-2 flex justify-center drop-shadow">
          {featuredIcons[index]}
        </div>
      ) : (
        ``
      )}
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
          <div className="absolute bottom-0 flex h-full w-full items-end justify-center bg-gradient-to-t from-black to-black/0 text-center text-xs font-semibold md:-bottom-[150%] md:group-hover:bottom-0">
            <div className="h-auto w-full text-ellipsis p-2 text-center">
              <h3 className="text-sm leading-4">{game.title}</h3>
              <p className="flex flex-row items-center justify-center text-xl font-bold text-orange-500">
                {starIcon()}
                {game.stars}
              </p>
              <Link href={game.url}>
                <a className="mx-4 mt-2 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-4 py-2 uppercase md:hidden">
                  {triIcon()}
                </a>
              </Link>
            </div>
          </div>
        </a>
      </Link>
    </li>
  ));
};

export default ListItem;
