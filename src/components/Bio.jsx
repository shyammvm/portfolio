import { User, Mail, MapPin, Briefcase } from 'lucide-react';

export default function Bio() {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <User size={80} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">About Me</h1>
                        <p className="text-xl text-slate-600 leading-relaxed italic">
                            "Data Engineer by day, automation enthusiast by night."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-800">My Journey</h2>
                        <p className="text-slate-600 leading-relaxed">
                            I am Shyam Mohan V M, a Data Engineer with a passion for building scalable data pipelines
                            and cloud architectures. I love turning complex data problems into elegant, automated solutions.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-slate-600">
                                <Briefcase size={20} className="text-blue-600" />
                                <span>Data Engineer</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <MapPin size={20} className="text-blue-600" />
                                <span>India</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <Mail size={20} className="text-blue-600" />
                                <span>shyam@example.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Core Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'AWS', 'SQL', 'Terraform', 'Spark', 'Airflow', 'React', 'Tailwind'].map(skill => (
                                <span key={skill} className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-slate-700 shadow-sm border border-slate-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
