"use client";
import { SpecialBox } from "@/types/Post/Post";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar({ items, type }: Pick<SpecialBox , 'items' | 'type'>) {

  if (type === 0) {
    return (
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id}>
            {item.title && <div className="mb-1 font-medium">{item.title}</div>}
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 bg-blue-500 text-xs text-white flex items-center justify-center transition-all duration-500"
                style={{ width: item.type == 0 ? `${item.percentage}%` : `100%` }}
              >
                {item.percentage}
                {
                    item.type == 0 ? "%" : "" 
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col items-center space-y-2">
          {item.title && <div className="font-medium">{item.title}</div>}
          <div className="w-20 h-20">
            <CircularProgressbar
              value={item.type == 0 ? item.percentage || 100 : 100}
              text={item.type == 0 ? `${item.percentage}%` : `${item.percentage}`}
              styles={buildStyles({
                pathColor: "#3b82f6",
                textColor: "#111827",
                trailColor: "#e5e7eb",
                textSize: "20px",
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
