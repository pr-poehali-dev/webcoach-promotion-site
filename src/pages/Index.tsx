import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Партнёрский маркетинг: от А до Я',
    description: 'Полное руководство по запуску прибыльных партнёрских программ',
    category: 'affiliate',
    level: 'beginner',
    duration: '8 недель',
    price: '29 990 ₽',
    image: 'https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/files/088942a0-e4d5-4e8c-9a30-faec46b4c20e.jpg',
  },
  {
    id: 2,
    title: 'Нейросети для бизнеса',
    description: 'Практическое применение ИИ инструментов для автоматизации',
    category: 'ai',
    level: 'intermediate',
    duration: '6 недель',
    price: '34 990 ₽',
    image: 'https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/files/51b5d749-19d9-4434-98f7-d13eefa0d1a5.jpg',
  },
  {
    id: 3,
    title: 'Видеомаркетинг: создание контента',
    description: 'Создавайте вирусные видео для продаж и лидогенерации',
    category: 'video',
    level: 'beginner',
    duration: '5 недель',
    price: '24 990 ₽',
    image: 'https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/files/7b974420-8895-4e7f-afab-cb4a50abffc5.jpg',
  },
  {
    id: 4,
    title: 'ChatGPT для маркетологов',
    description: 'Используйте ИИ для создания контента и автоматизации',
    category: 'ai',
    level: 'beginner',
    duration: '4 недели',
    price: '19 990 ₽',
    image: 'https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/files/51b5d749-19d9-4434-98f7-d13eefa0d1a5.jpg',
  },
  {
    id: 5,
    title: 'Продвинутые партнёрские стратегии',
    description: 'Масштабирование партнёрского бизнеса до 7 цифр',
    category: 'affiliate',
    level: 'advanced',
    duration: '10 недель',
    price: '49 990 ₽',
    image: 'https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/files/088942a0-e4d5-4e8c-9a30-faec46b4c20e.jpg',
  },
  {
    id: 6,
    title: 'Монтаж видео: от новичка до профи',
    description: 'Профессиональный монтаж в DaVinci Resolve и Adobe Premiere',
    category: 'video',
    level: 'intermediate',
    duration: '7 недель',
    price: '32 990 ₽',
    image: 'https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/files/7b974420-8895-4e7f-afab-cb4a50abffc5.jpg',
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredCourses = courses.filter((course) => {
    if (selectedCategory !== 'all' && course.category !== selectedCategory) return false;
    if (selectedLevel !== 'all' && course.level !== selectedLevel) return false;
    return true;
  });

  const getLevelBadgeVariant = (level: string) => {
    if (level === 'beginner') return 'default';
    if (level === 'intermediate') return 'secondary';
    return 'destructive';
  };

  const getLevelText = (level: string) => {
    if (level === 'beginner') return 'Новичок';
    if (level === 'intermediate') return 'Средний';
    return 'Продвинутый';
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">WebCoach</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
            <a href="#coaches" className="text-foreground hover:text-primary transition-colors">О коучах</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Войти</Button>
        </nav>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/bucket/b686c284-4cbb-41b9-9203-a1d1913e8c39.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Освой <span className="text-primary">прибыльные навыки</span> онлайн
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Партнёрки, нейросети и видеомаркетинг — курсы от экспертов с реальным опытом
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  Выбрать курс
                  <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Смотреть демо
                  <Icon name="Play" className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Практический опыт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Все курсы созданы практиками, зарабатывающими на своих навыках
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Личный наставник</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Поддержка и обратная связь от коучей на протяжении всего курса
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Результат гарантирован</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Возврат средств, если не получите результат при выполнении заданий
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог курсов</h2>
            <p className="text-xl text-muted-foreground">
              Выберите направление и начните учиться уже сегодня
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-2xl">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">Все курсы</TabsTrigger>
                <TabsTrigger value="affiliate">Партнёрки</TabsTrigger>
                <TabsTrigger value="ai">Нейросети</TabsTrigger>
                <TabsTrigger value="video">Видео</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <Button
              variant={selectedLevel === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedLevel('all')}
            >
              Все уровни
            </Button>
            <Button
              variant={selectedLevel === 'beginner' ? 'default' : 'outline'}
              onClick={() => setSelectedLevel('beginner')}
            >
              Новичок
            </Button>
            <Button
              variant={selectedLevel === 'intermediate' ? 'default' : 'outline'}
              onClick={() => setSelectedLevel('intermediate')}
            >
              Средний
            </Button>
            <Button
              variant={selectedLevel === 'advanced' ? 'default' : 'outline'}
              onClick={() => setSelectedLevel('advanced')}
            >
              Продвинутый
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={getLevelBadgeVariant(course.level)}>
                      {getLevelText(course.level)}
                    </Badge>
                    <Badge variant="outline">
                      <Icon name="Clock" className="h-3 w-3 mr-1" />
                      {course.duration}
                    </Badge>
                  </div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                  <Button>
                    Записаться
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="coaches" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши коучи</h2>
            <p className="text-xl text-muted-foreground">
              Учитесь у профессионалов с подтверждённым опытом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей Петров',
                role: 'Эксперт по партнёркам',
                experience: '5+ лет опыта',
                income: 'Доход от $50k/мес',
                image: 'https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/files/088942a0-e4d5-4e8c-9a30-faec46b4c20e.jpg',
              },
              {
                name: 'Мария Соколова',
                role: 'Специалист по ИИ',
                experience: '7+ лет опыта',
                income: 'Ex-Яндекс, Google',
                image: 'https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/files/51b5d749-19d9-4434-98f7-d13eefa0d1a5.jpg',
              },
              {
                name: 'Дмитрий Волков',
                role: 'Видеопродюсер',
                experience: '10+ лет опыта',
                income: '50M+ просмотров',
                image: 'https://cdn.poehali.dev/projects/43f293ab-0270-49a9-8d96-425339cab4e6/files/7b974420-8895-4e7f-afab-cb4a50abffc5.jpg',
              },
            ].map((coach, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/20"
                    />
                  </div>
                  <CardTitle>{coach.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {coach.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Icon name="Award" className="h-4 w-4" />
                      <span>{coach.experience}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Icon name="TrendingUp" className="h-4 w-4" />
                      <span>{coach.income}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы учеников</h2>
            <p className="text-xl text-muted-foreground">
              Более 5000 довольных студентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна К.',
                course: 'Партнёрский маркетинг',
                text: 'За 3 месяца вышла на стабильный доход $3000/мес. Курс окупился в первый месяц!',
                rating: 5,
              },
              {
                name: 'Сергей М.',
                course: 'Нейросети для бизнеса',
                text: 'Автоматизировал 80% рутины в агентстве. Теперь работаю 4 часа в день вместо 12.',
                rating: 5,
              },
              {
                name: 'Елена Р.',
                course: 'Видеомаркетинг',
                text: 'Мои видео набирают по 100k просмотров. Получила 5 новых клиентов за месяц!',
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Нужны ли специальные знания для начала?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, все курсы начинаются с базовых понятий. Мы проведём вас от новичка до профессионала пошагово.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Сколько времени нужно уделять обучению?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Рекомендуем 5-7 часов в неделю. Все материалы остаются с вами навсегда, можете учиться в своём темпе.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Есть ли гарантия возврата средств?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, если вы выполнили все задания курса и не получили результат, мы вернём 100% стоимости в течение 30 дней.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Можно ли платить частями?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, доступна рассрочка на 3-6 месяцев без переплат через наших партнёров.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Выдаётся ли сертификат?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, после успешного прохождения курса вы получите сертификат, который можно добавить в резюме и LinkedIn.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать обучение?</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите курс и получите первый урок бесплатно
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Выбрать курс
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Задать вопрос
              <Icon name="MessageCircle" className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Icon name="Mail" className="h-8 w-8" />
              <p className="font-semibold">Email</p>
              <a href="mailto:info@webcoach.ru" className="opacity-90 hover:opacity-100">
                info@webcoach.ru
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon name="Phone" className="h-8 w-8" />
              <p className="font-semibold">Телефон</p>
              <a href="tel:+79001234567" className="opacity-90 hover:opacity-100">
                +7 (900) 123-45-67
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Icon name="MessageCircle" className="h-8 w-8" />
              <p className="font-semibold">Telegram</p>
              <a href="https://t.me/webcoach" className="opacity-90 hover:opacity-100">
                @webcoach
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">
            © 2024 WebCoach. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
