import Link from "next/link";
import Image from "./Image";
import { starIcon } from "./Icons";
import { IMAGE_PATH, IMAGE_FORMAT } from "../lib/constants";

const ListItem = ({ games, className }) => {
  return games.map((game) => (
    <li key={game.id} className={className}>
      <Link href={`/game/${game.slug}`}>
        <a className="group md:delay-50 duration-400 relative block aspect-square overflow-hidden rounded-2xl shadow-md shadow-black/30 transition ease-in-out hover:shadow-lg hover:shadow-black/40 md:hover:origin-bottom md:hover:scale-110">
          <Image
            src={
              IMAGE_PATH + IMAGE_FORMAT + "/" + game.name + `.` + IMAGE_FORMAT
            }
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
};

export default ListItem;
