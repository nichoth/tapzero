import { test } from '../../../index.js'

test("Call .plan, don't execute enough tests", t => {
    t.plan(3)
    t.ok('test 1')
    t.ok('test 2')
})
