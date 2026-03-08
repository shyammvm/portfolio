// src/components/Hero.jsx
import loading from '../assets/acatxio-graphics-card-14927_512.gif'

export default function Hero() {
    return (
        <section className="py-20 px-6 text-center bg-white">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
                Hi, I'm <span className="text-red-600 font-light">Shyam Mohan V M</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Data Engineer. I specialize in building scalable data pipelines, AWS cloud architecture, and facilitating my lazy life by building automations.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">

                <h3 className="text-xl font-semibold text-slate-700">
                    🚧 Under construction 🚧
                </h3>
                <img src={loading} alt="loading" className="w-64 rounded-xl shadow-lg" />
            </div>
        </section>
    );
}