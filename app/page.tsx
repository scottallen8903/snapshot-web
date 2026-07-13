"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "motion/react";
import { Camera, Zap, Share2, Video, Target, Sparkles, Mic, PenLine, Cloud, Check } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen bg-bg">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-brand"
        style={{ scaleX }}
      />
      ...
      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Image src="/logo-wordmark.png" alt="SnapShot" width={180} height={45} priority />
        <a href="#waitlist" className="rounded-full bg-brand px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-brand-hover">Join Waitlist</a>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 pb-24 text-center">
        <span className="mb-6 rounded-full border border-line bg-card px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">Coming Soon</span>
        <h1 className="mb-6 font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight text-ink md:text-8xl">
          Every match.<br />
          <span className="text-brand">Every moment.</span><br />
          Auto-tracked.
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
          SnapShot uses AI to record, track, and clip your grassroots football matches — highlights and tactical breakdowns ready by full-time. One phone. Zero editing.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#waitlist" className="rounded-full bg-brand px-8 py-4 font-display text-base font-semibold uppercase tracking-wider text-ink transition hover:bg-brand-hover">Join the Waitlist</a>
          <a href="#how-it-works" className="rounded-full border border-line bg-card px-8 py-4 font-display text-base font-semibold uppercase tracking-wider text-ink-soft transition hover:border-ink-soft hover:text-ink">See How It Works</a>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-line bg-card py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          <ValueItem label="One phone, one match" sub="No expensive kit. No second operator." />
          <ValueItem label="Ready by full-time" sub="Highlights and clips waiting when the whistle blows." />
          <ValueItem label="Built for grassroots" sub="U8s to Sunday League. Not just the pros." />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-line bg-card px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">How it works</span>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-ink md:text-6xl">
            Three steps from <span className="text-brand">kick-off</span> to highlights.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Step
            n="01"
            icon={<Camera className="h-6 w-6" />}
            title="Record"
            body="Prop up your phone pitchside and hit record. SnapShot captures the full match in 5-second segments so nothing is lost, even if the wifi drops."
            delay={0}
          />
          <Step
            n="02"
            icon={<Zap className="h-6 w-6" />}
            title="Track"
            body="Our AI follows the ball across the pitch, auto-frames the action, and picks out every meaningful moment — goals, breaks, tackles, chances."
            delay={0.15}
          />
          <Step
            n="03"
            icon={<Share2 className="h-6 w-6" />}
            title="Share"
            body="Get highlights and tactical clips ready before you leave the ground. Send them to players, coaches, and parents in one tap."
            delay={0.3}
          />
        </div>
      </section>

      {/* Demo showcase */}
      <section className="relative overflow-hidden border-t border-line bg-gradient-to-b from-bg to-card py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-line bg-card px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">See it in action</span>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-ink md:text-6xl">
              Raw footage in.<br />
              <span className="text-brand">Ready-to-share highlights</span> out.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
              Watch how SnapShot turns a full 90 minutes on the sideline into the moments that actually matter.
            </p>
          </motion.div>

          <div className="relative mx-auto flex max-w-5xl items-center justify-center">
            {/* Feature callouts - left side */}
            <div className="hidden flex-col gap-6 lg:flex lg:w-64">
              <Callout
                title="Auto-tracked camera"
                body="Follows the ball across the pitch automatically."
                delay={0.2}
                align="right"
              />
              <Callout
                title="Highlight detection"
                body="Every goal, chance, and turnover — flagged."
                delay={0.4}
                align="right"
              />
            </div>

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-8"
            >
              {/* Green glow behind phone */}
              <div className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-[60px] bg-brand opacity-20 blur-3xl" />

              <div className="relative rounded-[48px] border-8 border-ink bg-ink p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-64 overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:w-72">
                  {/* Placeholder pitch */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_#166534_0%,_#052e16_70%)] p-6 text-center">
                      <div className="mb-3 h-1 w-16 rounded-full bg-brand/60" />
                      <div className="font-display text-xs font-semibold uppercase tracking-widest text-white/80">Match Playing</div>
                      <div className="mt-2 font-display text-4xl font-bold text-white">2 - 1</div>
                      <div className="mt-1 text-xs text-white/60">Preston vs Newquay</div>
                      <div className="mt-8 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-brand" />
                        <div className="text-xs text-white/80">Tracking</div>
                      </div>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
                </div>
              </div>
            </motion.div>

            {/* Feature callouts - right side */}
            <div className="hidden flex-col gap-6 lg:flex lg:w-64">
              <Callout
                title="Voice-note coaching"
                body="Talk over any clip. Send it to a player."
                delay={0.3}
                align="left"
              />
              <Callout
                title="Tactical breakdowns"
                body="Draw on the pitch. Save. Share."
                delay={0.5}
                align="left"
              />
            </div>
          </div>

          {/* Mobile-only callouts */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            <Callout title="Auto-tracked camera" body="Follows the ball across the pitch automatically." delay={0} align="right" />
            <Callout title="Highlight detection" body="Every goal, chance, and turnover — flagged." delay={0} align="right" />
            <Callout title="Voice-note coaching" body="Talk over any clip. Send it to a player." delay={0} align="right" />
            <Callout title="Tactical breakdowns" body="Draw on the pitch. Save. Share." delay={0} align="right" />
          </div>
        </div>
      </section>
      {/* Feature grid */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-line bg-card px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">What's inside</span>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-ink md:text-6xl">
            More than a camera. <span className="text-brand">A whole analysis kit.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={<Video className="h-5 w-5" />} title="Auto camera tracking" body="AI follows the ball across the pitch. No manual panning. No missed action." delay={0} />
          <Feature icon={<Target className="h-5 w-5" />} title="Ball & player detection" body="Every touch, every run, tracked and timestamped for later review." delay={0.05} />
          <Feature icon={<Sparkles className="h-5 w-5" />} title="Highlight detection" body="Goals, saves, chances, turnovers — auto-clipped and ready to share." delay={0.1} />
          <Feature icon={<Mic className="h-5 w-5" />} title="Voice coaching" body="Record voice notes over any clip. Send them straight to your players." delay={0.15} />
          <Feature icon={<PenLine className="h-5 w-5" />} title="Tactical drawing" body="Draw runs, spaces, and shapes directly on any frame." delay={0.2} />
          <Feature icon={<Cloud className="h-5 w-5" />} title="Cloud storage" body="Every match saved and searchable. Season-long review, not just match day." delay={0.25} />
        </div>
      </section>

      {/* Founder story */}
      <section className="border-y border-line bg-card py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand font-display text-2xl font-bold text-ink">S</div>
              <div>
                <div className="font-display text-lg font-semibold uppercase tracking-wider text-ink">Scott Allen</div>
                <div className="text-sm text-ink-soft">Founder — SnapShot</div>
              </div>
            </div>

            <blockquote className="font-display text-2xl leading-relaxed text-ink md:text-3xl">
              &ldquo;Grassroots football deserves the same tools the pros have. I built SnapShot because I was tired of coaches paying hundreds for analysis kits that were never designed for us. <span className="text-brand">One phone should be enough.</span>&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm text-ink-soft">Solo developer</span>
              <span className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm text-ink-soft">Grassroots coach</span>
              <span className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm text-ink-soft">Building in public</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-4xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-line bg-card p-10 text-center shadow-sm md:p-16"
        >
          <span className="mb-4 inline-block rounded-full border border-line bg-bg px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">Get early access</span>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-ink md:text-6xl">
            Be first on the pitch. <span className="text-brand">Join the waitlist.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            Get the launch code, priority access, and a founding-member discount when SnapShot goes live.
          </p>
          <WaitlistForm />
          <p className="mt-4 text-xs text-ink-muted">No spam. Unsubscribe anytime. We&apos;ll email you once — when it&apos;s time.</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-card py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <Image src="/logo-wordmark.png" alt="SnapShot" width={130} height={32} />
          <div className="text-sm text-ink-muted">© 2026 SnapShot. Built for grassroots football.</div>
        </div>
      </footer>
    </main>
  );
}

function ValueItem({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="text-center">
      <div className="mb-1 font-display text-lg font-semibold uppercase tracking-wider text-ink">{label}</div>
      <div className="text-sm text-ink-soft">{sub}</div>
    </div>
  );
}

function Step({ n, icon, title, body, delay }: { n: string; icon: React.ReactNode; title: string; body: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="rounded-3xl border border-line bg-card p-8 transition hover:border-brand hover:shadow-[0_0_40px_-10px_rgba(0,230,118,0.4)]"
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-ink">{icon}</div>
        <span className="font-display text-4xl font-bold text-ink-muted">{n}</span>
      </div>
      <h3 className="mb-3 font-display text-2xl font-bold uppercase tracking-tight text-ink">{title}</h3>
      <p className="text-ink-soft">{body}</p>
    </motion.div>
  );
}

function Callout({ title, body, delay, align }: { title: string; body: string; delay: number; align: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`rounded-2xl border border-line bg-card p-5 shadow-sm ${align === "right" ? "text-right" : "text-left"}`}
    >
      <div className="mb-1.5 flex items-center gap-2">
        {align === "left" && <div className="h-1.5 w-1.5 rounded-full bg-brand" />}
        <div className="font-display text-sm font-semibold uppercase tracking-wider text-ink">{title}</div>
        {align === "right" && <div className="h-1.5 w-1.5 rounded-full bg-brand" />}
      </div>
      <div className="text-sm text-ink-soft">{body}</div>
    </motion.div>
  );
}

function Feature({ icon, title, body, delay }: { icon: React.ReactNode; title: string; body: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group rounded-2xl border border-line bg-card p-6 transition hover:border-brand hover:shadow-[0_0_30px_-10px_rgba(0,230,118,0.35)]"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-bg text-ink transition group-hover:bg-brand">{icon}</div>
      <h3 className="mb-2 font-display text-lg font-semibold uppercase tracking-wider text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{body}</p>
    </motion.div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const formId = process.env.NEXT_PUBLIC_KIT_FORM_ID;
    if (!formId) {
      setStatus("error");
      setErrorMsg("Form is temporarily unavailable. Please try again shortly.");
      return;
    }
    try {
      const res = await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_address: email }),
      });
      if (!res.ok) throw new Error("Signup failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto mt-10 max-w-lg rounded-2xl border-2 border-brand bg-brand/5 p-8">
        <div className="mb-3 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-ink">
            <Check className="h-6 w-6" strokeWidth={3} />
          </div>
        </div>
        <div className="font-display text-xl font-bold uppercase tracking-wider text-ink">You&apos;re in.</div>
        <div className="mt-2 text-ink-soft">We&apos;ll be in touch when SnapShot launches.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@yourclub.com"
        disabled={status === "loading"}
        className="flex-1 rounded-full border border-line bg-bg px-6 py-4 text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-brand px-8 py-4 font-display text-base font-semibold uppercase tracking-wider text-ink transition hover:bg-brand-hover disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && (
        <div className="w-full text-sm text-red-500">{errorMsg}</div>
      )}
    </form>
  );
}