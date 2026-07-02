import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/#projects" 
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/80 text-slate-700 font-semibold hover:bg-white hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all mb-12"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
        </Link>
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-2xl prose-img:shadow-lg prose-img:border prose-img:border-slate-200 bg-white/40 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 p-8 md:p-12 rounded-3xl">
          <MDXRemote source={project.content} />
        </article>
      </div>
    </div>
  );
}
