import Picture from "@/components/Picture";
import { IUserProps } from "@/types/User";
import React from "react";

const User = ({ id, fullName, image }: IUserProps) => {
  return (
    <div id={`use_${id}`} className={`flex items-center gap-1 col-span-2`}>
      <div>
        <Picture
          indexWeb={image.indexWeb}
          indexArray={image.indexArray}
          alt={fullName}
          width={30}
          height={30}
          currentImage={image.currentImage}
          imageClassName="rounded-full"
        />
      </div>
      <div className="md:text-sm text-xs text-[#A1A2A7] truncate">{fullName}</div>
    </div>
  );
};

export default User;
