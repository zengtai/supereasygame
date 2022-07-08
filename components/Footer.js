import { SITE_META } from "../lib/constants";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="mt-3 bg-cyan-700 text-center text-xs text-sky-200">
      <nav className="group space-x-5 bg-cyan-500 p-3 shadow">
        <Link href={`/t/privacy-policy`}>
          <a>Privacy Policy</a>
        </Link>
        <Link href={`/t/terms-of-use`}>
          <a>Terms of Use</a>
        </Link>
      </nav>
      <p className="py-7 text-sky-200/50">
        Copyright &copy; {new Date().getFullYear()} {SITE_META.name}. All Rights
        Reserved
      </p>
    </div>
  );
}
