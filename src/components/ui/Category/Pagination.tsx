"use client"

import { ChevronRight , ChevronLeft } from "lucide-react";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  //   onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
}: IPaginationProps) {
    
const generatePageNumbers = () => {
  const pages: (number | "...")[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    pages.push(2);
    pages.push(3);

    // همیشه اگر totalPages بیشتر از 4 بود، "..." و آخرین صفحه رو اضافه کن
    pages.push("...");
    pages.push(totalPages);
  }

  return pages;
};

  const pages = generatePageNumbers();
  
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        // onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1.5 text-sm border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronRight />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          //   onClick={() => onPageChange(page)}
          className={`px-3 py-1.5 rounded-sm text-sm  ${
            page === currentPage
              ? "border"
              : "border-gray-300  bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        // onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1.5 text-sm border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeft />
      </button>
    </div>
  );
}
