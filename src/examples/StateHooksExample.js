import React, { useState, useEffect } from 'react';
import expensiveCalculation from './expensiveCalculation';

const StateHooksExample = ({ propA, propB }) => {
	const [expensiveValue, setExpensiveValue] = useState(0);

	useEffect(() => {
		setExpensiveValue(expensiveCalculation(propA, propB));
	}, [propA, propB]);

	return (
		<div>State: {expensiveValue}</div>
  );
};

export default StateHooksExample;
