import { FC } from 'react';

const logos = ['Vietcombank', 'BIDV', 'Techcombank', 'VPBank', 'TPBank', 'MB Bank', 'ACB', 'Sacombank'];

export const LogosCloud: FC = () => {
	return (
		<section className="py-16">
			<div className="mb-6 text-center text-3xl font-semibold text-green-700">Connected with</div>
			<div className="flex flex-wrap justify-center gap-8 text-2xl">
				{logos.map((logo, index) => (
					<span key={index}>{logo}</span>
				))}
			</div>
		</section>
	);
};
