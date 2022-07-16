import sub from '../src'

test('The calculation result should be 996.', () => {
    expect(sub(1024, 28)).toBe(996)
})
