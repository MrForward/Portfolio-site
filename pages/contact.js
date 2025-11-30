import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact - Minimal Portfolio">
      <section className="max-w-xl">
        <h1 className="mb-8">Get in Touch</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email</h3>
            <a href="mailto:hello@example.com" className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              hello@example.com
            </a>
          </div>
          
          <div className="pt-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Socials</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-lg hover:underline underline-offset-4 decoration-gray-400">Twitter / X</a>
              <a href="#" className="text-lg hover:underline underline-offset-4 decoration-gray-400">LinkedIn</a>
              <a href="#" className="text-lg hover:underline underline-offset-4 decoration-gray-400">GitHub</a>
              <a href="#" className="text-lg hover:underline underline-offset-4 decoration-gray-400">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
