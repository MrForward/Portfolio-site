import Layout from '../components/Layout';
import { content } from '../data/content';

export default function Contact() {
  return (
    <Layout title="Contact - World of Krishna">
      <section className="max-w-xl">
        <h1 className="mb-8">{content.contact.title}</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          {content.contact.description}
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email</h3>
            <a href={`mailto:${content.contact.email}`} className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {content.contact.email}
            </a>
          </div>
          
          <div className="pt-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Socials</h3>
            <div className="flex flex-col space-y-3">
              {content.contact.socials.map((social, index) => (
                <a key={index} href={social.link} className="text-lg hover:underline underline-offset-4 decoration-gray-400">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
