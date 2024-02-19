import React, { ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  redirect?: string;
  children: ReactNode;
  isAdd?: boolean;
  onAddData?: () => void;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
  redirect,
  isAdd = true,
  onAddData
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark relative">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <div className="flex flex-column">
          {isAdd ? (
            <button className="absolute right-0 top-0 mr-6 mt-6 text-2xl font-bold" onClick={onAddData}>
              +
            </button>
          ) : null}

          <a
            className="flex items-center gap-1 text-sm font-medium text-blue-600 cursor-pointer"
            href={redirect}
          >
            Lihat
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
