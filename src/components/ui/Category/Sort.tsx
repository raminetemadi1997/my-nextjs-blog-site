"use client";

export default function Sort() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <label
        htmlFor="sort"
        className="md:text-sm text-xs font-medium text-[#6B7074]"
      >
        مرتب‌سازی:
      </label>
      <select
        name="sort"
        id="sort"
        className="px-3 py-2 border-b border-gray-300 md:bg-white bg-inherit text-gray-700 md:text-sm focus:outline-none cursor-pointer text-xs"
      >
        <option value="newest">جدیدترین</option>
        <option value="most-commented">پردیدگاه ترین</option>
      </select>
    </div>
  );
}
