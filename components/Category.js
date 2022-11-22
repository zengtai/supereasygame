import CategoryListItem from "./CategoryListItem";

export default function Category({ title, categories, icon }) {
  return (
    <>
      {title ? (
        <h2 className="text-md flex items-center space-x-2 py-2 pb-0 font-semibold drop-shadow md:text-lg xl:pb-1 xl:text-xl">
          <span className="text-lime-400">{icon}</span>
          <span>{title}</span>
        </h2>
      ) : null}
      <ul className="flex flex-wrap pt-3 xl:py-4">
        <CategoryListItem items={categories} />
      </ul>
    </>
  );
}
