import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { closeIcon, menuIcon } from "./Icons";
import Image from "./Image";
import { SITE_META } from "../lib/constants";

export default function Navbar({ items, isOpen }) {
  const router = useRouter();
  const current = router.query;
  const [isMenuOpen, setMenuOpen] = useState(isOpen);

  function toggle() {
    setMenuOpen(!isMenuOpen);
  }
  console.log(`items: `, items);

  const categoryNav = items?.map((category) => (
    <li
      className={`${
        category.slug == current.slug
          ? `border-slate-50/80 bg-slate-50/20 md:bg-slate-50/10 md:shadow-lg`
          : `border-slate-50/20 bg-slate-50/10 md:border-slate-50/0 md:shadow-none`
      } m-1 overflow-hidden rounded-xl border-2 transition duration-500 ease-in-out hover:bg-slate-50/10 md:bg-slate-50/0`}
      key={category.slug}
    >
      <Link href={`/${category.slug}`}>
        <a
          className={`${
            category.slug == current.slug
              ? `bg-slate-50/10 opacity-80`
              : `opacity-50`
          } block p-2 text-white`}
        >
          {category.name}
        </a>
      </Link>
    </li>
  ));
  return (
    <nav className="relative bg-cyan-600 shadow-sm md:bg-transparent">
      <div className="relative z-10 block">
        <Link href={`/`}>
          <a className="shadow-[lg] absolute -left-2 -top-2 z-20 flex h-16 w-16 items-center rounded-[100%] bg-cyan-600 p-3 text-cyan-800 shadow-stone-900 transition duration-500 ease-in-out md:top-5 md:left-3 md:h-16 md:w-16 md:bg-cyan-400 md:outline md:outline-[6px] md:hover:scale-105 md:hover:bg-cyan-300">
            {/* {homeIcon()} */}
            <Image
              src="/brand/logo-sm.png"
              alt={SITE_META.NAME}
              width={80}
              height={80}
              className="w-full"
            />
            <span className="ml-3 whitespace-nowrap text-lg font-bold leading-5 text-white xl:ml-8 xl:whitespace-normal">
              {SITE_META.NAME}
            </span>
          </a>
        </Link>
        <button
          onClick={toggle}
          className="ml-auto flex h-10 w-10 items-center justify-center md:hidden"
        >
          {!isMenuOpen ? closeIcon() : menuIcon()}
        </button>
        <div
          className={`${
            !isMenuOpen ? `hidden md:block` : `block`
          } relative z-30 block p-3 md:z-10
          `}
        >
          <ul className="grid grid-cols-3 rounded-3xl bg-cyan-900 p-2 text-center capitalize shadow-lg shadow-slate-900/20 md:ml-3 md:mt-2 md:pl-48 xl:flex xl:flex-wrap">
            {categoryNav}
          </ul>
        </div>
      </div>
    </nav>
  );
}
