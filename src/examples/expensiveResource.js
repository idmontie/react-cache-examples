import asyncExpensiveCalculation from './asyncExpensiveCalculation';

export default function expensiveResource() {
	let suspenders = {};

	return {
		get(propA, propB) {
			const key = `${JSON.stringify(propA)}${JSON.stringify(propB)}`;
			
			if (!suspenders[key]) {
				suspenders[key] = {
					status: 'loading',
					result: undefined,
					promise: asyncExpensiveCalculation(propA, propB)
						.then(data => {
								suspenders[key].status = 'success';
								suspenders[key].result = data;
						}).catch(error => {
								suspenders[key].status = 'error';
								suspenders[key].result = error;
						}),
				};
			}

			switch (suspenders[key].status) {
				case 'success':
					return suspenders[key].result;
				case 'error':
					throw suspenders[key].result;
				case 'loading':
				default:
					throw suspenders[key].promise;
			}
		},
	};
};