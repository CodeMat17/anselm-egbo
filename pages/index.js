import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import HeaderNav from '../components/HeaderNav';
import HeroPage from '../components/HeroPage';
import Services from '../components/Services';


export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Barr. Anselm Egbo | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Rye&display=swap" rel="stylesheet"></link>
      </Head>

      <HeaderNav />
      <HeroPage />
      <AboutMe />
      <Services />
      <Experience />
      <ContactMe />
      <div className="px-4 max-w-6xl mx-auto">
        <hr />
      </div>      
      <Footer />
    </div>
  )
}
