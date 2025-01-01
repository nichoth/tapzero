import { test } from '../../../index.js'

test('Set a larger timeout', t => {
    setTimeout(() => {
        t.ok(true)
    }, 4000)  // default timeout is 3 seconds

    t.ok(true)
    t.ok(true)

    // set the timeout here
    return t.plan(3, 6000)
})
