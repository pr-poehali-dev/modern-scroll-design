import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    name: "Гинеколог",
    icon: "User",
    description: "Женское здоровье и профилактика",
  },
  {
    name: "Маммолог",
    icon: "Heart",
    description: "Диагностика и лечение молочных желез",
  },
  {
    name: "Дерматолог",
    icon: "Eye",
    description: "Заболевания кожи и эстетическая медицина",
  },
  {
    name: "Инфекционист",
    icon: "Shield",
    description: "Лечение инфекционных заболеваний",
  },
  {
    name: "Кардиолог",
    icon: "Heart",
    description: "Сердечно-сосудистая система",
  },
  {
    name: "Косметолог",
    icon: "Sparkles",
    description: "Эстетическая косметология",
  },
  { name: "Невролог", icon: "Brain", description: "Нервная система взрослых" },
  { name: "Невролог детский", icon: "Baby", description: "Детская неврология" },
  { name: "Ортопед", icon: "Bone", description: "Опорно-двигательный аппарат" },
  { name: "Оториноларинголог", icon: "Ear", description: "ЛОР-заболевания" },
  {
    name: "Офтальмолог",
    icon: "Eye",
    description: "Диагностика и лечение глаз",
  },
  { name: "Педиатр", icon: "Baby", description: "Детское здоровье" },
  {
    name: "Проктолог",
    icon: "Stethoscope",
    description: "Проктологические заболевания",
  },
  {
    name: "Терапевт",
    icon: "UserCheck",
    description: "Общая терапия и диагностика",
  },
  { name: "Травматолог", icon: "Zap", description: "Травмы и повреждения" },
  {
    name: "УЗИ всех органов",
    icon: "MonitorSpeaker",
    description: "Ультразвуковая диагностика",
  },
  {
    name: "Хирург",
    icon: "Scissors",
    description: "Хирургические вмешательства",
  },
  { name: "Флеболог", icon: "Activity", description: "Сосудистые заболевания" },
  { name: "Психологи", icon: "Brain", description: "Психологическая помощь" },
  {
    name: "Стоматолог",
    icon: "Smile",
    description: "Стоматология и гигиена полости рта",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Наши медицинские услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр медицинских услуг от опытных специалистов. Современное
            оборудование и индивидуальный подход к каждому пациенту.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex space-x-6 animate-scroll-horizontal hover:[animation-play-state:paused]"
            style={{ width: "calc(300px * 40)" }}
          >
            {[...services, ...services].map((service, index) => (
              <Card
                key={index}
                className="service-card flex-shrink-0 w-72 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-orange-50 transition-all duration-300"
              >
                <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <span className="text-blue-600 font-medium hover:text-orange-500 hover:underline cursor-pointer transition-colors duration-200">
                      Записаться →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Не нашли нужного специалиста? Свяжитесь с нами!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Icon name="Phone" size={20} />
              <span className="font-medium">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <Icon name="Globe" size={20} />
              <span className="font-medium">Онлайн-запись 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
