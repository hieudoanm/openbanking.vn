import { FC } from 'react';

export const Hero: FC = () => {
	return (
		<header className="px-4 py-20 text-center">
			<h2 className="mb-6 text-4xl font-bold md:text-5xl">Unlock Vietnam's Financial Innovation</h2>
			<p className="mx-auto mb-8 max-w-xl text-lg text-green-700">
				Empower your applications with secure, real-time access to banking services using our Open Banking API for
				Vietnam.
			</p>
			<button className="rounded-full bg-green-600 px-6 py-3 text-lg text-white hover:bg-green-700">
				Explore the API
			</button>
		</header>
	);
};
