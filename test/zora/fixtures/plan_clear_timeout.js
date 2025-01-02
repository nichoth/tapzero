import { test } from '../../../index.js'

/**
 * We are using a synchronous function with setTimeout
 */

let start
test('Check that the timeout is cleared when all assertions have finished', t => {
    start = Number(new Date())
    setTimeout(() => {
        t.ok(true, 'test')
    }, 100)

    setTimeout(() => {
        t.ok(true, 'test')
        t.ok(true, 'test')
    }, 200)


    return t.plan(3)
})

test('next test', t => {
    const current = Number(new Date())
    const diff = current - start
    t.ok(diff >= 200, 'should wait for the 200 ms')
    t.ok(diff < 1000, 'should resolve before the full 5 second timeout')
})
