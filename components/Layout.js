import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title = 'World Of Krishna' }) {
  return (
    <div className="min-h-screen px-6 md:px-12 max-w-4xl mx-auto flex flex-col justify-between">
      <Head>
        <title>{title}</title>
        <meta name="description" content="AI Product Manager building scalable solutions" />

        {/* proper favicon link(s) */}
        <link rel="icon" href="/krishnafavicon.jpg" type="image/jpeg" />
        {/* recommended: create PNG/ICO versions and add them for better support */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
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
