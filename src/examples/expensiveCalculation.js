export default function expensiveCalculation(a, b) {
    console.log('[expensiveCalculation] calculation was called');
    console.trace();

    let acc = 0;

    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            if (i % j === 0) {
                acc += 1;
            }
        }
    }

    return acc;
}