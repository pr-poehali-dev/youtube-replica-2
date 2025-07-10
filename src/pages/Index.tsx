import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Музыка", count: "1.2M", icon: "Music" },
    { name: "Спорт", count: "800K", icon: "Trophy" },
    { name: "Популярное", count: "2.5M", icon: "TrendingUp" },
    { name: "Наука", count: "600K", icon: "Microscope" },
    { name: "Для детей", count: "1.8M", icon: "Baby" },
  ];

  const videos = [
    {
      title: "Космические открытия 2024",
      channel: "Наука Про",
      views: "1.2M",
      time: "2 дня назад",
      duration: "15:24",
      category: "Наука",
    },
    {
      title: "Лучшие голы чемпионата",
      channel: "Спорт ТВ",
      views: "850K",
      time: "1 день назад",
      duration: "8:45",
      category: "Спорт",
    },
    {
      title: "Топ 10 хитов месяца",
      channel: "Музыка Today",
      views: "2.1M",
      time: "3 дня назад",
      duration: "12:30",
      category: "Музыка",
    },
    {
      title: "Детские песни о космосе",
      channel: "Детский канал",
      views: "500K",
      time: "1 неделю назад",
      duration: "20:15",
      category: "Для детей",
    },
    {
      title: "Как устроена Вселенная",
      channel: "Космос ТВ",
      views: "1.5M",
      time: "5 дней назад",
      duration: "25:40",
      category: "Наука",
    },
    {
      title: "Футбольные трюки",
      channel: "Спорт Про",
      views: "920K",
      time: "2 дня назад",
      duration: "7:22",
      category: "Спорт",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Космический хедер */}
      <div
        className="relative h-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden"
        style={{
          backgroundImage: `url('img/d5d5416a-f056-4312-9145-0dcb0f14d349.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-white text-3xl font-bold">YouTube 2</div>
            <div className="text-blue-200 text-sm">
              🚀 Космический видеохостинг
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-96">
              <Input
                placeholder="Поиск видео в космосе..."
                className="bg-white/10 border-white/20 text-white placeholder-white/70 pr-12"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
              >
                <Icon name="Search" size={16} />
              </Button>
            </div>
            <Button
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10"
            >
              <Icon name="Upload" size={16} className="mr-2" />
              Загрузить
            </Button>
          </div>
        </div>
      </div>

      {/* Навигация по категориям */}
      <div className="container mx-auto px-4 py-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Категории</h2>
        <div className="grid grid-cols-5 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 text-center">
                <div className="mb-3">
                  <Icon
                    name={category.icon}
                    size={32}
                    className="mx-auto text-blue-600"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.count} видео</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Сетка видео */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Рекомендуемые видео
          </h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="Filter" size={16} className="mr-2" />
              Фильтры
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Grid" size={16} className="mr-2" />
              Сетка
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow group"
            >
              <div className="relative">
                <img
                  src="img/9a79c6f2-1f2a-4f43-89cd-fea403d31d7f.jpg"
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/60 rounded-full p-3">
                    <Icon name="Play" size={24} className="text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>{video.channel}</span>
                  <Badge variant="secondary" className="text-xs">
                    {video.category}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <span>{video.views} просмотров</span>
                  <span>•</span>
                  <span>{video.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Подвал */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">YouTube 2</div>
          <p className="text-gray-400">
            Космический видеохостинг для исследователей Вселенной
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              О нас
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Правила
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
