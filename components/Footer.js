import { SITE_NAME } from "../lib/constants";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="mt-3 text-center text-xs text-slate-900/60">
      <nav className="group space-x-5  p-3 shadow">
        <Link href={`/t/privacy-policy`}>
          <a>Privacy Policy</a>
        </Link>
        <Link href={`/t/terms-of-use`}>
          <a>Terms of Use</a>
        </Link>
      </nav>
      <p className="py-7 opacity-90">
        Copyright &copy; {SITE_NAME}. All Rights Reserved
      </p>
    </div>
  );
}
