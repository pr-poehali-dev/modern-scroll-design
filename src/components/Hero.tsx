import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-medical-lightBlue to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-medical-darkBlue mb-6">
              Ваше здоровье —
              <span className="text-medical-blue block">наш приоритет</span>
            </h1>
            <p className="text-xl text-medical-gray mb-8 leading-relaxed">
              Современный медицинский центр с опытными специалистами и новейшим
              оборудованием. 20+ направлений медицины для всей семьи.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="medical-gradient text-white px-8 py-4 text-lg"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на прием
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-medical-blue text-medical-blue"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-medical-gray">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-medical-blue" />
                <span>Лицензированная клиника</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-medical-blue" />
                <span>Работаем 24/7</span>
              </div>
            </div>
          </div>

          <Card className="animate-slide-up shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-medical-darkBlue mb-6 text-center">
                Онлайн запись на прием
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Имя</Label>
                    <Input placeholder="Ваше имя" className="mt-1" />
                  </div>
                  <div>
                    <Label>Фамилия</Label>
                    <Input placeholder="Ваша фамилия" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label>Телефон</Label>
                  <Input placeholder="+7 (___) ___-__-__" className="mt-1" />
                </div>

                <div>
                  <Label>Специалист</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите специалиста" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ginekolog">Гинеколог</SelectItem>
                      <SelectItem value="kardiolog">Кардиолог</SelectItem>
                      <SelectItem value="nevrologm">Невролог</SelectItem>
                      <SelectItem value="pediatr">Педиатр</SelectItem>
                      <SelectItem value="terapevt">Терапевт</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Дата и время</Label>
                  <Input type="datetime-local" className="mt-1" />
                </div>

                <Button className="w-full medical-gradient text-white py-3 text-lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на прием
                </Button>
              </form>

              <p className="text-sm text-medical-gray text-center mt-4">
                Или позвоните: <strong>+7 (495) 123-45-67</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
