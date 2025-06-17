import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-blue mb-4">
            Контакты и запись
          </h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Свяжитесь с нами удобным способом. Работаем без выходных для вашего
            здоровья.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-medical-blue mb-4">
                Телефон
              </h3>
              <div className="space-y-2 text-medical-gray">
                <p className="text-lg font-medium text-medical-orange">
                  +7 (495) 123-45-67
                </p>
                <p>Круглосуточно, без выходных</p>
                <p className="text-sm">Запись на прием и консультации</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-medical-blue mb-4">
                Адрес
              </h3>
              <div className="space-y-2 text-medical-gray">
                <p>г. Москва, ул. Медицинская, 25</p>
                <p>м. Проспект Мира</p>
                <p className="text-sm">Парковка для пациентов</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-medical-blue mb-4">
                Время работы
              </h3>
              <div className="space-y-2 text-medical-gray">
                <p>Пн-Пт: 8:00 — 21:00</p>
                <p>Сб-Вс: 9:00 — 18:00</p>
                <p className="text-sm">Экстренная помощь 24/7</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-medical-blue mb-6">
                Способы записи на прием
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="Globe"
                      size={20}
                      className="text-medical-blue"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-blue mb-2">
                      Онлайн-запись
                    </h4>
                    <p className="text-medical-gray">
                      Заполните форму на сайте в любое время суток
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="Phone"
                      size={20}
                      className="text-medical-blue"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-blue mb-2">
                      По телефону
                    </h4>
                    <p className="text-medical-gray">
                      Позвоните нам: +7 (495) 123-45-67
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="text-medical-blue"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-blue mb-2">
                      В регистратуре
                    </h4>
                    <p className="text-medical-gray">
                      Приходите лично по адресу: ул. Медицинская, 25
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="Heart"
                  size={80}
                  className="text-medical-blue mx-auto mb-6"
                />
                <h4 className="text-2xl font-bold text-medical-blue mb-4">
                  Ваше здоровье в надежных руках
                </h4>
                <p className="text-medical-gray">
                  Современная медицина для всей семьи
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
