import { Camera, Youtube, ExternalLink } from 'lucide-react';

export default function Gallery() {
    const media = [
        {
            title: "Hampi 10-Year Anniversary",
            platform: "YouTube",
            type: "Video",
            link: "#",
            description: "A cinematic journey through the ruins of Hampi."
        },
        {
            title: "Street Photography",
            platform: "Instagram",
            type: "Image",
            link: "#",
            description: "Capturing the essence of daily life in the city."
        },
    ];

    return (
        <section className="pt-32 pb-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                            <Camera className="text-blue-600" size={32} />
                            Creative Gallery
                        </h2>
                        <p className="text-slate-500 mt-2 text-lg">A collection of my photography and video projects.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {media.map((item, index) => (
                        <div key={index} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                            <div className="aspect-video bg-slate-200 flex items-center justify-center relative overflow-hidden text-slate-400 group-hover:text-blue-500 transition-colors">
                                {item.platform === "YouTube" ? (
                                    <Youtube size={64} className="group-hover:scale-110 transition-transform duration-500" />
                                ) : (
                                    <Camera size={64} className="group-hover:scale-110 transition-transform duration-500" />
                                )}
                                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">
                                        {item.platform}
                                    </span>
                                    <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}