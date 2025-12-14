import Link from 'next/link';
import Layout from '../../components/Layout';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout title="Blog - World of Krishna">
      <section>
        <h1 className="mb-12">Writing</h1>
        <div className="space-y-10">
          {allPostsData.map(({ id, date, title, description }) => (
            <div key={id} className="group">
              <Link href={`/blog/${id}`} className="block">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </h2>
                  <span className="text-sm font-mono text-gray-400 shrink-0 md:ml-4">{date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                  {description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
