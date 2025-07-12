import { FC } from 'react';

const pricing = [
	{
		name: 'Gói Cơ Bản',
		price: 'Miễn phí',
		features: ['Truy cập API cơ bản', 'Tối đa 1000 yêu cầu mỗi tháng'],
		button: 'Bắt đầu miễn phí',
	},
	{
		name: 'Gói Chuyên Nghiệp',
		price: '$49/tháng',
		features: ['Giới hạn cao hơn', 'Hỗ trợ ưu tiên'],
		button: 'Đăng ký Pro',
	},
	{
		name: 'Gói Doanh Nghiệp',
		price: 'Theo yêu cầu',
		features: ['Không giới hạn sử dụng', 'Hỗ trợ chuyên biệt'],
		button: 'Liên hệ tư vấn',
	},
];

export const Pricing: FC = () => {
	return (
		<section className="bg-white px-4 py-16 text-center">
			<h3 className="mb-10 text-3xl font-semibold text-blue-600">Pricing</h3>
			<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
				{pricing.map((tier, index) => (
					<div key={index} className="rounded-lg border p-6">
						<h4 className="mb-2 text-xl font-bold">{tier.name}</h4>
						<p className="mb-4 font-semibold text-blue-600">{tier.price}</p>
						{tier.features.map((feature, i) => (
							<p key={i} className="mb-2">
								{feature}
							</p>
						))}
						<button className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
							{tier.button}
						</button>
					</div>
				))}
			</div>
		</section>
	);
};
