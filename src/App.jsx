import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Play, Rss, Moon, Sun, Mail, ExternalLink, Apple, Globe, Radio } from "lucide-react";

const BRAND = "他乡与故乡 | Cross-cultural Stories";
const TAGLINE = "跨文化故事播客｜Mandarin · English · Korean";
const CONTACT_EMAIL = "goodrui86@gmail.com";
const RSS_FEED_URL = "https://anchor.fm/s/1072535c0/podcast/rss";

const SOCIALS = [
  { name: "Apple Podcasts", icon: Apple, href: "https://podcasts.apple.com/us/podcast/cross-cultural-stories/id1831182815" },
  { name: "Spotify", icon: Globe, href: "https://open.spotify.com/show/6SNCpFk0GlnuIaLw8D3QGA" },
  { name: "Castbox", icon: Radio, href: "https://castbox.fm/vh/6702883" },
  { name: "小宇宙 Xiaoyuzhou", icon: Globe, href: "https://podcaster.xiaoyuzhoufm.com/podcasts/686cb2e71408ff0abb1ee127/home" },
];

const EPISODES = [
  { id:"ep008", title:'Episode 008｜The "Me" That Bloomed in a Foreign Land (Korean, Part 2)', date:"2025-09-12", duration:"37 min",
    description:"与在斯坦福的朋友 Ara 的对谈（下）：从特权的反思、个体与群体的张力，到把失败视为成长的一部分。",
    audioUrl:"", externalLink:"https://podcasts.apple.com/us/podcast/episode-008-the-me-that-bloomed-in-a-foreign/id1831182815?i=1000726560607", tags:["Korean","跨文化","身份"] },
  { id:"ep007", title:'Episode 007｜The "Me" That Bloomed in a Foreign Land (Korean, Part 1)', date:"2025-09-05", duration:"36 min",
    description:"与 Ara 的对谈（上）：如何定义“故乡/他乡”，以及初到美国后的孤独与文化差异。",
    audioUrl:"", externalLink:"https://podcasts.apple.com/us/podcast/episode-007-the-me-that-bloomed-in-a-foreign/id1831182815?i=1000725190525", tags:["Korean","跨文化","留学"] },
  { id:"ep004", title:"Episode 004｜From Emergency Rooms to Classrooms: Suki’s Cross-Cultural Life (Chinese, Part 2)", date:"2025-08-16", duration:"25 min",
    description:"与来自台湾的 Suki 谈在美国的日常文化差异：饮食、时间观、婚育观与课堂文化等（下集）。",
    audioUrl:"", externalLink:"https://podcasts.apple.com/us/podcast/episode-004-from-emergency-rooms-to-classrooms-sukis/id1831182815?i=1000722152018", tags:["Chinese","生活","文化差异"] },
];

function classNames(...arr) { return arr.filter(Boolean).join(" "); }

export default function PodcastSite() {
  const [q, setQ] = useState("");
  const [dark, setDark] = useState(false);

  const filtered = useMemo(() => {
    if (!q) return EPISODES;
    const s = q.toLowerCase();
    return EPISODES.filter((e) =>
      [e.title, e.description, ...(e.tags || [])].some((t) => (t || "").toLowerCase().includes(s))
    );
  }, [q]);

  return (
    <div className={classNames("min-h-screen transition-colors", dark ? "bg-neutral-950 text-neutral-100" : "bg-neutral-50 text-neutral-900")}> 
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">{BRAND}</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#episodes" className="hover:opacity-80">节目</a>
            <a href="#about" className="hover:opacity-80">关于</a>
            <a href="#subscribe" className="hover:opacity-80">订阅</a>
            <a href="#contact" className="hover:opacity-80">联系</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={RSS_FEED_URL} className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <Rss className="w-4 h-4" /> RSS
            </a>
            <button aria-label="切换主题" onClick={() => setDark((v) => !v)} className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {dark ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-extrabold leading-tight">
            {BRAND}
          </motion.h1>
          <p className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">{TAGLINE}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#episodes" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black"><Play className="w-4 h-4"/> 立刻收听</a>
            <a href="#subscribe" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700"><Rss className="w-4 h-4"/> 订阅更新</a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-indigo-400 to-teal-300"/>
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-pink-300 to-amber-300"/>
        </div>
      </section>

      <section id="episodes" className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl md:text-3xl font-bold">最新节目</h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60"/>
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="搜索标题、描述或标签…" className="pl-9 pr-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none min-w-[240px]"/>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {filtered.map((ep) => (
              <motion.article key={ep.id} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{ep.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{formatDate(ep.date)} · {ep.duration}</p>
                  </div>
                  <a href={ep.externalLink || ep.audioUrl || "#"} className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                    <Play className="w-4 h-4"/> 收听
                  </a>
                </div>
                <p className="text-sm mt-3 text-neutral-700 dark:text-neutral-200">{ep.description}</p>
                {ep.tags?.length ? (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {ep.tags.map((t) => (<span key={t} className="text-xs px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700">#{t}</span>))}
                  </div>
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
          <h2 className="text-2xl md:text-3xl font-bold">订阅与平台</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">在你常用的平台收听，或通过 RSS 订阅。</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href={RSS_FEED_URL} className="flex items-center justify-between p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <div className="flex items-center gap-3"><Rss className="w-5 h-5"/><span>RSS 订阅</span></div><ExternalLink className="w-4 h-4"/>
            </a>
            {SOCIALS.map(({name, icon:Icon, href}) => (
              <a key={name} href={href} className="flex items-center justify-between p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <div className="flex items-center gap-3"><Icon className="w-5 h-5"/><span>{name}</span></div><ExternalLink className="w-4 h-4"/>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-18 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold">关于节目</h2>
            <p className="mt-3 leading-7 text-neutral-700 dark:text-neutral-200"><strong>“他乡与故乡（Cross-cultural Stories）”</strong> 是一个跨文化故事播客。主持人会与来自不同背景的人聊天：谈迁徙、学习、工作与家庭；聊那些我们从家乡带走的东西，以及在他乡慢慢拥有的东西。</p>
            <p className="mt-3 leading-7 text-neutral-700 dark:text-neutral-200">节目围绕 <em>真实、好奇、连结</em> 三个关键词，更新频率为<span className="px-2 py-0.5 rounded-md border mx-1 text-sm">周更</span>。你也可以在下方订阅邮件，获取新节目提醒与幕后花絮。</p>
          </div>
          <aside className="md:col-span-2">
            <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
              <h3 className="font-semibold">邮件订阅（示例）</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">集成 Mailchimp/ConvertKit 等服务前的占位表单。</p>
              <form className="mt-3 flex gap-2">
                <input type="email" placeholder="你的邮箱" className="flex-1 px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none"/>
                <button type="button" className="px-3 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">订阅</button>
              </form>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">提交即表示同意接收节目信息，可随时取消。</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="contact" className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
          <h2 className="text-2xl md:text-3xl font-bold">联系</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-200">合作、来当嘉宾、或给我留言，欢迎发邮件。</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700"><Mail className="w-4 h-4"/> {CONTACT_EMAIL}</a>
        </div>
      </section>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <p className="opacity-70">Made with ♥ · RSS · Privacy</p>
        </div>
      </footer>
    </div>
  );
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch { return iso; }
}