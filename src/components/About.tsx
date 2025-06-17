import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-medical-blue mb-6">
              О нашем медицинском центре
            </h2>
            <p className="text-lg text-medical-gray mb-8 leading-relaxed">
              Мы работаем с 2010 года, предоставляя качественные медицинские
              услуги жителям города. Наша команда состоит из опытных врачей с
              многолетним стажем и молодых специалистов, прошедших обучение в
              ведущих медицинских центрах.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-blue mb-2">
                  15+
                </div>
                <div className="text-medical-gray">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-blue mb-2">
                  50+
                </div>
                <div className="text-medical-gray">специалистов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-blue mb-2">
                  20+
                </div>
                <div className="text-medical-gray">направлений</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-blue mb-2">
                  10k+
                </div>
                <div className="text-medical-gray">пациентов</div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-medical-blue mb-6">
                Наши преимущества
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-blue mb-2">
                      Опытные врачи
                    </h4>
                    <p className="text-medical-gray">
                      Специалисты высшей категории с многолетним опытом
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Microscope" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-blue mb-2">
                      Современное оборудование
                    </h4>
                    <p className="text-medical-gray">
                      Новейшие диагностические аппараты и технологии
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-blue mb-2">
                      Удобное время
                    </h4>
                    <p className="text-medical-gray">
                      Работаем без выходных, прием в удобное время
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-blue mb-2">
                      Индивидуальный подход
                    </h4>
                    <p className="text-medical-gray">
                      Персональные программы лечения и профилактики
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
