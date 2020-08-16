export default function asyncExpensiveCalculation(a, b) {
    console.log('[asyncExpensiveCalculation] calculation was called');
    console.trace();

    return new Promise(resolve => {
        let acc = 0;

        for (let i = 0; i < a; i++) {
            for (let j = 0; j < b; j++) {
                if (i % j === 0) {
                    acc += 1;
                }
            }
        }

        resolve(acc);
    });
}