import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About - Minimal Portfolio">
      <section className="max-w-2xl">
        <h1 className="mb-8">About Me</h1>
        <div className="prose dark:prose-invert text-lg text-gray-700 dark:text-gray-300">
          <p>
            I am a dedicated developer with a love for clean code and simple design. 
            My journey started when I realized that the best tools are the ones that get out of the way and let you focus on the task at hand.
          </p>
          <p>
            Currently, I am working on creating accessible web experiences using modern technologies like Next.js, React, and Tailwind CSS.
          </p>
          <h2 className="mt-8 mb-4 font-semibold text-xl">What I do</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Full Stack Development</li>
            <li>UI/UX Design</li>
            <li>Performance Optimization</li>
            <li>Open Source Contribution</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
