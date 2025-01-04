import { test } from '../../../index.js'

test('Set a larger timeout', t => {
    // set the timeout here
    t.plan(3, 8000)

    setTimeout(() => {
        t.ok(true)
    }, 6000)  // default timeout is 5 seconds

    t.ok(true)
    t.ok(true)
})
