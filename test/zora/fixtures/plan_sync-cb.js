import { test } from '../../../index.js'

/**
 * We are using a synchronous function with setTimeout
 */

test('.plan with a synchronous function + callbacks', t => {
    t.plan(3)

    setTimeout(() => {
        t.ok(true, 'test')
        t.ok(true, 'test')
        t.ok(true, 'test')
    }, 1000)
})
