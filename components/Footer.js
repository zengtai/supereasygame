import { SITE_META } from "../lib/constants";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <Link href={`/t/privacy-policy`}>
          <a ref={`nofollow`}>Privacy Policy</a>
        </Link>
        <Link href={`/t/terms-of-use`}>
          <a ref={`nofollow`}>Terms of Use</a>
        </Link>
      </nav>
      <div className="copyright">
        <p>{`Copyright © ${new Date().getFullYear()} ${SITE_META.NAME}`}</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}
