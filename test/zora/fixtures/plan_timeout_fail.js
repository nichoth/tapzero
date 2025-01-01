import { test } from '../../../index.js'

test('Timeout before the planned number', t => {
    setTimeout(() => {
        t.ok(true)
    }, 4000)  // default timeout is 3 seconds

    t.ok(true)
    t.ok(true)

    return t.plan(3)
})

