import { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const features = [
	'Giao thức API tiêu chuẩn và bảo mật',
	'Truy cập dữ liệu tài chính theo thời gian thực',
	'Cải thiện trải nghiệm khách hàng',
	'Hỗ trợ đổi mới trong lĩnh vực fintech',
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
