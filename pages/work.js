import Layout from '../components/Layout';

export default function Work() {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A minimalist task management app built with React and Firebase.',
      link: '#',
      year: '2023',
    },
    {
      title: 'Beta Commerce',
      description: 'Headless e-commerce template using Next.js and Shopify.',
      link: '#',
      year: '2023',
    },
    {
      title: 'Gamma Dashboard',
      description: 'Data visualization dashboard for internal analytics.',
      link: '#',
      year: '2022',
    },
  ];

  return (
    <Layout title="Work - Minimal Portfolio">
      <section>
        <h1 className="mb-12">Selected Work</h1>
        <div className="space-y-12">
          {projects.map((project, index) => (
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
