import { BookOpen } from 'lucide-react';

export default function Blog() {
    const posts = [
        {
            title: "Coming Soon",
            description: "Blog posts are currently under construction. Check back soon for updates!",
            date: "April 2026",
            link: "#"
        }
    ];

    return (
        <section className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-4">
                    <BookOpen className="text-blue-600" size={32} />
                    Blog
                </h1>
                <p className="text-lg text-slate-600 mx-auto max-w-2xl px-4">
                    My thoughts, insights, and stories on data engineering and web development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group lg:min-h-72">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                            {post.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
