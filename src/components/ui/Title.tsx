"use client";
import Link from "next/link";

export interface ITitleProps {
  title?: string;
  buttonText?: string;
  href?: string;
}

const Title = ({ title, buttonText, href }: ITitleProps) => {
  const marginGenerator = () => {
    if (href && title) {
      return "mx-4";
    } else if (href && !title) {
      return "ml-4";
    } else if (!href && title) {
      return "mr-4";
    } else {
      return "mx-0";
    }
  };

  const marginData = marginGenerator();

  const showTitle = title || buttonText ? true : false;

  return (
    <div className="flex items-center justify-between w-full h-10 md:px-0 px-2">
      {showTitle && (
        <>
          <div className="flex items-center flex-1">
            {title && (
              <div className="md:text-sm font-medium text-gray-700 whitespace-nowrap">
                {title}
              </div>
            )}
            <div
              className={`md:flex flex-1 hidden border-t border-gray-200 ${marginData}`}
            ></div>
          </div>
          {href && (
            <Link
              href={href}
              title={buttonText}
              className="text-xs border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 transition md:block hidden"
            >
              {buttonText}
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default Title;
