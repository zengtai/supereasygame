import { SITE_NAME } from "../lib/constants";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="mt-3 text-xs text-center text-sky-100/60 bg-cyan-700">
      <nav className="group bg-cyan-600 p-3 space-x-5 shadow">
        <Link href={`/t/privacy-policy`}>
          <a className="group-hover:text-white/70 transition duration-500">
            Privacy Policy
          </a>
        </Link>
        <Link href={`/t/terms-of-use`}>
          <a className="group-hover:text-white/70 transition duration-500">
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
