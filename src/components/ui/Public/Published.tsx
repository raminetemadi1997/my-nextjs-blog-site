import { Clock4 } from "lucide-react";

const Published = ({ persianDate }: { persianDate: string }) => {
  return (
    <div className="flex items-center gap-1 col-span-2">
      <Clock4 color="#a1a2a7" size={12} />
      <div className="md:text-sm text-xs text-[#A1A2A7]">{persianDate}</div>
    </div>
  );
};

export default Published;
