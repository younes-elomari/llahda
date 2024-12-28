import SocialMediaIcons from "../Sub/SocialMediaIcons";

const Footer = () => {
  return (
    <section
      className="py-12 grid grid-cols-2 md:grid-cols-3 gap-4 border-t"
      dir="rtl"
    >
      <div className="space-y-4">
        <h1 className="text-gray-900 text-[22px]">من نحن</h1>
        <div className="space-y-2">
          <p className="text-gray-800 text-[18px]">من نحن</p>
          <p className="text-gray-800 text-[18px]">الأحكام و الشروط</p>
          <p className="text-gray-800 text-[18px]">سياسة الخصوصية</p>
          <p className="text-gray-800 text-[18px]">
            سياسة ملفات تعريف الارتباط
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-gray-900 text-[22px]">تواصل معنا</h1>
        <div className="space-y-2">
          <p className="text-gray-800 text-[18px]">تواصل معنا</p>
          <p className="text-gray-800 text-[18px]">احصل على المساعدة</p>
          <p className="text-gray-800 text-[18px]">أعلن معنا</p>
          <p className="text-gray-800 text-[18px]">النشرات البديلة</p>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-gray-900 text-[22px]">تابعنا على:</h1>
        <SocialMediaIcons />
        <img src="/llahda.svg" alt="website logo" width={95} height={25} />
      </div>
      
    </section>
  );
};

export default Footer;
