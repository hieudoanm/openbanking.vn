import { FC } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const faqs = [
	{
		question: 'Open Banking API là gì?',
		answer:
			'Open Banking API cho phép bên thứ ba truy cập thông tin tài chính một cách an toàn và chuẩn hóa với sự đồng ý của người dùng.',
	},
	{
		question: 'Open Banking đã có mặt tại Việt Nam chưa?',
		answer: 'Đã có. Việt Nam đang áp dụng tiêu chuẩn Open Banking để hiện đại hóa hệ sinh thái tài chính.',
	},
	{
		question: 'Ai có thể sử dụng API này?',
		answer:
			'Các ngân hàng được cấp phép, công ty fintech và các bên thứ ba được ủy quyền đều có thể tích hợp và sử dụng API.',
	},
];

export const FrequentlyAskedQuestions: FC = () => {
	return (
		<section id="faqs" className="mx-auto max-w-4xl bg-white px-4 py-16">
			<h3 className="mb-12 text-center text-3xl font-semibold text-blue-700">Câu hỏi thường gặp</h3>
			<div className="space-y-8">
				{faqs.map((faq, index) => (
					<div key={index} className="border-b pb-4">
						<div className="flex items-start gap-3">
							<FaQuestionCircle className="mt-1 text-blue-600" />
							<div>
								<h4 className="mb-1 text-lg font-semibold">{faq.question}</h4>
								<p>{faq.answer}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
