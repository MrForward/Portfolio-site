import Head from 'next/head';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout title={`${postData.title} - Minimal Portfolio`}>
      <article className="max-w-2xl mx-auto">
        <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{postData.title}</h1>
            <div className="text-gray-500 font-mono text-sm">{postData.date}</div>
        </header>
        
        <div 
            className="prose prose-lg dark:prose-invert hover:prose-a:text-blue-600 prose-a:transition-colors mx-auto"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    </Layout>
  );
}
