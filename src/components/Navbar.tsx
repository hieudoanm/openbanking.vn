import Link from 'next/link';
import { FC } from 'react';
import { FaPlug } from 'react-icons/fa';

export const Navbar: FC = () => {
	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<h1 className="flex items-center gap-2 text-2xl font-bold text-green-600">
					<FaPlug /> OpenBankingVN
				</h1>
				<div className="space-x-6">
					<a href="#features" className="hover:text-green-600">
						Features
					</a>
					<a href="#faqs" className="hover:text-green-600">
						FAQs
					</a>
					<Link href="#" className="rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700">
						Get Started
					</Link>
				</div>
			</div>
		</nav>
	);
};
