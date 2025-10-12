import { FC } from 'react';

export const Hero: FC = () => {
	return (
		<header className="px-4 py-20 text-center">
			<h2 className="mb-6 text-4xl font-bold text-blue-600 md:text-5xl">
				Khám phá tiềm năng đổi mới tài chính tại Việt Nam
			</h2>
			<p className="mx-auto mb-8 max-w-xl text-lg text-blue-700">
				Tăng cường ứng dụng của bạn với khả năng truy cập dịch vụ ngân hàng an
				toàn và thời gian thực thông qua Open Banking API tại Việt Nam.
			</p>
			<button className="rounded-full bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700">
				Khám phá API
			</button>
		</header>
	);
};
