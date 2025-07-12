import { FrequentlyAskedQuestions } from '@openbanking.vn/components/FrequentlyAskedQuestions';
import { Features } from '@openbanking.vn/components/Features';
import { Hero } from '@openbanking.vn/components/Hero';
import { LogosCloud } from '@openbanking.vn/components/LogosCloud';
import type { NextPage } from 'next';
import { Footer } from '@openbanking.vn/components/Footer';
import { Navbar } from '@openbanking.vn/components/Navbar';
import { Pricing } from '@openbanking.vn/components/Pricing';
import { CallToAction } from '@openbanking.vn/components/CallToAction';
import { HowItWorks } from '@openbanking.vn/components/HowItWorks';

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<LogosCloud />
			<HowItWorks />
			<Pricing />
			<CallToAction />
			<FrequentlyAskedQuestions />
			<Footer />
		</>
	);
};

export default HomePage;
