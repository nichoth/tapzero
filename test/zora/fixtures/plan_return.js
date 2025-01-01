import { test } from '../../../index.js'

/**
 * We are using a synchronous function with setTimeout
 */

test('Return .plan, and wait for the planned number', t => {
    setTimeout(() => {
        t.ok(true, 'test')
        t.ok(true, 'test')
        t.ok(true, 'test')
    }, 1000)

    return t.plan(3)
})
