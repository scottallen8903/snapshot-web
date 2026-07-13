"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "motion/react";
import { Camera, Zap, Share2, Video, Target, Sparkles, Mic, PenLine, Cloud, Check, X, ChevronDown } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

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
          SnapShot uses tracking technology to record and clip your grassroots football matches, highlight key moments and record tactical breakdowns - ready to review by full-time.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#waitlist" className="rounded-full bg-brand px-8 py-4 font-display text-base font-semibold uppercase tracking-wider text-ink transition hover:bg-brand-hover">Join the Waitlist</a>
          <a href="#how-it-works" className="rounded-full border border-line bg-card px-8 py-4 font-display text-base font-semibold uppercase tracking-wider text-ink-soft transition hover:border-ink-soft hover:text-ink">See How It Works</a>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-line bg-card py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          <ValueItem label="Handsfree mobile phone" sub="Mount it. Hit play. Recordthe match." />
          <ValueItem label="Ready by full-time" sub="Highlights and clips waiting when the whistle blows." />
          <ValueItem label="Built for grassroots" sub="Perfect for U8s to Sunday League. Not just the pros." />
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
            body="Mount your phone pitchside and hit record. SnapShot captures the full match in 5-second segments so nothing is lost, even if the wifi drops."
            delay={0}
          />
          <Step
            n="02"
            icon={<Zap className="h-6 w-6" />}
            title="Track"
            body="Get highlights and tactical clips ready before you leave the ground. Send them to players, coaches, and supporters in one tap."
            delay={0.15}
          />
          <Step
            n="03"
            icon={<Share2 className="h-6 w-6" />}
            title="Share"
            body="Players, coaches, and supporters get instant access to every replay - no more waiting for files to be sent."
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
            {/* Phone showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-8"
            >
              {/* Green glow behind phone */}
              <div className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-[60px] bg-brand opacity-25 blur-3xl" />

              <Image
                src="/example-footage.png"
                alt="SnapShot showing Southport 1st vs Tarleton 2nd match with auto-generated highlights"
                width={320}
                height={640}
                priority
                className="relative drop-shadow-2xl"
              />
            </motion.div>
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
          <Feature icon={<Sparkles className="h-5 w-5" />} title="Highlight detection" body="Goals, saves, chances, turnovers - auto-clipped and ready to share." delay={0.1} />
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
                <div className="text-sm text-ink-soft">Founder - SnapShot</div>
              </div>
            </div>

            <blockquote className="font-display text-2xl leading-relaxed text-ink md:text-3xl">
              &ldquo;Grassroots football deserves the same tools the pros have. I built SnapShot because I was tired of coaches paying hundreds for sports cameras that were never designed for us. <span className="text-brand">One phone should be enough.</span>&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm text-ink-soft">Solo developer</span>
              <span className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm text-ink-soft">Grassroots coach</span>
              <span className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm text-ink-soft">Building in public</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-line bg-card px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">The price problem</span>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-ink md:text-6xl">
            Match analysis costs <span className="text-brand">£1,000+ a season.</span><br />
            It shouldn&apos;t.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
            The pros bought their hardware and locked in subscriptions. Grassroots coaches shouldn&apos;t have to. SnapShot uses the phone in your pocket - that&apos;s the whole idea.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden overflow-hidden rounded-3xl border border-line bg-card lg:block"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="p-6 text-sm font-semibold uppercase tracking-wider text-ink-soft"></th>
                <th className="relative bg-brand/10 p-6 text-center">
                  <div className="absolute left-0 right-0 top-0 h-1 bg-brand" />
                  <div className="font-display text-lg font-bold uppercase tracking-wider text-ink">SnapShot</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-brand">Coming soon</div>
                </th>
                <th className="p-6 text-center">
                  <div className="font-display text-lg font-bold uppercase tracking-wider text-ink-soft">Veo</div>
                </th>
                <th className="p-6 text-center">
                  <div className="font-display text-lg font-bold uppercase tracking-wider text-ink-soft">Trace</div>
                </th>
                <th className="p-6 text-center">
                  <div className="font-display text-lg font-bold uppercase tracking-wider text-ink-soft">Hudl</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <CompareRow label="Hardware to buy" values={["£0 - use your phone", "£500+", "£300+", "£1,000+"]} />
              <CompareRow label="Monthly subscription" values={["From £10", "£33 – £75", "~£23", "Enterprise"]} />
              <CompareRow label="Year 1 total cost" values={["£120", "£900+", "£576+", "£1,600+"]} highlight />
              <CompareRow label="3-year total cost" values={["£360", "£2,300+", "£1,128+", "£4,600+"]} highlight />
              <CompareRow label="Auto-tracking" values={[true, true, true, true]} />
              <CompareRow label="Highlight detection" values={[true, true, true, true]} />
              <CompareRow label="Voice-note coaching" values={[true, false, false, true]} />
              <CompareRow label="Built for grassroots" values={[true, false, false, false]} />
            </tbody>
          </table>
        </motion.div>

        {/* Mobile card view */}
        <div className="grid grid-cols-1 gap-4 lg:hidden">
          <CompareCard name="SnapShot" tag="Coming soon" featured items={[
            { label: "Hardware", value: "£0" },
            { label: "Monthly", value: "From £10" },
            { label: "Year 1 total", value: "£120" },
            { label: "3-year total", value: "£360" },
          ]} />
          <CompareCard name="Veo" items={[
            { label: "Hardware", value: "£500+" },
            { label: "Monthly", value: "£33 – £75" },
            { label: "Year 1 total", value: "£900+" },
            { label: "3-year total", value: "£2,300+" },
          ]} />
          <CompareCard name="Trace" items={[
            { label: "Hardware", value: "£300+" },
            { label: "Monthly", value: "~£23" },
            { label: "Year 1 total", value: "£576+" },
            { label: "3-year total", value: "£1,128+" },
          ]} />
          <CompareCard name="Hudl" items={[
            { label: "Hardware", value: "£1,000+" },
            { label: "Monthly", value: "Enterprise" },
            { label: "Year 1 total", value: "£1,600+" },
            { label: "3-year total", value: "£4,600+" },
          ]} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-3xl border-2 border-brand bg-brand/5 p-8 text-center"
        >
          <div className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
            Over three seasons
          </div>
          <div className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
            Save <span className="text-brand">£2,000+</span> vs Veo
          </div>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Same auto-tracking. Same highlight detection. Same cloud storage. Without the price tag or the hardware that lives in your boot.
          </p>
        </motion.div>

        <p className="mt-8 text-center text-xs text-ink-muted">
          Pricing indicative and accurate as of July 2026. Actual SnapShot pricing confirmed at launch. All trademarks belong to their respective owners.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-line bg-card px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-ink-soft">Questions</span>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-ink md:text-6xl">
            Everything a coach <span className="text-brand">actually asks.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          <FaqItem q="What phone do I need?" a="Any modern Android or iPhone from the last four years or so. SnapShot is built for phones like the Samsung Galaxy S22+ or iPhone 12+. The higher the camera quality, the better the tracked output - but it works with what you already have." />
          <FaqItem q="Do I need wifi at the pitch?" a="No. Recording happens on the phone locally. Uploads to the cloud happen in the background whenever you next have a wifi or mobile signal. Perfect for the middle-of-nowhere Sunday League pitches." />
          <FaqItem q="Will the battery last a full 90 minutes?" a="Yes on most modern phones. For tournaments or double-headers, a small power bank plugged in during play keeps you going indefinitely." />
          <FaqItem q="What if I only have one phone?" a="No worries - unlike other tracking apps, SnapShot works brilliantly as a standalone single-phone app. Mount your phone on the sideline and you're ready to go. There's also an optional two-phone mode if you want a wider panorama, but single-phone is the main experience." />
          <FaqItem q="Can I edit the highlights it makes?" a="Absolutely. Trim, rename, add voice notes, draw on frames, and stitch multiple clips together. Everything is customisable - SnapShot's job is to give you a great starting point, not lock you in." />
          <FaqItem q="Is my match footage private?" a="Yes, private by default. Only the team members you explicitly invite can view your matches. Nothing is shared publicly unless you choose to." />
         <FaqItem q="Is it free for players and supporters?" a="Yes. Teams pay a small monthly fee, but the app is completely free for players and supporters to access their team's highlights, clips, and full match footage. Only the coach or manager pays." />
        <FaqItem q="When does it launch?" a="Beta is targeted for late 2026 with a full launch shortly after. Join the waitlist and you'll be first to use the app when we go live." />
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
            Be the first to use SnapShot when we launch. Priority access and a launch-day heads-up.
          </p>
          <WaitlistForm />
          <p className="mt-4 text-xs text-ink-muted">No spam. Unsubscribe anytime. We&apos;ll email you once - when it&apos;s time.</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-card py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <Image src="/logo-wordmark.png" alt="SnapShot" width={130} height={32} />

          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/share/1AFEaMgJ2h/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg text-ink-soft transition hover:border-brand hover:text-brand">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/snapshotsportscamera" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg text-ink-soft transition hover:border-brand hover:text-brand">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg text-ink-soft transition hover:border-brand hover:text-brand">
              <FaXTwitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="TikTok" className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg text-ink-soft transition hover:border-brand hover:text-brand">
              <FaTiktok className="h-4 w-4" />
            </a>
          </div>

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

function CompareRow({ label, values, highlight = false }: { label: string; values: (string | boolean)[]; highlight?: boolean }) {
  return (
    <tr className={`border-b border-line last:border-0 ${highlight ? "" : ""}`}>
      <td className="p-6 text-sm font-medium text-ink-soft">{label}</td>
      {values.map((v, i) => (
        <td key={i} className={`p-6 text-center text-sm ${i === 0 ? "bg-brand/10 font-semibold text-ink" : "text-ink-soft"}`}>
          {v === true ? (
            <Check className={`mx-auto h-5 w-5 ${i === 0 ? "text-brand" : "text-ink-soft"}`} strokeWidth={3} />
          ) : v === false ? (
            <X className="mx-auto h-5 w-5 text-ink-muted" strokeWidth={2} />
          ) : (
            v
          )}
        </td>
      ))}
    </tr>
  );
}

function CompareCard({ name, tag, featured = false, items }: { name: string; tag?: string; featured?: boolean; items: { label: string; value: string }[] }) {
  return (
    <div className={`rounded-2xl border p-6 ${featured ? "border-brand bg-brand/5 shadow-[0_0_30px_-10px_rgba(0,230,118,0.4)]" : "border-line bg-card"}`}>
      <div className="mb-4 flex items-baseline justify-between">
        <div className="font-display text-lg font-bold uppercase tracking-wider text-ink">{name}</div>
        {tag && <div className="text-xs uppercase tracking-widest text-brand">{tag}</div>}
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-ink-soft">{item.label}</span>
            <span className="text-right font-medium text-ink">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-2xl border border-line bg-card"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left transition hover:bg-bg"
      >
        <span className="pr-4 font-display text-base font-semibold uppercase tracking-wider text-ink md:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-ink-soft transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6 text-ink-soft"
        >
          {a}
        </motion.div>
      )}
    </motion.div>
  );
}