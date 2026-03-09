// src/components/Hero.jsx
import loading from '../assets/acatxio-graphics-card-14927_512.gif'
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-[#faf9f6] overflow-hidden">

            {/* 1. THE SUN FLARE - Switched to MULTIPLY + DEEPER ORANGE */}
            <motion.div
                animate={{
                    opacity: [0.6, 0.9, 0.6],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                // Changed bg-orange-200 to bg-orange-400 and added mix-blend-multiply
                className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-orange-400/20 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply"
            />

            {/* 2. THE ANAMORPHIC GLARE - Added COLOR-BURN for edge contrast */}
            <motion.div
                animate={{ x: [-50, 50, -50] }}
                transition={{ duration: 15, repeat: Infinity }}
                // This will look like a warm "streak" across the screen
                className="absolute top-1/2 left-[-25%] w-[150%] h-[200px] bg-gradient-to-r from-transparent via-orange-300/30 to-transparent blur-[80px] pointer-events-none z-0 rotate-[-15deg] mix-blend-color-burn"
            />

            {/* 3. BOKEH BALLS - Using 'soft-light' to make them feel like lens artifacts */}
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-orange-200/40 rounded-full blur-3xl mix-blend-multiply" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="z-20 text-center px-6"
            >
                <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4 tracking-tight">
                    Hi, I'm <span className="text-orange-600 font-light italic">Shyam Mohan V M</span>
                </h1>

                <p className="mt-4 text-slate-500 font-mono tracking-[0.3em] uppercase text-xs">
                    35mm // f/1.4 // ISO 400 // Data
                </p>

                <div className="mt-16 flex flex-col items-center gap-6">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        🚧 Processing Negative... 🚧
                    </h3>

                    <div className="relative p-4 bg-white shadow-2xl shadow-orange-200/20 rounded-sm border border-slate-100 transform -rotate-2 hover:rotate-0 transition-all duration-700">
                        <img
                            src={loading}
                            alt="loading"
                            className="w-64 grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}