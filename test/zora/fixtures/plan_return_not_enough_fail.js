import { test } from '../../../index.js'

test("Return .plan, don't execute enough tests", t => {
    t.ok('test 1')
    t.ok('test 2')

    return t.plan(3)
})
