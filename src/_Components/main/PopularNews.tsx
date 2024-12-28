import useData from "../../hooks/useData";
import Spinner from "../Sub/Spinner";

const PopularNews = () => {
  const { data, error, isLoading } = useData();

  return (
    <section className="py-10 space-y-4" dir="rtl">
      <h1 className="text-[24px]">الاكثر مشاهدة</h1>
      {isLoading && <Spinner />}
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
        {data?.results.map((item, index) => (
          <div key={index} className="w-full space-y-4 relative pb-11">
            <img
              src={item.image}
              alt={item.headline}
              className="w-full object-cover"
            />
            <div className="space-y-1 justify-between">
              <h1 className="text-[22px] text-gray-900">{item.headline}</h1>
              <h6 className="text-[20px] text-gray-700">{item.date}</h6>
            </div>
            <div className="absolute bottom-0 right-0">
              <a
                href={item.url}
                target="_blank"
                className="bg-red-500 hover:bg-red-600 transition text-gray-100 rounded-sm px-3 py-2 text-[16px] cursor-pointer"
              >
                المزيد من التفاصيل
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularNews;
