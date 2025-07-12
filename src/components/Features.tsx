import { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const features: string[] = [
	'Standardized and secure API protocols',
	'Real-time access to financial data',
	'Improved customer experience',
	'Supports innovation in fintech sector',
];

export const Features: FC = () => {
	return (
		<section id="features" className="px-4 py-16 text-center">
			<h3 className="mb-10 text-3xl font-semibold text-green-700">Key Features</h3>
			<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
				{features.map((feature, index) => (
					<div key={index} className="flex items-center justify-center gap-3">
						<FaCheckCircle className="text-xl text-green-600" />
						<span className="text-lg">{feature}</span>
					</div>
				))}
			</div>
		</section>
	);
};
