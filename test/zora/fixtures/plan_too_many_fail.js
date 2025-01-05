import { test } from '../../../index.js'

test('Call .plan, execute too many tests', t => {
    t.plan(3)

    t.ok('test 1')
    t.ok('test 2')
    t.ok('test 3')
    t.ok('test 2')
    t.ok('test 5')
})
