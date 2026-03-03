// src/components/Hero.jsx
import loading from '../assets/acatxio-graphics-card-14927_512.gif'

export default function Hero() {
    return (
        <section className="py-20 px-6 text-center bg-white">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
                Hi, I'm <span className="text-blue-600">Shyam Mohan V M</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Data Engineer. I specialize in building scalable data pipelines, AWS cloud architecture, and facilitating my lazy life by building automations.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                    View Projects
                </button>
                <button className="border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition">
                    Contact Me
                </button> */}

                <h3>
                    🚧 Under construction 🚧
                </h3>

                <img src={loading} alt="loading" />
            </div>
        </section>
    );
}