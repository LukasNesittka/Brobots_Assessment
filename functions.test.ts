const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    // test('is it an array?', () => {
    //     expect(shuffleArray).toBeInstanceOf(Array)
    // })
    test('is it a function?', () => {
        expect(shuffleArray).toBeInstanceOf(Function)
    })
})