import { NextPage } from 'next';
import Link from 'next/link';

const NotFoundPage: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
			<h1 className="mb-4 text-6xl font-bold text-green-600">404</h1>
			<h2 className="mb-2 text-2xl font-semibold">Không tìm thấy trang</h2>
			<p className="mb-6 text-green-700">
				Xin lỗi, trang bạn đang tìm không tồn tại hoặc đã bị di chuyển.
			</p>
			<Link
				href="/"
				className="rounded-full bg-green-600 px-6 py-3 text-lg text-white transition hover:bg-green-700">
				Quay lại trang chủ
			</Link>
		</div>
	);
};

export default NotFoundPage;
