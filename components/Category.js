import Link from "next/link";
export default function Category({ title, categories, icon }) {
  const categoryList = categories.map((category, index) => (
    <li key={index} className="capitalize mx-1 xl:mx-2 mb-2">
      <Link href={`/category/${category}`}>
        <a className="block hover:scale-110 transition ease-in-out duration-300 text-sm py-2  px-2 md:px-3 bg-cyan-600 text-cyan-200 rounded-full shadow-md shadow-cyan-700">
          {category}
        </a>
      </Link>
    </li>
  ));
  if (categories.length != 0)
    if (title === undefined) {
      return (
        <>
          <ul className="p-4 flex space-x-3">{categoryList}</ul>
        </>
      );
    } else {
      return (
        <>
          <h2 className="flex items-center py-2 xl:pb-1 pb-0 text-md md:text-lg xl:text-xl font-semibold space-x-2">
            <span className="text-lime-400">{icon}</span>
            <span>{title}</span>
          </h2>
          <ul className="flex flex-wrap pt-3 xl:py-4">{categoryList}</ul>
        </>
      );
    }
  else {
    return <></>;
  }
}
