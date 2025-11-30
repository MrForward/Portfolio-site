import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col justify-center min-h-[60vh]">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-gray-900 dark:text-gray-100">
          Hello, I'm <span className="text-blue-600 dark:text-blue-500">Jules</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          I'm a software engineer passionate about building clean, efficient, and user-friendly applications. 
          I specialize in minimalism and typography-focused design.
        </p>
      </section>
    </Layout>
  );
}
