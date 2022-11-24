import CategoryListItem from "./CategoryListItem";

export default function Category({ title, categories, icon }) {
  return (
    <>
      {title ? (
        <h2 className="flex items-center space-x-2 py-2 pb-0 text-base font-semibold drop-shadow md:text-lg xl:pb-1 xl:text-xl">
          <span className="text-lime-400">{icon}</span>
          <span>{title}</span>
        </h2>
      ) : null}
      <ul className="my-3 grid grid-cols-3 gap-4 text-center xl:flex xl:flex-wrap xl:py-4">
        <CategoryListItem items={categories} />
      </ul>
    </>
  );
}
