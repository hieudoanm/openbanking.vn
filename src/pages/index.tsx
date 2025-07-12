import { FrequentlyAskedQuestions } from '@openbanking.vn/components/FrequentlyAskedQuestions';
import { Features } from '@openbanking.vn/components/Features';
import { Hero } from '@openbanking.vn/components/Hero';
import { LogosCloud } from '@openbanking.vn/components/LogosCloud';
import type { NextPage } from 'next';
import { Footer } from '@openbanking.vn/components/Footer';
import { Navbar } from '@openbanking.vn/components/Navbar';

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<LogosCloud />
			<FrequentlyAskedQuestions />
			<Footer />
		</>
	);
};

export default HomePage;
