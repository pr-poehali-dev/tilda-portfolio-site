import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const projects = [
  {
    title: 'NEON STORE',
    category: 'E-commerce',
    desc: 'Интернет-магазин на Tilda с интеграцией оплаты и каталогом из 500+ товаров.',
    image: 'https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/85cf8f07-55da-45bc-9b45-7225c3c7485e.jpg',
    tags: ['Tilda', 'Zero Block', 'Payment'],
  },
  {
    title: 'GUSTO',
    category: 'Restaurant',
    desc: 'Лендинг ресторана с онлайн-бронированием и анимированным меню.',
    image: 'https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/d0383eb8-f62f-4355-8490-3e8083f96009.jpg',
    tags: ['Tilda', 'Animation', 'Booking'],
  },
  {
    title: 'DATAFLOW',
    category: 'Corporate',
    desc: 'Корпоративный сайт IT-компании с разделом аналитики и формами заявок.',
    image: 'https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/130c8606-5a04-4f53-8c4b-e440421c5ba4.jpg',
    tags: ['Tilda', 'CRM', 'B2B'],
  },
];

const services = [
  { icon: 'LayoutTemplate', title: 'Лендинги', desc: 'Продающие одностраничники под ключ с цепляющим дизайном.' },
  { icon: 'ShoppingCart', title: 'Интернет-магазины', desc: 'Каталог, корзина, приём оплаты прямо на Tilda.' },
  { icon: 'Boxes', title: 'Zero Block', desc: 'Уникальный дизайн без шаблонов — полный контроль над пикселями.' },
  { icon: 'Zap', title: 'Анимации', desc: 'Живые интерактивные эффекты, которые удерживают внимание.' },
  { icon: 'Search', title: 'SEO-настройка', desc: 'Оптимизация под поисковики, чтобы вас находили.' },
  { icon: 'Wrench', title: 'Поддержка', desc: 'Доработки и сопровождение сайта после запуска.' },
];

const navItems = [
  { label: 'Главная', id: 'hero' },
  { label: 'Проекты', id: 'projects' },
  { label: 'Услуги', id: 'services' },
  { label: 'Контакты', id: 'contacts' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', message: '' });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Заявка отправлена!', description: 'Я свяжусь с вами в ближайшее время.' });
    setForm({ name: '', contact: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="font-display text-xl font-bold tracking-tight">
            DEV<span className="text-primary">.</span>TILDA
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollTo('contacts')} className="rounded-full font-display uppercase tracking-wide">
              Обсудить
            </Button>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left uppercase tracking-wide text-muted-foreground">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center grid-bg pt-16">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="container relative z-10">
          <p className="font-display uppercase tracking-[0.3em] text-primary text-sm mb-6 animate-fade-up">
            Разработчик сайтов на Tilda
          </p>
          <h1 className="font-display font-bold leading-[0.95] text-[14vw] md:text-[9rem] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            СОЗДАЮ<br />
            <span className="text-primary text-glow">САЙТЫ</span><br />
            ЧТО ПРОДАЮТ
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <Button onClick={() => scrollTo('projects')} size="lg" className="rounded-full font-display uppercase tracking-wide text-base h-14 px-8">
              Смотреть работы
              <Icon name="ArrowDown" size={18} className="ml-2" />
            </Button>
            <Button onClick={() => scrollTo('contacts')} variant="outline" size="lg" className="rounded-full font-display uppercase tracking-wide text-base h-14 px-8 border-2">
              Заказать сайт
            </Button>
          </div>
          <div className="flex gap-12 mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[['80+', 'проектов'], ['5 лет', 'опыта'], ['100%', 'довольных']].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-4xl font-bold text-primary">{num}</div>
                <div className="text-muted-foreground text-sm uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-4 bg-primary text-primary-foreground overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center font-display font-bold uppercase text-2xl tracking-wide">
              {['Дизайн', 'Вёрстка', 'Анимация', 'SEO', 'Скорость', 'Tilda Pro'].map((w) => (
                <span key={w} className="flex items-center">
                  <Icon name="Star" size={20} className="mx-6" />
                  {w}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="py-24 md:py-32">
        <div className="container">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-display uppercase tracking-[0.3em] text-primary text-sm mb-3">Портфолио</p>
              <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight">ПРОЕКТЫ</h2>
            </div>
            <Icon name="ArrowUpRight" size={48} className="text-primary hidden md:block" />
          </div>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="group grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary transition-colors"
              >
                <div className={`overflow-hidden rounded-xl ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="font-display uppercase tracking-widest text-primary text-xs">{p.category}</span>
                  <h3 className="font-display font-bold text-4xl md:text-5xl mt-2 mb-4 tracking-tight">{p.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="border border-border rounded-full px-4 py-1 text-sm text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 border-y border-border grid-bg">
        <div className="container">
          <div className="mb-16">
            <p className="font-display uppercase tracking-[0.3em] text-primary text-sm mb-3">Что я делаю</p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight">УСЛУГИ</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-8 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors">
                  <Icon name={s.icon} size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 tracking-tight">{s.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display uppercase tracking-[0.3em] text-primary text-sm mb-3">Связаться</p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-6">
              ОБСУДИМ<br />ВАШ <span className="text-primary text-glow">ПРОЕКТ</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Расскажите о задаче — отвечу в течение часа и предложу решение под ваш бюджет.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'Mail', text: 'hello@devtilda.ru' },
                { icon: 'Phone', text: '+7 (999) 123-45-67' },
                { icon: 'Send', text: '@devtilda' },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={c.icon} size={20} className="text-primary" />
                  </div>
                  <span className="text-lg">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5">
            <h3 className="font-display font-bold text-2xl tracking-tight">Оставить заявку</h3>
            <Input
              required
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="h-12 bg-secondary border-border"
            />
            <Input
              required
              placeholder="Телефон или email"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              className="h-12 bg-secondary border-border"
            />
            <Textarea
              required
              placeholder="Опишите ваш проект"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="min-h-32 bg-secondary border-border resize-none"
            />
            <Button type="submit" size="lg" className="w-full rounded-full font-display uppercase tracking-wide h-14 text-base">
              Отправить заявку
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-bold tracking-tight">DEV<span className="text-primary">.</span>TILDA</span>
          <p className="text-muted-foreground text-sm">© 2026 Разработка сайтов на Tilda. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
