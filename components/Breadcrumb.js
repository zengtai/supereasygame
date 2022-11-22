import Link from "next/link";
export default function Breadcrumb({ link, title }) {
  return (
    <>
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li></li>
      </ul>
    </>
  );
}
