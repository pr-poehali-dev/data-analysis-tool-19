import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "pricing", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.15 }
      );

      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Flame" size={24} className="text-accent" />
            <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
              ТеплоАкадемия
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">
              Курсы
            </a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">
              Как учиться
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">
              Тарифы
            </a>
          </nav>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 text-sm font-medium border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all text-white">
              Войти
            </button>
            <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent via-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all font-semibold">
              Начать обучение
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-red-900/20 to-amber-900/10" />
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-radial from-orange-600/20 via-orange-800/10 to-transparent blur-3xl animate-pulse" />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Профессиональное обучение теплоэнергетике
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Освой теплоэнергетику
                </span>
                <br />
                <span className="text-accent">от А до Я.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Интерактивные уроки по теплооборудованию, котлам, тепловым сетям и энергоэффективности.
                Для операторов, инженеров и руководителей теплоснабжения.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center">
                  Начать бесплатно
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition" />
                </button>
                <button className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white">
                  Смотреть программу
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">120+</div>
                  <p className="text-sm text-white/60">Уроков и модулей</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">5 000+</div>
                  <p className="text-sm text-white/60">Специалистов обучено</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">98%</div>
                  <p className="text-sm text-white/60">Успешно сдают тесты</p>
                </div>
              </div>
            </div>

            <div
              className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 bg-card/60 border border-accent/20 rounded-3xl p-8 w-full max-w-sm backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Icon name="BookOpen" size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Текущий урок</div>
                    <div className="text-xs text-muted-foreground">Модуль 3 из 8</div>
                  </div>
                </div>
                <div className="font-bold text-lg mb-2">Котельные установки</div>
                <div className="text-sm text-muted-foreground mb-4">Принципы работы паровых котлов и системы автоматики</div>
                <div className="w-full bg-secondary rounded-full h-2 mb-2">
                  <div className="bg-gradient-to-r from-accent to-orange-400 h-2 rounded-full" style={{ width: "65%" }} />
                </div>
                <div className="text-xs text-muted-foreground mb-6">65% выполнено</div>
                <div className="space-y-2">
                  {["Типы котлов и их классификация", "Режимы горения топлива", "Системы безопасности"].map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Icon name={i < 2 ? "CheckCircle" : "Circle"} size={16} className={i < 2 ? "text-accent" : "text-muted-foreground"} />
                      <span className={i < 2 ? "text-white" : "text-muted-foreground"}>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Возможности платформы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Всё для глубоких знаний
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Flame",
                title: "Котлы и горелки",
                desc: "Подробные разборы котельного оборудования: паровые, водогрейные, промышленные установки.",
              },
              {
                icon: "Thermometer",
                title: "Тепловые сети",
                desc: "Гидравлика теплосетей, расчёт потерь, балансировка и режимы работы систем теплоснабжения.",
              },
              {
                icon: "Gauge",
                title: "КИП и автоматика",
                desc: "Контрольно-измерительные приборы, датчики, регуляторы и системы управления теплопроцессами.",
              },
              {
                icon: "ShieldCheck",
                title: "Охрана труда",
                desc: "Правила безопасной эксплуатации теплооборудования, аварийные режимы, инструктажи.",
              },
              {
                icon: "BarChart2",
                title: "Энергоэффективность",
                desc: "Методы снижения потерь тепла, энергоаудит и оптимизация режимов работы оборудования.",
              },
              {
                icon: "ClipboardList",
                title: "Интерактивные тесты",
                desc: "Проверка знаний после каждого модуля, сертификаты и подготовка к аттестации.",
              },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                    <Icon name={item.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Процесс обучения</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                От новичка до эксперта
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Выбери курс", desc: "Подберите программу под свою специализацию и уровень подготовки" },
              { num: "02", title: "Изучай материал", desc: "Видеоуроки, схемы оборудования и интерактивные симуляторы" },
              { num: "03", title: "Проходи тесты", desc: "Проверяйте знания после каждого модуля с мгновенной обратной связью" },
              { num: "04", title: "Получи сертификат", desc: "Документ подтверждает квалификацию для работодателя или аттестации" },
            ].map((step, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col justify-between transition-all backdrop-blur-sm cursor-pointer">
                    <div>
                      <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Тарифы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Инвестиция в знания
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Базовый",
                price: "2 900 ₽/мес",
                features: [
                  "Доступ к 50+ урокам",
                  "Интерактивные тесты",
                  "Поддержка сообщества",
                  "Сертификат по модулям",
                ],
                highlight: false,
              },
              {
                name: "Профессиональный",
                price: "По запросу",
                features: [
                  "Все курсы без ограничений",
                  "Корпоративные лицензии",
                  "Куратор и разбор задач",
                  "Документы для аттестации",
                ],
                highlight: true,
              },
            ].map((plan, i) => {
              const isVisible = visibleSections["pricing"];
              return (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  } ${plan.highlight ? "md:scale-105" : ""}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {plan.highlight && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition" />
                  )}
                  <div
                    className={`relative p-10 border rounded-2xl h-full flex flex-col justify-between backdrop-blur-sm transition-all ${
                      plan.highlight ? "border-accent/40 bg-accent/10" : "border-accent/10 bg-card/50 hover:bg-card/80"
                    }`}
                  >
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                      <p className="text-4xl font-black text-accent mb-8">{plan.price}</p>
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex gap-3 text-sm items-start">
                            <Icon name="ArrowRight" size={16} className="text-accent flex-shrink-0 mt-1" />
                            <span className="text-foreground/80">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className={`w-full px-6 py-4 rounded-xl font-semibold transition-all ${
                        plan.highlight
                          ? "bg-gradient-to-r from-accent to-accent/80 text-black hover:shadow-xl hover:shadow-accent/40"
                          : "border border-accent/20 hover:border-accent/40 hover:bg-accent/5 text-white"
                      }`}
                    >
                      {plan.highlight ? "Связаться с нами" : "Попробовать бесплатно"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Готовы прокачать экспертизу?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Присоединяйтесь к тысячам специалистов, которые уже повысили квалификацию в теплоэнергетике.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 mx-auto">
            Начать обучение бесплатно
            <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Flame" size={18} className="text-accent" />
            <p>© 2026 ТеплоАкадемия — Профессиональное обучение теплоэнергетике</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Конфиденциальность
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Программы курсов
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
