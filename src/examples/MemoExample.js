import React, { memo } from 'react';
import expensiveCalculation from './expensiveCalculation';

const MemoExample = memo(({ propA, propB }) => {
	const expensiveValue = expensiveCalculation(propA, propB);

	return (
		<div>Memo'd: {expensiveValue}</div>
  );
});

export default MemoExample;