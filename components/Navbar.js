import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { closeIcon, menuIcon, homeIcon } from "./Icons";
import Image from "./Image";
import { SITE_NAME } from "../lib/constants";

export default function Navbar({ items, isOpen }) {
  const router = useRouter();
  const current = router.query;
  const [isMenuOpen, setMenuOpen] = useState(isOpen);

  function toggle() {
    setMenuOpen(!isMenuOpen);
  }
  // console.log(children);
  const categoryNav = items.map((category) => {
    return (
      <li
        className={`${
          category == current.slug
            ? `border-slate-50/80 bg-slate-50/20 md:bg-slate-50/10 md:shadow-lg`
            : `border-slate-50/20 bg-slate-50/10 md:border-slate-50/0 md:shadow-none`
        } m-1 rounded-xl border-2 transition duration-500 ease-in-out hover:bg-slate-50/10 md:bg-slate-50/0`}
        key={category}
      >
        <Link href={`/category/${category}`}>
          <a
            className={`${
              category == current.slug
                ? `bg-slate-50/10 opacity-80`
                : `opacity-50`
            } block p-2 text-white`}
          >
            {category}
          </a>
        </Link>
      </li>
    );
  });
  return (
    <nav className="relative bg-cyan-700 after:absolute after:-bottom-4 after:right-0 after:h-16 after:w-full after:skew-y-2 after:bg-cyan-800 md:after:hidden">
      <div className="relative z-10 block">
        <Link href={`/`}>
          <a className="shadow-[lg] absolute -left-3 -top-3 z-20 flex h-16 w-16 items-center justify-center rounded-[100%] p-1 text-cyan-800 shadow-stone-900 outline outline-4 outline-lime-400 transition duration-500 ease-in-out md:top-5 md:left-3 md:h-16 md:w-16 md:bg-cyan-600 md:hover:scale-105 md:hover:bg-cyan-500">
            {/* {homeIcon()} */}
            <Image
              src="/brand/logo-sm.png"
              alt={SITE_NAME}
              width={80}
              height={80}
              className="w-full"
            />
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
          <ul className="flex flex-wrap rounded-3xl bg-cyan-900 p-2 capitalize shadow-lg shadow-slate-900/20 md:ml-3 md:mt-2 md:pl-20">
            {categoryNav}
          </ul>
        </div>
      </div>
    </nav>
  );
}
