import { FC } from 'react';

export const HowItWorks: FC = () => {
	return (
		<section className="bg-white px-4 py-16 text-center">
			<h3 className="mb-10 text-3xl font-semibold text-green-600">How It Works</h3>
			<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
				<div>
					<h4 className="mb-2 text-xl font-bold text-green-600">1. Register</h4>
					<p>Create a developer account and access the dashboard.</p>
				</div>
				<div>
					<h4 className="mb-2 text-xl font-bold text-green-600">2. Connect</h4>
					<p>Integrate with our secure APIs using your credentials.</p>
				</div>
				<div>
					<h4 className="mb-2 text-xl font-bold text-green-600">3. Launch</h4>
					<p>Deploy innovative fintech solutions for your users.</p>
				</div>
			</div>
		</section>
	);
};
