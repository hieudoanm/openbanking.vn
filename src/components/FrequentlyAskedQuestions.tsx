import { FC } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const faqs = [
	{
		question: 'What is Open Banking API?',
		answer:
			'Open Banking API enables third-party developers to access financial information in a secure and standardized way with user consent.',
	},
	{
		question: 'Is Open Banking available in Vietnam?',
		answer: 'Yes, Vietnam is adopting Open Banking standards to modernize its financial ecosystem.',
	},
	{
		question: 'Who can use this API?',
		answer: 'Licensed banks, fintech startups, and authorized third parties can integrate and use the API.',
	},
];

export const FrequentlyAskedQuestions: FC = () => {
	return (
		<section id="faqs" className="mx-auto max-w-4xl bg-white px-4 py-16">
			<h3 className="mb-12 text-center text-3xl font-semibold text-green-700">Frequently Asked Questions</h3>
			<div className="space-y-8">
				{faqs.map((faq, index) => (
					<div key={index} className="border-b pb-4">
						<div className="flex items-start gap-3">
							<FaQuestionCircle className="mt-1" />
							<div>
								<h4 className="mb-1 text-lg font-semibold">{faq.question}</h4>
								<p className="">{faq.answer}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
