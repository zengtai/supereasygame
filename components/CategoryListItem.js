import Link from "next/link";

export default function CategoryListItem({ items }) {
  return items.map((category) => (
    <li key={category.slug}>
      <Link href={`/${category.slug}`}>
        <a className="block rounded-full bg-cyan-700 py-2 px-2 text-sm text-sky-200  shadow-md shadow-cyan-800 transition duration-300 ease-in-out hover:scale-110 md:px-3">
          {category.name}
        </a>
      </Link>
    </li>
  ));
}
