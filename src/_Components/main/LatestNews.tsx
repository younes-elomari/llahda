import useData from "../../hooks/useData";
import Spinner from "../Sub/Spinner";

const LatestNews = () => {
  const { data, error, isLoading } = useData();

  const shortData = data?.results.slice(0, 4);

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
        <h1 className="text-gray-900 text-[22px] font-medium pt-2">
          بعد اقتراب قياسي من الشمس.. مركبة فضائية لناسا ما زالت سليمة
        </h1>
        <p className="text-gray-600 text-[18px] font-medium">
          قالت إدارة الطيران والفضاء الأميركية ناسا أمس إن المسبار الشمسي باركر،
          سليم ويعمل بشكل طبيعي بعد أن نجح في الوصول إلى أقرب نقطة من الشمس يصل
          إليها أي جسم من صنع الإنسان.
        </p>
        <h6 className="text-red-400 text-[16px] font-medium">28/12/2024</h6>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-gray-900 text-[22px] font-medium">آخر الاخبار</h1>
        {isLoading && <Spinner />}
        {shortData?.map((item, index) => (
          <div key={index} className="w-full grid grid-cols-[220px_1fr] gap-4">
            <div className="bg-grat-400">
              <img
                src={item.image}
                alt={item.headline}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h6 className="text-[20px]">{item.headline}</h6>
              <p className="text-[18px] text-red-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
