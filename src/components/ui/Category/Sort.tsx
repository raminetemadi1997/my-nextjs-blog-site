"use client";

export default function Sort() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <label
        htmlFor="sort"
        className="text-sm font-medium text-[#6B7074]"
      >
        مرتب‌سازی:
      </label>
      <select
        name="sort"
        id="sort"
        className="px-3 py-2 border-b border-gray-300 bg-white text-gray-700 text-sm focus:outline-none cursor-pointer"
      >
        <option value="newest">جدیدترین</option>
        <option value="most-commented">پردیدگاه ترین</option>
      </select>
    </div>
  );
}
