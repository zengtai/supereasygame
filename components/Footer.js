import { SITE_NAME } from "../lib/constants";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="mt-3 bg-cyan-700 text-center text-xs text-sky-100/60">
      <nav className="group space-x-5 bg-cyan-600 p-3 shadow">
        <Link href={`/t/privacy-policy`}>
          <a className="transition duration-500 group-hover:text-white/70">
            Privacy Policy
          </a>
        </Link>
        <Link href={`/t/terms-of-use`}>
          <a className="transition duration-500 group-hover:text-white/70">
            Terms of Use
          </a>
        </Link>
      </nav>
      <p className="py-7 opacity-90">
        Copyright &copy; {SITE_NAME}. All Rights Reserved
      </p>
    </div>
  );
}
