import { FolderCode, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "Data Pipeline Automation",
            description: "Built a scalable data ingestion pipeline using AWS Lambda and Spark.",
            tech: ["Python", "AWS", "Spark"],
            github: "#",
            live: "#",
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio built with React and Tailwind CSS.",
            tech: ["React", "Tailwind CSS", "Vite"],
            github: "#",
            live: "#",
        },
    ];

    return (
        <section className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-4">
                    <FolderCode className="text-blue-600" size={32} />
                    Latest Projects
                </h1>
                <p className="text-lg text-slate-600 mx-auto max-w-2xl px-4">
                    A showcase of my recent work in data engineering and web development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Featured Project</span>
                            <div className="flex gap-4">
                                <a href={project.github} className="text-slate-400 hover:text-blue-600 transition-colors">
                                    <Github size={18} />
                                </a>
                                <a href={project.live} className="text-slate-400 hover:text-blue-600 transition-colors">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="bg-slate-50 px-3 py-1 rounded-md text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
