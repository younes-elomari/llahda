import React from "react";

const HeroContent = () => {
  return (
    <div className="w-full flex flex-row place-content-end">
      <div className="relative w-full md:w-1/2 max-w-[600px] py-10 px-5 md:px-14">
        <div className="absolute bg-gray-950 h-full top-0 right-0 bottom-0 left-1/4 z-[-10]"></div>
        <div className=" bg-gray-100 text-right p-5 md:p-12">
          <h6 className="relative text-[18px] font-medium text-gray-600 pb-4 after:bg-red-500 after:h-[3px] after:w-[65px] after:right-0 after:bottom-0 after:z-[10] after:absolute">
            اخر الاخبار في مكان واحد
          </h6>
          <h1 className="text-4xl font-medium py-8 text-gray-900">
            استكشف اخر الاخبار و المستجدات فور حدوثها و كن اول من يعلم
          </h1>
          <p className="text-[20px] font-medium text-gray-500 pb-36">
            اخبار موثوقة و ذات مصداقية ننقلها لكم فور حدوثها اينما كنتم عبر
            منصتنا الاخبارية
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
