import Layout from '../components/Layout';
import { content } from '../data/content';

export default function Work() {
  return (
    <Layout title="Work - Minimal Portfolio">
      <section>
        <h1 className="mb-12">{content.work.title}</h1>
        <div className="space-y-12">
          {content.work.projects.map((project, index) => (
            <div key={index} className="group border-b border-gray-100 dark:border-gray-800 pb-12 last:border-0">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <a href={project.link}>{project.title}</a>
                </h2>
                <span className="text-sm font-mono text-gray-400">{project.year}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
