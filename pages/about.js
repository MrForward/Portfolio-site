import Layout from '../components/Layout';
import { content } from '../data/content';

export default function About() {
  return (
    <Layout title="About - World of Krishna">
      <section className="max-w-2xl">
        <h1 className="mb-8">{content.about.title}</h1>
        <div className="prose dark:prose-invert text-lg text-gray-700 dark:text-gray-300">
          {content.about.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* render the current field from content with a "Currently" heading */}
          {content.about.current && (
            <>
              <h2 className="mt-8 mb-4 font-semibold text-xl">Currently</h2>
              <p className="mt-0">{content.about.current}</p>
            </>
          )}
          
          <h2 className="mt-8 mb-4 font-semibold text-xl">{content.about.skillsTitle}</h2>
          <ul className="list-disc pl-5 space-y-2">
            {content.about.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
