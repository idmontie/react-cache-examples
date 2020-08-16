import React, { useEffect, useState, Suspense } from 'react';
import MemoExample from './examples/MemoExample';
import StateHooksExample from './examples/StateHooksExample';
import RefHooksExample from './examples/RefHooksExample';
import SuspenseExample from './examples/SuspenseExample';
import expensiveResource from './examples/expensiveResource';

const a = 40000;
const b = 12345;
const resource = expensiveResource();

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((v) => v + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [setIndex]);

  return (
    <div>
      <StateHooksExample propA={a} propB={b} index={index} />
      <RefHooksExample propA={a} propB={b} index={index} />
      {/* adding the index will cause memo to constantly re-run the expensive calculation */}
      <MemoExample propA={a} propB={b} />
      <Suspense fallback={<div>Loading...</div>}>
          <SuspenseExample resource={resource} propA={a} propB={b} />
      </Suspense>
    </div>
  );
}

export default App;
