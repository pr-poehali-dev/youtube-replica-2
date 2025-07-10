import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [likes, setLikes] = useState({});
  const [subscriptions, setSubscriptions] = useState({});

  const categories = [
    { name: "Музыка", count: "1.2M", icon: "Music" },
    { name: "Спорт", count: "800K", icon: "Trophy" },
    { name: "Популярное", count: "2.5M", icon: "TrendingUp" },
    { name: "Наука", count: "600K", icon: "Microscope" },
    { name: "Для детей", count: "1.8M", icon: "Baby" },
  ];

  const videos = [
    {
      id: 1,
      title: "Космические открытия 2024",
      channel: "Наука Про",
      views: "1.2M",
      time: "2 дня назад",
      duration: "15:24",
      category: "Наука",
      likes: 45600,
      subscribers: "2.3M",
      description:
        "Последние открытия в космосе, которые изменят наше понимание Вселенной. Новые экзопланеты, черные дыры и многое другое!",
    },
    {
      id: 2,
      title: "Лучшие голы чемпионата",
      channel: "Спорт ТВ",
      views: "850K",
      time: "1 день назад",
      duration: "8:45",
      category: "Спорт",
      likes: 23400,
      subscribers: "1.8M",
      description:
        "Самые красивые и зрелищные голы этого сезона. Невероятные удары и мастерство лучших футболистов!",
    },
    {
      id: 3,
      title: "Топ 10 хитов месяца",
      channel: "Музыка Today",
      views: "2.1M",
      time: "3 дня назад",
      duration: "12:30",
      category: "Музыка",
      likes: 78900,
      subscribers: "5.2M",
      description:
        "Лучшие музыкальные хиты этого месяца. Новинки, которые покорили чарты и сердца слушателей.",
    },
    {
      id: 4,
      title: "Детские песни о космосе",
      channel: "Детский канал",
      views: "500K",
      time: "1 неделю назад",
      duration: "20:15",
      category: "Для детей",
      likes: 12300,
      subscribers: "890K",
      description:
        "Весёлые и познавательные песни о космосе для детей. Изучаем планеты, звёзды и космические корабли!",
    },
    {
      id: 5,
      title: "Как устроена Вселенная",
      channel: "Космос ТВ",
      views: "1.5M",
      time: "5 дней назад",
      duration: "25:40",
      category: "Наука",
      likes: 67800,
      subscribers: "3.1M",
      description:
        "Увлекательный рассказ о строении Вселенной от Большого взрыва до современности. Научные факты простым языком.",
    },
    {
      id: 6,
      title: "Футбольные трюки",
      channel: "Спорт Про",
      views: "920K",
      time: "2 дня назад",
      duration: "7:22",
      category: "Спорт",
      likes: 34500,
      subscribers: "1.2M",
      description:
        "Невероятные футбольные трюки и финты от профессиональных игроков. Учимся мастерству у лучших!",
    },
  ];

  const shorts = [
    {
      id: 7,
      title: "Космос за 60 секунд",
      channel: "Быстрая наука",
      views: "3.2M",
      time: "1 час назад",
      duration: "0:58",
      category: "Наука",
      likes: 125000,
      subscribers: "4.5M",
    },
    {
      id: 8,
      title: "Танец планет",
      channel: "Космос Арт",
      views: "2.8M",
      time: "3 часа назад",
      duration: "0:45",
      category: "Наука",
      likes: 98000,
      subscribers: "2.9M",
    },
    {
      id: 9,
      title: "Гол века!",
      channel: "Спорт Миг",
      views: "1.9M",
      time: "2 часа назад",
      duration: "0:30",
      category: "Спорт",
      likes: 67000,
      subscribers: "3.2M",
    },
    {
      id: 10,
      title: "Детская считалка",
      channel: "Малыш ТВ",
      views: "1.1M",
      time: "4 часа назад",
      duration: "0:42",
      category: "Для детей",
      likes: 45000,
      subscribers: "1.8M",
    },
    {
      id: 11,
      title: "Хит дня",
      channel: "Музыка Плюс",
      views: "2.5M",
      time: "1 час назад",
      duration: "0:55",
      category: "Музыка",
      likes: 89000,
      subscribers: "6.1M",
    },
  ];

  const handleLike = (videoId) => {
    setLikes((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

  const handleSubscribe = (channel) => {
    setSubscriptions((prev) => ({
      ...prev,
      [channel]: !prev[channel],
    }));
  };

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

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

      {/* Короткие видео */}
      <div className="container mx-auto px-4 py-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <Icon name="Zap" size={24} className="mr-2 text-red-500" />
            Короткие видео
          </h2>
          <Button variant="outline" size="sm">
            <Icon name="Plus" size={16} className="mr-2" />
            Создать Short
          </Button>
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-4">
          {shorts.map((short) => (
            <Card
              key={short.id}
              className="flex-shrink-0 w-48 cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => openVideo(short)}
            >
              <div className="relative">
                <img
                  src="img/4af26aad-97a0-4e9e-b107-a44aa723560d.jpg"
                  alt={short.title}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {short.duration}
                </div>
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  SHORT
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/60 rounded-full p-3">
                    <Icon name="Play" size={20} className="text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-3">
                <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">
                  {short.title}
                </h3>
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <span>{short.views} просмотров</span>
                </div>
                <div className="text-xs text-gray-600">{short.channel}</div>
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
          {videos.map((video) => (
            <Card
              key={video.id}
              className="cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => openVideo(video)}
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
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(video.id);
                      }}
                      className={`p-1 ${likes[video.id] ? "text-red-500" : "text-gray-400"}`}
                    >
                      <Icon
                        name="Heart"
                        size={16}
                        className={likes[video.id] ? "fill-current" : ""}
                      />
                    </Button>
                    <span className="text-xs text-gray-500">
                      {video.likes.toLocaleString()}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubscribe(video.channel);
                    }}
                    className="p-1 text-blue-600 hover:bg-blue-50"
                  >
                    <Icon name="UserPlus" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Модальное окно просмотра видео */}
      {selectedVideo && (
        <Dialog
          open={!!selectedVideo}
          onOpenChange={() => setSelectedVideo(null)}
        >
          <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-left">
                {selectedVideo.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {/* Видео плеер */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <img
                  src={
                    selectedVideo.duration &&
                    selectedVideo.duration.includes("0:")
                      ? "img/4af26aad-97a0-4e9e-b107-a44aa723560d.jpg"
                      : "img/9a79c6f2-1f2a-4f43-89cd-fea403d31d7f.jpg"
                  }
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 rounded-full p-4">
                    <Icon name="Play" size={32} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded">
                  {selectedVideo.duration}
                </div>
              </div>

              {/* Информация о видео */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {selectedVideo.views} просмотров • {selectedVideo.time}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleLike(selectedVideo.id)}
                      className={
                        likes[selectedVideo.id]
                          ? "text-red-500 border-red-500"
                          : ""
                      }
                    >
                      <Icon
                        name="Heart"
                        size={16}
                        className={`mr-2 ${likes[selectedVideo.id] ? "fill-current" : ""}`}
                      />
                      {selectedVideo.likes?.toLocaleString() || "0"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Share" size={16} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Информация о канале */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {selectedVideo.channel[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{selectedVideo.channel}</h4>
                      <p className="text-sm text-gray-600">
                        {selectedVideo.subscribers} подписчиков
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleSubscribe(selectedVideo.channel)}
                    className={
                      subscriptions[selectedVideo.channel]
                        ? "bg-gray-500 hover:bg-gray-600"
                        : "bg-red-600 hover:bg-red-700"
                    }
                  >
                    {subscriptions[selectedVideo.channel]
                      ? "Подписан"
                      : "Подписаться"}
                  </Button>
                </div>

                {/* Описание */}
                {selectedVideo.description && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      {selectedVideo.description}
                    </p>
                  </div>
                )}

                {/* Комментарии */}
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Комментарии
                  </h4>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            U{i}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm">
                              Пользователь {i}
                            </span>
                            <span className="text-xs text-gray-500">
                              {i} час назад
                            </span>
                          </div>
                          <p className="text-sm text-gray-700">
                            {i === 1 &&
                              "Отличное видео! Очень познавательно 🚀"}
                            {i === 2 && "Спасибо за качественный контент!"}
                            {i === 3 && "Когда будет следующая серия?"}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto text-xs text-gray-500"
                            >
                              <Icon name="Heart" size={12} className="mr-1" />
                              {Math.floor(Math.random() * 100)}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto text-xs text-gray-500"
                            >
                              Ответить
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

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
