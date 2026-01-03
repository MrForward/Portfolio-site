import Layout from '../components/Layout';
import NowPlaying from '../components/NowPlaying';
import { content } from '../data/content';

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col justify-center min-h-[60vh]">
        <h1 className="text-6xl font-extrabold leading-snug">
          <span className="block">Hello, I'm <span className="text-indigo-600">{content.home.name}</span><span className="animated-dot">.</span></span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          {content.home.description}
        </p>

        {/* Now Playing Widget (powered by Last.fm) */}
        <NowPlaying />
      </section>
    </Layout>
  );
}
