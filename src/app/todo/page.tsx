"use client";
import { useRouter } from "next/navigation";
import React from "react";
function page() {
  const navigate = useRouter();
  const handleNavigation = (item: string) => {
    navigate.push(`/todo/${item}`);
  };
  const titles: string[] = [
    "hello",
    "task2",
    "task3",
    "track",
    "youp",
    "task6",
    "task7",
    "task8",
  ];

  return (
    <div className=" bg-sky-950/80 text-black flex justify-center items-center flex-col min-h-screen">
      <div className="bg-gray-900 p-8 rounded-3xl relative">
        <form action=""></form>
        <div className="absolute -top-10 right-6 border-b-0 rounded-t-2xl bg-yellow-600  cursor-pointer hover:bg-yellow-700 hover:scale-95 border p-2">
          ➕ Add New Task!
        </div>
        <div className="text-4xl font-bold italic text-gray-200">
          Todo Schedule List Sections!
        </div>
        {titles.length === 0 ? (
          <div className="flex justify-center items-center rounded-md h-[400px] w-[500px] border scroll-auto bg-gray-400">
            No Schedule Added!
          </div>
        ) : (
          <div className="flex items-center rounded-md h-[400px] w-[500px] border  space-y-5 py-5 flex-col overflow-y-auto bg-gray-400">
            {titles.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-shrink-0 justify-between items-center h-[90px] border w-[90%] rounded-md bg-amber-950 text-white px-6 transition-all transform duration-500 ease-in-out hover:scale-105"
                >
                  <div className="flex justify-center items-center">
                    📓 Schedule ~ <p className="italic mx-2 text-2xl">{item}</p>
                  </div>
                  <div
                    className="underline cursor-pointer"
                    onClick={() => handleNavigation(item)}
                  >
                    view
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
