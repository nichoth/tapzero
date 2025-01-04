import { test } from '../../../index.js'

const start = Number(new Date())

test('Return .plan from an async function', async t => {
    t.plan(3, 2000)

    t.ok(true)
    await sleep(100)
    t.ok(true)
    await sleep(100)
    t.ok(true)
})

test('check the times', t => {
    const finish = Number(new Date())
    const diff = finish - start
    console.log('**finish**', finish - start)
    t.ok(diff >= 200, 'should wait for a little bit')
    t.ok(diff < 1000, 'should resolve the test before it times out')
})

/**
 * Wait for a number of miliseconds.
 * @param {number} ms 
 * @returns {Promise<void>}
 */
async function sleep (ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
