import Image from 'next/image';
import { Explora, Inter } from '@next/font/google';
import styles from '../styles/index';
import { Navbar, InsightCard, Footer } from '../components';
import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Feedback,
} from '../sections';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <InsightCard />
      <Feedback />
      <Footer />
    </main>
  );
}
