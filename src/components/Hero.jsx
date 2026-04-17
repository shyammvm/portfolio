// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// Ensure this path matches your project structure
import loading from '../assets/acatxio-graphics-card-14927_512.gif';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center bg-[#fdfdf5] overflow-hidden">

            {/* --- 1. THE CONCENTRIC SUNSET LAMP --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 0.8, 0.7],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] rounded-full z-0 mix-blend-multiply"
                    style={{
                        background: `radial-gradient(circle at center, 
                            #ff6600 0%,     /* Hot Orange Center */
                            #ffcc99 20%,    /* Peach Transition */
                            #00ccff 45%,    /* Sky Blue Inner */
                            #29ffff 65%,    /* Cyan Outer Ring */
                            transparent 85% /* Falloff */
                        )`,
                        filter: 'blur(70px)',
                    }}
                />
            </div>

            {/* --- 2. MAIN CONTENT LAYER --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-20 text-center px-6"
            >
                {/* TEXT GROUP WITH LEAF SHADOWS */}
                <div className="relative inline-block">

                    {/* THE "LEAF SHADOW" LAYER (The blurry duplicate) */}
                    {/* Increased offset and darker multiply color for prominence */}
                    <span
                        className="absolute top-4 left-4 w-full blur-xl text-orange-950/60 select-none mix-blend-multiply pointer-events-none translate-y-2"
                        aria-hidden="true"
                    >
                        Hi, I'm Shyam Mohan V M
                    </span>

                    {/* THE AMBIENT BLOOM (Soft glow behind text) */}
                    <span
                        className="absolute inset-0 blur-3xl text-orange-400/20 select-none pointer-events-none"
                        aria-hidden="true"
                    >
                        Hi, I'm Shyam Mohan V M
                    </span>

                    {/* THE MAIN CRISP TEXT */}
                    <h1 className="relative text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">
                        Hi, I'm <span className="text-orange-600 font-light italic">Shyam Mohan V M</span>
                    </h1>
                </div>

                <p className="mt-4 text-slate-500 font-mono tracking-[0.4em] uppercase text-[10px] opacity-80">
                    35mm // f/1.4 // ISO 400 // SQL?!
                </p>

                <p className="mt-4 text-slate-500 font-mono tracking-[0.4em] uppercase text-[10px] opacity-80">
                    🚧 Under Construction 🚧
                </p>

                {/* THE POLAROID FRAME */}
                <div className="mt-20 inline-block p-4 pb-12 bg-white shadow-[20px_20px_60px_rgba(0,0,0,0.08),-10px_-10px_60px_rgba(255,255,255,0.8)] rounded-sm border border-slate-100 transform -rotate-2 hover:rotate-0 transition-all duration-700 ease-in-out cursor-pointer">
                    <div className="bg-slate-50 overflow-hidden">
                        <img
                            src={loading}
                            alt="Processing..."
                            className="w-64 h-auto grayscale brightness-105 contrast-110 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                        />
                    </div>
                    {/* Captions like a real print */}
                    <div className="absolute bottom-4 left-6">
                        <p className="font-serif italic text-slate-400 text-[10px]">
                            Negative #14927 // Bengaluru, IN
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* --- 3. EDGE VIGNETTE --- */}
            <div className="absolute inset-0 pointer-events-none z-30 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.02)_100%)]" />
        </section>
    );
}