import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const projects = [
  {
    n: '01',
    title: 'Neon Store',
    category: 'E-commerce',
    year: '2025',
    desc: 'Интернет-магазин на Tilda с интеграцией оплаты и каталогом из 500+ товаров.',
    image: 'https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/85cf8f07-55da-45bc-9b45-7225c3c7485e.jpg',
    tags: ['Tilda', 'Zero Block', 'Payment'],
  },
  {
    n: '02',
    title: 'Gusto',
    category: 'Restaurant',
    year: '2025',
    desc: 'Лендинг ресторана с онлайн-бронированием и анимированным меню.',
    image: 'https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/d0383eb8-f62f-4355-8490-3e8083f96009.jpg',
    tags: ['Tilda', 'Animation', 'Booking'],
  },
  {
    n: '03',
    title: 'Dataflow',
    category: 'Corporate',
    year: '2024',
    desc: 'Корпоративный сайт IT-компании с разделом аналитики и формами заявок.',
    image: 'https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/130c8606-5a04-4f53-8c4b-e440421c5ba4.jpg',
    tags: ['Tilda', 'CRM', 'B2B'],
  },
];

const services = [
  { n: '01', title: 'Лендинги', desc: 'Продающие одностраничники под ключ с цепляющим дизайном.' },
  { n: '02', title: 'Интернет-магазины', desc: 'Каталог, корзина, приём оплаты прямо на Tilda.' },
  { n: '03', title: 'Zero Block', desc: 'Уникальный дизайн без шаблонов — полный контроль над пикселями.' },
  { n: '04', title: 'Анимации', desc: 'Живые интерактивные эффекты, которые удерживают внимание.' },
  { n: '05', title: 'SEO-настройка', desc: 'Оптимизация под поисковики, чтобы вас находили.' },
  { n: '06', title: 'Поддержка', desc: 'Доработки и сопровождение сайта после запуска.' },
];

const navItems = [
  { label: 'Главная', id: 'hero' },
  { label: 'Проекты', id: 'projects' },
  { label: 'Услуги', id: 'services' },
  { label: 'Контакты', id: 'contacts' },
];

const SectionLabel = ({ index, children }: { index: string; children: string }) => (
  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12">
    <span className="text-accent">({index})</span>
    <span>{children}</span>
    <span className="h-px flex-1 bg-border ml-2" />
  </div>
);

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Заявка отправлена', description: 'Я свяжусь с вами в ближайшее время.' });
    setForm({ name: '', contact: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex">

      {/* ── SIDEBAR (desktop) ── */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-[220px] border-r border-border z-50 bg-background px-8 py-10">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="font-mono text-sm uppercase tracking-[0.2em] mb-auto">
          dev<span className="text-accent">.</span>tilda
        </button>

        {/* Nav */}
        <nav className="flex flex-col gap-1 mb-auto mt-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left font-mono text-xs uppercase tracking-[0.2em] py-2 transition-colors ${
                activeSection === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeSection === item.id && (
                <span className="text-accent mr-2">—</span>
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="mt-auto space-y-4">
          <div className="flex gap-4">
            {['Send', 'Instagram', 'Linkedin'].map((icon) => (
              <button key={icon} className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name={icon} size={16} fallback="Link" />
              </button>
            ))}
          </div>
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.15em] leading-relaxed">
            © 2026<br />Tilda Dev
          </p>
        </div>
      </aside>

      {/* ── MOBILE HEADER ── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 border-b border-border bg-background/90 backdrop-blur-md">
        <button onClick={() => scrollTo('hero')} className="font-mono text-sm uppercase tracking-[0.2em]">
          dev<span className="text-accent">.</span>tilda
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background flex flex-col px-6 pt-24 pb-10 gap-6">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="text-left font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground py-3 border-b border-border">
              {item.label}
            </button>
          ))}
          <Button onClick={() => scrollTo('contacts')} className="rounded-none font-mono text-xs uppercase tracking-[0.2em] mt-4 h-14">
            Обсудить проект
          </Button>
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 md:ml-[220px] overflow-x-hidden">

        {/* HERO */}
        <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-20 md:pt-0">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Разработчик сайтов на Tilda — Москва
            </div>
            <h1 className="font-light leading-[0.96] text-[13vw] md:text-[7.5rem] lg:text-[9rem] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Создаю<br />
              сайты,<br />
              что <span className="italic text-accent">продают</span>
            </h1>
            <div className="mt-12 grid md:grid-cols-2 gap-8 items-end animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Проектирую и собираю выразительные сайты на Tilda — от концепции до запуска. Чистая типографика, продуманная анимация, измеримый результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                <Button onClick={() => scrollTo('projects')} size="lg" className="rounded-none font-mono text-xs uppercase tracking-[0.2em] h-13 px-7">
                  Смотреть работы
                </Button>
                <Button onClick={() => scrollTo('contacts')} variant="outline" size="lg" className="rounded-none font-mono text-xs uppercase tracking-[0.2em] h-13 px-7 border-foreground/30">
                  Заказать сайт
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 border-t border-border animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[['80+', 'реализованных проектов'], ['5 лет', 'в веб-разработке'], ['100%', 'довольных клиентов']].map(([num, label]) => (
              <div key={label} className="py-8 border-r border-border last:border-r-0 pr-6">
                <div className="font-light text-4xl md:text-5xl mb-2">{num}</div>
                <div className="font-mono text-muted-foreground text-[10px] uppercase tracking-[0.15em]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 md:py-36 px-8 md:px-16">
          <SectionLabel index="01">Избранные проекты</SectionLabel>
          <div className="border-t border-border">
            {projects.map((p) => (
              <div key={p.title} className="group grid md:grid-cols-12 gap-6 md:gap-8 items-center py-10 border-b border-border">
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground">{p.n}</div>
                <div className="md:col-span-4 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-52 object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                  />
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-light text-4xl md:text-5xl tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
                <div className="md:col-span-2 flex md:flex-col gap-2 md:items-end">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{p.category}</span>
                  <span className="font-mono text-xs text-muted-foreground">— {p.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-28 md:py-36 px-8 md:px-16 border-t border-border bg-secondary/20">
          <SectionLabel index="02">Услуги</SectionLabel>
          <div className="grid md:grid-cols-2 gap-x-16">
            {services.map((s) => (
              <div key={s.title} className="group flex gap-5 py-7 border-b border-border hover:pl-2 transition-all duration-300">
                <span className="font-mono text-xs text-accent pt-1.5 shrink-0">{s.n}</span>
                <div className="flex-1">
                  <h3 className="font-light text-2xl md:text-3xl tracking-tight mb-1.5 group-hover:translate-x-1 transition-transform">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
                <Icon name="ArrowUpRight" size={20} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="py-28 md:py-36 px-8 md:px-16 border-t border-border">
          <SectionLabel index="03">Связаться</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h2 className="font-light text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1] mb-8">
                Обсудим<br />ваш <span className="italic text-accent">проект</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-sm">
                Расскажите о задаче — отвечу в течение часа и предложу решение под ваш бюджет.
              </p>
              <div>
                {[
                  { label: 'Email', text: 'hello@devtilda.ru' },
                  { label: 'Телефон', text: '+7 (999) 123-45-67' },
                  { label: 'Telegram', text: '@devtilda' },
                ].map((c) => (
                  <div key={c.text} className="flex items-center justify-between py-5 border-t border-border last:border-b">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</span>
                    <span className="text-base">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 pt-2">
              {[
                { key: 'name', label: 'Имя', placeholder: 'Как к вам обращаться' },
                { key: 'contact', label: 'Контакт', placeholder: 'Телефон или email' },
              ].map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
                  <Input
                    required
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 mt-2 focus-visible:ring-0 focus-visible:border-accent placeholder:text-muted-foreground/40"
                  />
                </div>
              ))}
              <div>
                <label className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Сообщение</label>
                <Textarea
                  required
                  placeholder="Опишите ваш проект"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-28 rounded-none border-0 border-b border-border bg-transparent px-0 mt-2 resize-none focus-visible:ring-0 focus-visible:border-accent placeholder:text-muted-foreground/40"
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-none font-mono text-xs uppercase tracking-[0.2em] h-14">
                Отправить заявку
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border px-8 md:px-16 py-8">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.15em]">
            © 2026 — Все права защищены
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
