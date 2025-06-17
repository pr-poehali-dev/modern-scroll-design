import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const doctors = [
  {
    name: "Анна Петровна Иванова",
    specialty: "Кардиолог",
    experience: "15 лет",
    education: "ММА им. Сеченова",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Сергей Михайлович Козлов",
    specialty: "Невролог",
    experience: "12 лет",
    education: "РНИМУ им. Пирогова",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Мария Александровна Смирнова",
    specialty: "Педиатр",
    experience: "8 лет",
    education: "РУДН",
    image:
      "https://images.unsplash.com/photo-1594824804732-ca58f6bb3a61?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Дмитрий Владимирович Орлов",
    specialty: "Хирург",
    experience: "20 лет",
    education: "МГУ им. Ломоносова",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-blue mb-4">
            Наши врачи
          </h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Команда профессионалов с многолетним опытом и высшим медицинским
            образованием. Каждый врач регулярно повышает квалификацию и следит
            за современными методами лечения.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-medical-blue mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-medical-blue font-medium mb-3">
                    {doctor.specialty}
                  </p>

                  <div className="space-y-2 text-sm text-medical-gray">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Clock"
                        size={14}
                        className="text-medical-green"
                      />
                      <span>Опыт: {doctor.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="GraduationCap"
                        size={14}
                        className="text-medical-green"
                      />
                      <span>{doctor.education}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button className="w-full bg-medical-orange text-white py-2 rounded-lg hover:bg-medical-orange/90 transition-colors">
                      Записаться к врачу
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-medical-gray mb-4">
            Хотите записаться к конкретному специалисту?
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2 text-medical-blue">
              <Icon name="Phone" size={20} />
              <span className="font-medium">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2 text-medical-blue">
              <Icon name="Calendar" size={20} />
              <span className="font-medium">Онлайн-запись</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
