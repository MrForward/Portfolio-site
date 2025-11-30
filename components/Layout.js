import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title = 'Minimal Portfolio' }) {
  return (
    <div className="min-h-screen px-6 md:px-12 max-w-4xl mx-auto flex flex-col justify-between">
      <Head>
        <title>{title}</title>
        <meta name="description" content="A minimalist portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
