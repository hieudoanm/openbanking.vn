import { FC } from 'react';

export const Footer: FC = () => {
	return (
		<footer className="border-t bg-white text-sm">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
				<p>&copy; {new Date().getFullYear()} OpenBanking. All rights reserved.</p>
				<div className="grid grid-cols-2 gap-x-6 gap-y-1 text-center md:text-left">
					<a href="/privacy" className="hover:underline">
						Privacy Policy
					</a>
					<a href="/docs" className="hover:underline">
						Documentation
					</a>
					<a href="/terms" className="hover:underline">
						Terms of Service
					</a>
					<a href="/developer" className="hover:underline">
						Developer
					</a>
				</div>
			</div>
		</footer>
	);
};
