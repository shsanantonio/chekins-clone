const Sort = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-[18px] mt-2">Sort By</h2>
      <select
        className="border w-full md:w-auto h-10 border-gray-300 rounded-md px-2 py-2"
        id="sort-select"
      >
        <option value="relevanceAsc">Recommended</option>
        <option value="priceAsc">Lowest Price</option>
        <option value="saveAsc">Highest Saving</option>
      </select>
    </div>
  );
};

export default Sort;
