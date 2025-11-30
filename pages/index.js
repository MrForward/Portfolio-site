import Layout from '../components/Layout';
import { content } from '../data/content';

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col justify-center min-h-[60vh]">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-gray-900 dark:text-gray-100">
          {content.home.title} <span className="text-blue-600 dark:text-blue-500">{content.home.name}</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          {content.home.description}
        </p>
      </section>
    </Layout>
  );
}
