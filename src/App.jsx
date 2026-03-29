import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Keyboard, Command, Sparkle, ArrowRight, Cpu, Waves, BatteryCharging } from '@phosphor-icons/react'
import { useRef, useState, useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

function App() {
  const scrollRef = useRef(null)
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 })

  const feature1Opacity = useTransform(smoothProgress, [0, 0.15, 0.25], [0, 1, 1])
  const feature2Opacity = useTransform(smoothProgress, [0.2, 0.35, 0.45], [0, 1, 1])
  const feature3Opacity = useTransform(smoothProgress, [0.4, 0.55, 0.65], [0, 1, 1])
  const feature4Opacity = useTransform(smoothProgress, [0.6, 0.75, 0.85], [0, 1, 1])

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (video.duration) {
        video.currentTime = latest * video.duration
      }
    })

    return () => unsubscribe()
  }, [smoothProgress])

  return (
    <div className="min-h-[100dvh] bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-950 rounded-lg flex items-center justify-center">
              <Keyboard size={18} weight="bold" color="#fafafa" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Arch</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">Products</a>
            <a href="#features" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">Features</a>
            <a href="#specs" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">Specs</a>
          </div>
          <button className="bg-zinc-950 text-[#fafafa] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-[0.98]">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="pt-32 pb-20 px-6 min-h-[100dvh] flex items-center">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-100 rounded-full mb-6">
              <Sparkle size={14} weight="fill" />
              <span className="text-xs font-medium text-zinc-600">Crafted for perfection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6">
              The keyboard
              <br />
              <span className="text-zinc-400">reimagined.</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-[480px] mb-8">
              Minimalist mechanical keyboards engineered with precision.
              Every keystroke, a statement. Every design, purposeful.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-zinc-950 text-[#fafafa] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2">
                Explore Collection
                <ArrowRight size={16} />
              </button>
              <button className="px-7 py-3.5 rounded-full text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all">
                Watch Film
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/50 to-zinc-100/30 rounded-[3rem] blur-3xl" />
            <div className="relative bg-gradient-to-b from-zinc-100 to-zinc-50 rounded-[2.5rem] p-12 border border-zinc-200/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]">
              <div className="aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Keyboard size={120} weight="light" color="#3f3f46" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-zinc-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll-Controlled Video Animation */}
      <section ref={scrollRef} className="py-24 px-6 bg-zinc-950 min-h-[250dvh]">
        <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden">
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features - Left Side */}
            <div className="relative h-[400px] lg:h-[500px]">
              {[
                { title: "Aluminum Body", desc: "CNC-machined 6063 aluminum, hand-polished and anodized", icon: "metal", delay: 0 },
                { title: "Hot-swap PCB", desc: "Change switches instantly without soldering", icon: "chip", delay: 0.25 },
                { title: "Acoustic Dampening", desc: "Multi-layer foam for consistent sound", icon: "wave", delay: 0.5 },
                { title: "Wireless Ready", desc: "4000mAh battery with Bluetooth 5.0", icon: "battery", delay: 0.75 }
              ].map((feature, i) => {
                const yPos = useTransform(smoothProgress, [feature.delay, feature.delay + 0.15], ["100px", "0px"])
                const opacity = useTransform(smoothProgress, [feature.delay - 0.1, feature.delay, feature.delay + 0.2], [0, 1, 1])

                return (
                  <motion.div
                    key={i}
                    style={{ y: yPos, opacity }}
                    className={`absolute left-0 right-0 flex items-center gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700/50">
                      {feature.icon === 'metal' && <div className="w-7 h-7 bg-gradient-to-br from-zinc-300 to-zinc-500 rounded-lg" />}
                      {feature.icon === 'chip' && <Cpu size={28} weight="light" color="#a1a1aa" />}
                      {feature.icon === 'wave' && <Waves size={28} weight="light" color="#a1a1aa" />}
                      {feature.icon === 'battery' && <BatteryCharging size={28} weight="light" color="#a1a1aa" />}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xl mb-1">{feature.title}</h4>
                      <p className="text-zinc-400 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Video - Right Side */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 to-zinc-900/20 rounded-[3rem] blur-2xl" />
              <div className="relative bg-zinc-900 rounded-[2.5rem] p-4 border border-zinc-800/50">
                <video
                  ref={videoRef}
                  src="/src/assets/media/videoo-teclado.mp4"
                  className="w-full aspect-video object-cover rounded-2xl"
                  playsInline
                  muted
                  preload="auto"
                />
              </div>

              {/* Progress Line */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="w-full bg-white rounded-full"
                  style={{ height: progressHeight }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-8 border-y border-zinc-200/50 overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {['Premium Materials', 'Hand Assembled', 'Lifetime Warranty', 'Free Shipping', 'Premium Materials', 'Hand Assembled', 'Lifetime Warranty', 'Free Shipping'].map((text, idx) => (
                <span key={idx} className="text-sm font-medium text-zinc-400 whitespace-nowrap">{text}</span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Products Grid - Bento Style */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Three silhouettes.</h2>
            <p className="text-zinc-500 text-lg max-w-[500px]">Choose your form. Each designed with the same obsessive attention to detail.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 1 - 60% */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-2 bg-zinc-100 rounded-[2.5rem] p-10 hover:bg-zinc-50 transition-colors group cursor-pointer"
            >
              <div className="h-[320px] bg-zinc-900 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                <Keyboard size={180} weight="light" color="#52525b" />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-zinc-800 rounded-full">
                  <span className="text-xs text-zinc-400 font-medium">60% Layout</span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-1">Arch 60</h3>
                  <p className="text-zinc-500 text-sm">Compact. Essential. Pure.</p>
                </div>
                <span className="text-lg font-medium">$249</span>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zinc-100 rounded-[2.5rem] p-8 hover:bg-zinc-50 transition-colors group cursor-pointer"
            >
              <div className="h-[200px] bg-zinc-900 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                <Keyboard size={100} weight="light" color="#52525b" />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-zinc-800 rounded-full">
                  <span className="text-xs text-zinc-400 font-medium">65% Layout</span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight mb-1">Arch 65</h3>
                  <p className="text-zinc-500 text-sm">Balanced proportions.</p>
                </div>
                <span className="text-lg font-medium">$279</span>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-zinc-100 rounded-[2.5rem] p-8 hover:bg-zinc-50 transition-colors group cursor-pointer"
            >
              <div className="h-[200px] bg-zinc-900 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden">
                <Keyboard size={140} weight="light" color="#52525b" />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-zinc-800 rounded-full">
                  <span className="text-xs text-zinc-400 font-medium">75% Layout</span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight mb-1">Arch 75</h3>
                  <p className="text-zinc-500 text-sm">Full function, minimal footprint.</p>
                </div>
                <span className="text-lg font-medium">$299</span>
              </div>
            </motion.div>

            {/* Product 4 - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-2 bg-zinc-900 rounded-[2.5rem] p-10 hover:bg-zinc-800 transition-colors group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-1 text-[#fafafa]">Arch Pro</h3>
                  <p className="text-zinc-400 text-sm">The ultimate. Wireless. Acoustic.</p>
                </div>
                <span className="text-lg font-medium text-[#fafafa]">$449</span>
              </div>
              <div className="h-[240px] bg-zinc-950 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <Keyboard size={160} weight="light" color="#71717a" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1.5 bg-zinc-800 rounded-full">
                    <span className="text-xs text-zinc-300 font-medium">Wireless</span>
                  </span>
                  <span className="px-3 py-1.5 bg-zinc-800 rounded-full">
                    <span className="text-xs text-zinc-300 font-medium">Hot-swappable</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Zig Zag */}
      <section id="features" className="py-24 px-6 bg-zinc-100">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">Engineering <span className="text-zinc-400">matters.</span></h2>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                title: "Aircraft-grade aluminum",
                description: "CNC-machined from a solid block of 6063 aluminum. Hand-polished, anodized, and bead-blasted for a finish that feels as premium as it looks.",
                image: "aluminum"
              },
              {
                title: "Acoustic perfection",
                description: "Multi-layer internal dampening absorbs resonance. Gasket-mounted plate provides the ideal flex. Every keystroke sounds satisfyingly consistent.",
                image: "acoustic"
              },
              {
                title: "Switches that speak",
                description: "Factory-lubed Cherry MX or custom tactile switches. Choose from our curated selection, or use any MX-compatible switch you prefer.",
                image: "switches"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-zinc-500 text-lg leading-relaxed max-w-[480px]">{feature.description}</p>
                </div>
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] bg-zinc-200 rounded-[2rem] flex items-center justify-center">
                    {feature.image === 'aluminum' && <div className="w-32 h-32 bg-gradient-to-br from-zinc-300 to-zinc-400 rounded-2xl" />}
                    {feature.image === 'acoustic' && <Command size={80} weight="light" color="#71717a" />}
                    {feature.image === 'switches' && <div className="flex gap-2"><div className="w-4 h-12 bg-red-500 rounded-full"/><div className="w-4 h-12 bg-blue-500 rounded-full"/><div className="w-4 h-12 bg-brown-500 rounded-full"/>}</div>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Technical specifications</h2>
            <p className="text-zinc-500 text-lg">Every detail accounted for.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Material", value: "6063 Aluminum" },
              { label: "Weight", value: "780g - 1.2kg" },
              { label: "Connection", value: "USB-C / Wireless" },
              { label: "Battery", value: "4000mAh" },
              { label: "PCB", value: "Hot-swap RGB" },
              { label: "Mount", value: "Gasket mount" },
              { label: "Typing angle", value: "6.5 degrees" },
              { label: "Dimensions", value: "310 x 145 x 35mm" },
            ].map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-zinc-100"
              >
                <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">{spec.label}</p>
                <p className="text-lg font-medium">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-zinc-950 text-[#fafafa]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">Ready to type<br/>beautifully?</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-[500px] mx-auto">Join thousands who have elevated their setup. Free shipping. 30-day returns.</p>
            <button className="bg-[#fafafa] text-zinc-950 px-10 py-4 rounded-full text-base font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Shop All Keyboards
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-950 rounded-md flex items-center justify-center">
              <Keyboard size={12} weight="bold" color="#fafafa" />
            </div>
            <span className="text-sm font-medium">Arch</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-950 transition-colors">Support</a>
            <a href="#" className="hover:text-zinc-950 transition-colors">Warranty</a>
            <a href="#" className="hover:text-zinc-950 transition-colors">Contact</a>
          </div>
          <p className="text-sm text-zinc-400">&copy; 2024 Arch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App