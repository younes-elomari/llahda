import React from "react";

const LatestNews = () => {
  return (
    <section
      className="w-full h-full py-12 px-5 md:px-10 grid md:grid-cols-2 gap-4"
      dir="rtl"
    >
      <div className="w-full space-y-2">
        <img
          src="/nasaImage.jpg"
          alt="lates news image"
          className="w-full object-cover"
        />
        <h1 className="text-gray-900 text-[22px] font-medium">
          بعد اقتراب قياسي من الشمس.. مركبة فضائية لناسا ما زالت سليمة
        </h1>
        <p className="text-gray-600 text-[18px] font-medium">
          قالت إدارة الطيران والفضاء الأميركية ناسا أمس إن المسبار الشمسي باركر،
          سليم ويعمل بشكل طبيعي بعد أن نجح في الوصول إلى أقرب نقطة من الشمس يصل
          إليها أي جسم من صنع الإنسان.
        </p>
      </div>

      <div className="flex flex-col gap-4 bg-gray-500">
        <h1 className="text-gray-900 text-[22px] font-medium">
          Lorem ipsum dolor
        </h1>
        <div className="w-full grid grid-cols-[220px_1fr] gap-4">
          <div className="bg-green-900">
            <img
              src="/heroBackground.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-green-900"> sfdf</div>
        </div>
        <div className="w-full grid grid-cols-[220px_1fr] gap-4">
          <div className="bg-green-900">
            <img
              src="/heroBackground.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-green-900"> sfdf</div>
        </div>
        <div className="w-full grid grid-cols-[220px_1fr] gap-4">
          <div className="bg-green-900">
            <img
              src="/heroBackground.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-green-900"> sfdf</div>
        </div>
        <div className="w-full grid grid-cols-[220px_1fr] gap-4">
          <div className="bg-green-900">
            <img
              src="/heroBackground.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-green-900"> sfdf</div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
