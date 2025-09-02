import { ISpecialItems } from "@/types/Post/SpecialBox";
import { Box, Phone, Bell, CircleX } from "lucide-react";
import React from "react";

export function priceGenerator({
  type,
  marketable,
  price,
  discount,
}: Pick<ISpecialItems, "type" | "marketable" | "price" | "discount">) {
  const date = new Date();

  if ((type === 1 || marketable === 0) && price !== 0) {
    if (
      discount &&
      !Array.isArray(discount) &&
      date < new Date(discount.end_date)
    ) {
      return (
        <div className="h-12">
          <div className="flex items-center justify-between">
            <div className="sm:text-sm text-xs bg-[#DE1616] px-1 text-white rounded-md">
              {`${discount.percentage} %`}
            </div>
            <div className="flex justify-end">
              <span className="text-[#DE1616] sm:text-base text-sm">
                <span className="font-bold tracking-widest">
                  {`${Number(discount.final_price).toLocaleString()}`}
                </span>
                <span className="text-xs mr-1">تومان</span>
              </span>
            </div>
          </div>
          <div className="flex justify-end sm:text-sm text-xs text-[#C4C3C3] line-through">
            <span>
              <span className="font-bold tracking-widest">
                {`${Number(price).toLocaleString()}`}
              </span>
              <span className="text-xs mr-1">تومان</span>
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="flex justify-end h-12 items-center">
        <span>
          <span className="font-bold tracking-widest">
            {`${Number(price).toLocaleString()}`}
          </span>
          <span className="text-xs mr-1">تومان</span>
        </span>
      </div>
    );
  }

  if (type !== 1 && (marketable === 1 || price === 0)) {
    return (
      <div className="flex justify-between items-center h-12">
        <div className="text-[#009688] font-bold">تماس بگیرید</div>
        <Phone color="#009688" />
      </div>
    );
  }

  if (marketable === 2) {
    return (
      <div className="flex justify-between items-center h-12">
        <div className="text-[#555555] font-bold">ناموجود</div>
        <Bell color="#555555" />
      </div>
    );
  }

  if (marketable === 3) {
    return (
      <div className="flex justify-between items-center h-12">
        <div className="text-[#555555] font-bold">توقف تولید</div>
        <CircleX color="#555555" />
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center h-12">
      <div className="text-[#DE1616] lg:text-base text-sm font-bold">
        مشاهده همه پکیج ها
      </div>
      <Box color="#DE1616" />
    </div>
  );
}
