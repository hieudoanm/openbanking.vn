import { FC } from 'react';

export const CallToAction: FC = () => {
	return (
		<section className="bg-white px-4 py-16 text-center">
			<h3 className="mb-6 text-3xl font-semibold text-green-600">Sẵn sàng kiến tạo tương lai tài chính?</h3>
			<p className="mx-auto mb-6 max-w-xl">
				Bắt đầu tích hợp OpenBankingVN ngay hôm nay để tăng tốc đổi mới sản phẩm của bạn.
			</p>
			<button className="rounded-full bg-green-600 px-6 py-3 text-lg text-white hover:bg-green-700">Bắt đầu</button>
		</section>
	);
};
