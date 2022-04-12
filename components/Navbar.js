import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { closeIcon, menuIcon } from "./Icons";
import Image from "./Image";
import { SITE_NAME } from "../lib/constants";
import { getIcon } from "../lib/api";

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
            } flex p-2 text-white`}
          >
            <span className="mr-1">{getIcon(category)}</span>
            {category}
          </a>
        </Link>
      </li>
    );
  });
  return (
    <nav className="relative z-20 bg-[#fff9db] md:bg-transparent md:after:hidden">
      <div className="relative z-30 block">
        <Link href={`/`}>
          <a className="shadow-[lg] absolute left-2 -top-2 z-20 flex items-center justify-center rounded-[100%] p-1 shadow-stone-900 transition duration-100 ease-in-out md:top-3 md:left-3 md:h-20 md:w-20 md:border-[#FFB03A99] md:bg-[#FFF9DB] md:hover:scale-105 md:hover:bg-[#FFF9DB]">
            {/* {homeIcon()} */}
            <span className="md:hidden">
              <Image
                src="/brand/logo.png"
                alt={SITE_NAME}
                width={173}
                height={54}
                className="w-full"
              />
            </span>
            <span className="hidden md:block md:h-14 md:w-14">
              <Image
                src="/brand/logo-sm.png"
                alt={SITE_NAME}
                width={60}
                height={60}
                className="w-full"
                layout="responsive"
              />
            </span>
          </a>
        </Link>
        <button
          onClick={toggle}
          className="my-2 ml-auto flex h-10 w-10 items-center justify-center text-[#463838] md:hidden"
        >
          {!isMenuOpen ? closeIcon() : menuIcon()}
        </button>
        <div
          className={`${
            !isMenuOpen ? `hidden md:block` : `block`
          } relative z-30 block p-3 md:z-10
          `}
        >
          <ul className="relative z-30 flex flex-wrap rounded-3xl bg-[#463838] p-2 capitalize shadow-lg shadow-slate-900/20 md:ml-3 md:mt-2 md:bg-[#463838] md:pl-20">
            {categoryNav}
          </ul>
        </div>
      </div>
    </nav>
  );
}
