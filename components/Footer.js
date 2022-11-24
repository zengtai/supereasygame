import { SITE_META } from "../lib/constants";
import Link from "next/link";
export default function Footer() {
  const nofollow = { rel: "nofollow" };
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <Link passHref href={`/t/privacy-policy`}>
          <a {...nofollow}>Privacy Policy</a>
        </Link>
        <Link passHref href={`/t/terms-of-use`}>
          <a {...nofollow}>Terms of Use</a>
        </Link>
      </nav>
      <div className="copyright">
        <p>{`Copyright © ${new Date().getFullYear()} ${SITE_META.NAME}`}</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}
