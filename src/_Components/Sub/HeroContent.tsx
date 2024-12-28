import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <div className="w-full flex flex-row place-content-end">
      <div className="relative w-full md:w-1/2 max-w-[600px] py-10 px-5 md:px-14">
        <motion.div
          initial={{ opacity: 0.8, height: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute bg-gray-950 h-full top-0 right-0 bottom-0 left-1/4 z-[-10]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className=" bg-gray-100 text-right overflow-hidden p-5 md:p-12 "
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
