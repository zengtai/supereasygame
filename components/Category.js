import Link from "next/link";
export default function Category({ title, categories, icon }) {
  const categoryList = categories.map((category, index) => (
    <li key={index} className="mx-1 mb-2 capitalize xl:mx-2">
      <Link href={`/category/${category}`}>
        <a className="block rounded-full bg-cyan-600 py-2 px-2 text-sm text-cyan-200  shadow-md shadow-cyan-800 transition duration-300 ease-in-out hover:scale-110 md:px-3">
          {category}
        </a>
      </Link>
    </li>
  ));
  if (categories.length != 0)
    if (title === undefined) {
      return (
        <>
          <ul className="flex space-x-3 p-4">{categoryList}</ul>
        </>
      );
    } else {
      return (
        <>
          <h2 className="text-md flex items-center space-x-2 py-2 pb-0 font-semibold md:text-lg xl:pb-1 xl:text-xl">
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
