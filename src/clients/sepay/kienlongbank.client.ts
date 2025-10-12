import { tryCatch } from '@openbanking.vn/utils/try-catch';

export type CountResponse = {
	status: number;
	error: string | null;
	messages: {
		success: boolean;
	};
	count_transactions: number;
};

export const countTransactions = async ({
	account_number,
	transaction_date_min,
	transaction_date_max,
	since_id,
}: {
	account_number: string;
	transaction_date_min?: string;
	transaction_date_max?: string;
	since_id?: number;
}): Promise<number | null> => {
	const urlSearchParams = new URLSearchParams();
	urlSearchParams.append('account_number', account_number);
	if (transaction_date_min)
		urlSearchParams.append('transaction_date_min', transaction_date_min);
	if (transaction_date_max)
		urlSearchParams.append('transaction_date_max', transaction_date_max);
	if (since_id) urlSearchParams.append('since_id', since_id.toString());
	const url: string = `https://my.sepay.vn/userapi/transactions/count?${urlSearchParams.toString()}`;
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${process.env.KLB_API_KEY}`,
	};
	const { data: response, error } = await tryCatch(
		fetch(url, { method: 'GET', headers }),
	);
	if (error) {
		console.error('Error fetching transaction count:', error);
		return null;
	}
	if (!response?.ok) {
		console.error('Error response from KLB API:', response);
		return null;
	}
	const { data, error: jsonError } = await tryCatch<CountResponse>(
		response.json(),
	);
	if (jsonError) {
		console.error('Error parsing JSON response:', jsonError);
		return null;
	}
	if (data.status !== 200) {
		console.error('Error in KLB API response:', data.error);
		return null;
	}
	return data.count_transactions;
};

type Transaction = {
	id: string;
	bank_brand_name: string;
	account_number: string;
	transaction_date: string;
	amount_out: string;
	amount_in: string;
	accumulated: string;
	transaction_content: string;
	reference_number: string | null;
	code: string | null;
	sub_account: string | null;
	bank_account_id: string;
};

type TransactionsResponse = {
	status: number;
	error: string | null;
	messages: {
		success: boolean;
	};
	transactions: Transaction[];
};

export const getTransactions = async ({
	account_number,
	transaction_date_min,
	transaction_date_max,
	since_id,
	limit,
	reference_number,
	amount_in,
	amount_out,
}: {
	account_number: string;
	transaction_date_min?: string;
	transaction_date_max?: string;
	since_id?: number;
	limit?: number;
	reference_number?: number;
	amount_in?: number;
	amount_out?: number;
}) => {
	const urlSearchParams = new URLSearchParams();
	urlSearchParams.append('account_number', account_number);
	if (transaction_date_min)
		urlSearchParams.append('transaction_date_min', transaction_date_min);
	if (transaction_date_max)
		urlSearchParams.append('transaction_date_max', transaction_date_max);
	if (since_id) urlSearchParams.append('since_id', since_id.toString());
	if (limit) urlSearchParams.append('limit', limit.toString());
	if (reference_number)
		urlSearchParams.append('reference_number', reference_number.toString());
	if (amount_in) urlSearchParams.append('amount_in', amount_in.toString());
	if (amount_out) urlSearchParams.append('amount_out', amount_out.toString());
	const url: string = `https://my.sepay.vn/userapi/transactions/list?${urlSearchParams.toString()}`;
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${process.env.KLB_API_KEY}`,
	};
	const { data: response, error } = await tryCatch(
		fetch(url, { method: 'GET', headers }),
	);
	if (error) {
		console.error('Error fetching transactions:', error);
		return null;
	}
	if (!response?.ok) {
		console.error('Error response from KLB API:', response);
		return null;
	}
	const { data, error: jsonError } = await tryCatch<TransactionsResponse>(
		response.json(),
	);
	if (jsonError) {
		console.error('Error parsing JSON response:', jsonError);
		return null;
	}
	if (data.status !== 200) {
		console.error('Error in KLB API response:', data.error);
		return null;
	}
	return data.transactions;
};

export type TransactionResponse = {
	status: number;
	error: string | null;
	messages: {
		success: boolean;
	};
	transaction: Transaction;
};

export const getTransaction = async ({
	transaction_id,
}: {
	transaction_id: number;
}): Promise<Transaction | null> => {
	const url: string = `https://my.sepay.vn/userapi/transactions/details/${transaction_id}`;
	const headers = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${process.env.KLB_API_KEY}`,
	};
	const { data: response, error } = await tryCatch(
		fetch(url, { method: 'GET', headers }),
	);
	if (error) {
		console.error('Error fetching transaction details:', error);
		return null;
	}
	if (!response?.ok) {
		console.error('Error response from KLB API:', response);
		return null;
	}
	const { data, error: jsonError } = await tryCatch<TransactionResponse>(
		response.json(),
	);
	if (jsonError) {
		console.error('Error parsing JSON response:', jsonError);
		return null;
	}
	if (data.status !== 200) {
		console.error('Error in KLB API response:', data.error);
		return null;
	}
	return data.transaction;
};
