import { test } from '../../../index.js'

test('Return .plan, execute too many tests', t => {
    t.ok('test 1')
    t.ok('test 2')
    t.ok('test 3')
    t.ok('test 2')
    t.ok('test 5')

    return t.plan(3)
})
