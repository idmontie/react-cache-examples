import React, { useRef } from 'react';
import expensiveCalculation from './expensiveCalculation';

const RefHooksExample = ({ propA, propB }) => {
	const expensiveRef = useRef(false);

	if (expensiveRef.current === false) {
		expensiveRef.current = expensiveCalculation(propA, propB);
	}

	return (
		<div>Ref: {expensiveRef.current}</div>
  );
};

export default RefHooksExample;
