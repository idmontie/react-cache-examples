import React from 'react';

const SuspenseExample = ({ resource, propA, propB }) => {
	const asyncExpensiveValue = resource.get(propA, propB);

	return (
		<div>Suspense: {asyncExpensiveValue}</div>
  );
};

export default SuspenseExample;