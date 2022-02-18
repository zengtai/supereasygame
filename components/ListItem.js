import Link from "next/link";
import Image from "./Image";

const ListItem = ({ games, className }) => {
  return games.map((game) => (
    <li
      key={game.id}
      className={`xl:hover:scale-125 transition ease-in-out duration-500 ${className}`}
    >
      <Link href={`/game/${game.slug}`}>
        <a
          title={game.title}
          className="block rounded-2xl overflow-hidden shadow-lg shadow-slate-900/30 bg-loading bg-center bg-no-repeat"
        >
          <Image
            src={game.icon}
            alt={game.title}
            height={200}
            width={200}
            layout="responsive"
          />
        </a>
      </Link>
      <h3 className="my-1 text-xs text-center leading-tight">{game.title}</h3>
    </li>
  ));
};

export default ListItem;
