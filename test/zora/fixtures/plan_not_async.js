// @ts-nocheck
import { test } from '../../../index.js'

const wait = time => new Promise(resolve => {
    setTimeout(() => resolve(), time);
});

test("Use .plan, but don't return a promise", t => {
    t.plan(3)
    t.ok(true, 'test one')

    setTimeout(() => {
        t.ok(true, 'test two')
    }, 500)

    setTimeout(() => {
        t.ok(true, 'test three')
    }, 600)
});
