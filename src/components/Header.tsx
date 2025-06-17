import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 medical-gradient rounded-full flex items-center justify-center">
              <Icon name="Heart" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-medical-blue">МедЦентр</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-medical-gray hover:text-medical-blue transition-colors"
            >
              Услуги
            </a>
            <a
              href="#doctors"
              className="text-medical-gray hover:text-medical-blue transition-colors"
            >
              Врачи
            </a>
            <a
              href="#about"
              className="text-medical-gray hover:text-medical-blue transition-colors"
            >
              О нас
            </a>
            <a
              href="#contacts"
              className="text-medical-gray hover:text-medical-blue transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+7(495)123-45-67"
              className="hidden sm:flex items-center space-x-2 text-medical-blue"
            >
              <Icon name="Phone" size={16} />
              <span className="font-medium">+7 (495) 123-45-67</span>
            </a>
            <Button className="bg-medical-orange text-white hover:bg-medical-orange/90">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
