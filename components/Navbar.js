import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { closeIcon, menuIcon } from "./Icons";

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
            ? `border-slate-50/80 md:shadow-lg bg-slate-50/20 md:bg-slate-50/10`
            : `md:border-slate-50/0 md:shadow-none border-slate-50/20 bg-slate-50/10`
        } m-1 transition ease-in-out duration-500 md:bg-slate-50/0 hover:bg-slate-50/10 border-2 rounded-xl`}
        key={category}
      >
        <Link href={`/category/${category}`}>
          <a
            className={`${
              category == current.slug
                ? `opacity-80 bg-slate-50/10`
                : `opacity-50`
            } p-2 block text-white`}
          >
            {category}
          </a>
        </Link>
      </li>
    );
  });
  return (
    <nav>
      <div className="block relative z-10">
        <Link href={`/`}>
          <a className="absolute transition ease-in-out duration-500 md:hover:scale-105 md:top-3 md:left-3 flex justify-center items-center rounded-[100%] text-slate-600 w-20 h-20 -left-4 -top-5 z-20 bg-slate-200 shadow-[lg] shadow-stone-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
        </Link>
        <button
          onClick={toggle}
          className="ml-auto flex justify-center items-center w-10 h-10 md:hidden"
        >
          {!isMenuOpen ? closeIcon() : menuIcon()}
        </button>
        <div
          className={`${
            !isMenuOpen ? `hidden md:block` : `block`
          } block p-3 relative z-30 md:z-10
          `}
        >
          <ul className="flex md:pl-20 md:ml-3 flex-wrap p-2 md:mt-2 capitalize bg-cyan-900 rounded-3xl shadow-lg shadow-slate-900/20">
            {categoryNav}
          </ul>
        </div>
      </div>
    </nav>
  );
}
