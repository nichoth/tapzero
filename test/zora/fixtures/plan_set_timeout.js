import { test } from '../../../index.js'

test('Set a larger timeout', t => {
    setTimeout(() => {
        t.ok(true)
    }, 6000)  // default timeout is 5 seconds

    t.ok(true)
    t.ok(true)

    // set the timeout here
    return t.plan(3, 8000)
})
