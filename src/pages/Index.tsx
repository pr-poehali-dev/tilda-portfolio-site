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
    desc: 'Интернет-магазин электроники с каталогом 500+ товаров.',
    metrics: [{ val: '+34%', label: 'конверсия' }, { val: '2.1×', label: 'средний чек' }, { val: '14 дней', label: 'срок' }],
    image: 'https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/85cf8f07-55da-45bc-9b45-7225c3c7485e.jpg',
  },
  {
    n: '02',
    title: 'Gusto',
    category: 'Restaurant',
    year: '2025',
    desc: 'Лендинг ресторана с онлайн-бронированием столиков.',
    metrics: [{ val: '+58%', label: 'бронирований' }, { val: '3× ', label: 'трафик' }, { val: '7 дней', label: 'срок' }],
    image: 'https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/d0383eb8-f62f-4355-8490-3e8083f96009.jpg',
  },
  {
    n: '03',
    title: 'Dataflow',
    category: 'Corporate',
    year: '2024',
    desc: 'Корпоративный сайт IT-компании с формами заявок и аналитикой.',
    metrics: [{ val: '+120%', label: 'лидов в месяц' }, { val: '−40%', label: 'отказов' }, { val: '21 день', label: 'срок' }],
    image: 'https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/130c8606-5a04-4f53-8c4b-e440421c5ba4.jpg',
  },
];

const packages = [
  {
    n: '01',
    title: 'Старт',
    price: 'от 25 000 ₽',
    days: '5–7 дней',
    desc: 'Продающий лендинг под ключ. Идеально для запуска продукта или услуги.',
    items: ['До 7 блоков на Tilda', 'Адаптив под мобильные', 'Базовое SEO', 'Форма заявки', 'Урок по управлению'],
  },
  {
    n: '02',
    title: 'Бизнес',
    price: 'от 55 000 ₽',
    days: '14–21 день',
    desc: 'Многостраничный сайт или магазин с нестандартным дизайном.',
    items: ['Zero Block — уникальный дизайн', 'До 10 страниц', 'Интеграция оплаты', 'Анимации и интерактив', 'SEO + аналитика', '1 мес. поддержки'],
    highlight: true,
  },
  {
    n: '03',
    title: 'Премиум',
    price: 'от 100 000 ₽',
    days: 'от 30 дней',
    desc: 'Флагманский проект с полной стратегией, дизайном и сопровождением.',
    items: ['Стратегия и прототип', 'Неограниченно страниц', 'CRM-интеграция', 'A/B тесты', '3 мес. поддержки', 'Приоритетная связь'],
  },
];

const reviews = [
  {
    name: 'Анна Смирнова',
    role: 'Владелец Gusto',
    text: 'Запустили сайт за неделю — бронирований стало в три раза больше уже в первый месяц. Никакой воды, только результат.',
    avatar: 'A',
    stars: 5,
  },
  {
    name: 'Михаил Петров',
    role: 'CEO Dataflow',
    text: 'Другие студии обещали 2 месяца. Здесь сделали за 21 день и вдвое больше лидов. Теперь только сюда.',
    avatar: 'М',
    stars: 5,
  },
  {
    name: 'Екатерина Волкова',
    role: 'Основатель Neon Store',
    text: 'Конверсия выросла с 1.2% до 4.1% — это деньги, а не слова. Сайт окупился за первые 3 недели.',
    avatar: 'Е',
    stars: 5,
  },
];

const faqs = [
  { q: 'Сколько стоит сайт на Tilda?', a: 'Лендинг — от 25 000 ₽, многостраничный сайт — от 55 000 ₽. Точную стоимость назову после разбора вашей задачи — иногда выходит дешевле.' },
  { q: 'Как долго делается сайт?', a: 'Лендинг — 5–7 дней, сложный проект — 14–30 дней. Сроки фиксируем в договоре и не нарушаем.' },
  { q: 'Нужна ли мне платная подписка Tilda?', a: 'Для большинства проектов нужен Tilda Business (~1 990 ₽/мес). Помогу разобраться с тарифом и настройкой.' },
  { q: 'Что будет после сдачи?', a: 'Передам доступы, проведу урок по редактированию. В пакетах Бизнес и Премиум включена поддержка 1–3 месяца.' },
  { q: 'Берёте предоплату?', a: '50% после согласования концепции, 50% после сдачи. Работаю по договору.' },
];

const navItems = [
  { label: 'Главная', id: 'hero' },
  { label: 'Обо мне', id: 'about' },
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

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Icon key={i} name="Star" size={12} className="text-accent fill-accent" />
    ))}
  </div>
);

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [activeSection, setActiveSection] = useState('hero');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

      {/* ── SIDEBAR ── */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-[220px] border-r border-border z-50 bg-background px-8 py-10">
        <button onClick={() => scrollTo('hero')} className="font-mono text-sm uppercase tracking-[0.2em]">
          dev<span className="text-accent">.</span>tilda
        </button>
        <nav className="flex flex-col gap-1 mt-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left font-mono text-xs uppercase tracking-[0.2em] py-2 transition-colors ${
                activeSection === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeSection === item.id && <span className="text-accent mr-2">—</span>}
              {item.label}
            </button>
          ))}
        </nav>
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
        <div className="md:hidden fixed inset-0 z-40 bg-background flex flex-col px-6 pt-24 pb-10 gap-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="text-left font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground py-4 border-b border-border">
              {item.label}
            </button>
          ))}
          <Button onClick={() => scrollTo('contacts')} className="rounded-none font-mono text-xs uppercase tracking-[0.2em] mt-6 h-14">
            Обсудить проект
          </Button>
        </div>
      )}

      {/* ── MAIN ── */}
      <main className="flex-1 md:ml-[220px] overflow-x-hidden">

        {/* HERO */}
        <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-20 md:pt-0">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Разработчик сайтов на Tilda — Москва
            </div>
            <h1 className="font-light leading-[0.96] text-[13vw] md:text-[7.5rem] lg:text-[9rem] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Сайт на Tilda,<br />
              который <span className="italic text-accent">работает</span>
            </h1>
            <div className="mt-12 grid md:grid-cols-2 gap-8 items-end animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Делаю сайты, которые приносят заявки, а не просто красиво выглядят. Фиксированные сроки, прозрачная цена, измеримый результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                <Button onClick={() => scrollTo('contacts')} size="lg" className="rounded-none font-mono text-xs uppercase tracking-[0.2em] h-13 px-7">
                  Обсудить проект
                </Button>
                <Button onClick={() => scrollTo('projects')} variant="outline" size="lg" className="rounded-none font-mono text-xs uppercase tracking-[0.2em] h-13 px-7 border-foreground/30">
                  Смотреть работы
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

        {/* ABOUT */}
        <section id="about" className="py-28 md:py-36 px-8 md:px-16 border-t border-border">
          <SectionLabel index="01">Обо мне</SectionLabel>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/ddb6276e-9471-4fd6-a39e-99ac13f3b885/files/366b84d6-2e3a-4d5e-98fa-20ef9e5fc0b5.jpg"
                alt="Разработчик"
                className="w-full aspect-[4/5] object-cover grayscale"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm border border-border p-4">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-1">Статус</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-xs text-muted-foreground">Открыт для новых проектов</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-light text-4xl md:text-5xl tracking-tight mb-6 leading-tight">
                Привет, я Алексей — <span className="italic text-accent">делаю сайты</span>, которые работают на ваш бизнес
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                5 лет разрабатываю сайты на Tilda — от небольших лендингов до флагманских проектов для компаний с оборотом 500 млн ₽. Специализируюсь на Zero Block и нестандартных решениях.
              </p>
              <div className="space-y-px mb-10">
                {[
                  ['Tilda Certified Partner', 'Официальный партнёр платформы'],
                  ['Фиксированные сроки', 'Пишу в договоре — и соблюдаю'],
                  ['Без посредников', 'Общаетесь напрямую со мной'],
                  ['Обучаю клиентов', 'Сдаю сайт с инструкцией'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-4 py-4 border-b border-border">
                    <Icon name="Check" size={16} className="text-accent mt-1 shrink-0" />
                    <div>
                      <div className="font-medium text-sm">{title}</div>
                      <div className="font-mono text-xs text-muted-foreground mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button onClick={() => scrollTo('contacts')} className="rounded-none font-mono text-xs uppercase tracking-[0.2em] h-13 px-7">
                Написать мне
                <Icon name="ArrowRight" size={14} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 md:py-36 px-8 md:px-16 border-t border-border">
          <SectionLabel index="02">Избранные проекты</SectionLabel>
          <div className="border-t border-border">
            {projects.map((p) => (
              <div key={p.title} className="group py-10 border-b border-border">
                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                  <div className="md:col-span-1 font-mono text-xs text-muted-foreground pt-1">{p.n}</div>
                  <div className="md:col-span-4 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-52 object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                    />
                  </div>
                  <div className="md:col-span-7">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{p.category} — {p.year}</span>
                        <h3 className="font-light text-4xl md:text-5xl tracking-tight mt-1 group-hover:text-accent transition-colors duration-300">{p.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                    <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-light text-2xl text-accent">{m.val}</div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-28 md:py-36 px-8 md:px-16 border-t border-border bg-secondary/20">
          <SectionLabel index="03">Отзывы клиентов</SectionLabel>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="border border-border p-8 flex flex-col gap-5 hover:border-accent/40 transition-colors">
                <Stars count={r.stars} />
                <p className="text-foreground leading-relaxed flex-1">«{r.text}»</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-mono text-sm text-accent font-medium">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{r.name}</div>
                    <div className="font-mono text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES / PACKAGES */}
        <section id="services" className="py-28 md:py-36 px-8 md:px-16 border-t border-border">
          <SectionLabel index="04">Услуги и цены</SectionLabel>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`flex flex-col p-8 border transition-colors ${
                  pkg.highlight
                    ? 'border-accent/60 bg-accent/5'
                    : 'border-border hover:border-foreground/30'
                }`}
              >
                {pkg.highlight && (
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Популярный выбор</div>
                )}
                <div className="font-mono text-xs text-muted-foreground mb-2">{pkg.n}</div>
                <h3 className="font-light text-3xl tracking-tight mb-1">{pkg.title}</h3>
                <div className="text-2xl font-medium mb-1">{pkg.price}</div>
                <div className="font-mono text-xs text-muted-foreground mb-4">{pkg.days}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pkg.desc}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Icon name="Check" size={14} className="text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollTo('contacts')}
                  variant={pkg.highlight ? 'default' : 'outline'}
                  className="rounded-none font-mono text-xs uppercase tracking-[0.2em] h-12 border-foreground/30"
                >
                  Выбрать пакет
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 md:py-36 px-8 md:px-16 border-t border-border bg-secondary/20">
          <SectionLabel index="05">Частые вопросы</SectionLabel>
          <div className="max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-6"
                >
                  <span className="font-medium text-lg">{faq.q}</span>
                  <Icon
                    name={openFaq === i ? 'Minus' : 'Plus'}
                    size={18}
                    className={`shrink-0 transition-colors ${openFaq === i ? 'text-accent' : 'text-muted-foreground'}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="py-28 md:py-36 px-8 md:px-16 border-t border-border">
          <SectionLabel index="06">Связаться</SectionLabel>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h2 className="font-light text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1] mb-8">
                Обсудим<br />ваш <span className="italic text-accent">проект</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-sm">
                Расскажите о задаче — отвечу в течение часа и предложу решение под ваш бюджет.
              </p>
              <div className="mb-10">
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
              {/* Social proof рядом с формой */}
              <div className="border border-border p-6">
                <Stars count={5} />
                <p className="text-sm leading-relaxed mt-3 mb-4">
                  «Сайт окупился за первые 3 недели. Конверсия выросла с 1.2% до 4.1%.»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-mono text-xs text-accent">Е</div>
                  <div className="font-mono text-xs text-muted-foreground">Екатерина Волкова — Neon Store</div>
                </div>
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
                  placeholder="Опишите ваш проект, бюджет и сроки"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-28 rounded-none border-0 border-b border-border bg-transparent px-0 mt-2 resize-none focus-visible:ring-0 focus-visible:border-accent placeholder:text-muted-foreground/40"
                />
              </div>
              <div className="space-y-3">
                <Button type="submit" size="lg" className="w-full rounded-none font-mono text-xs uppercase tracking-[0.2em] h-14">
                  Отправить заявку
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <p className="font-mono text-[10px] text-muted-foreground text-center uppercase tracking-[0.15em]">
                  Отвечаю в течение 1 часа · Без спама
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border px-8 md:px-16 py-8">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.15em]">
            © 2026 — dev.tilda — Все права защищены
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
