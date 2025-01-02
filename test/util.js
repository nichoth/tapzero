'use strict'

// @ts-check

// const path = require('path')
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const NUMBER_LINE = /^1\.\.\d+$/
const FAIL_LINE = /^# fail[ ]{2}\d+$/

/**
 * @param {(a: string) => void} fn
 * @returns {(line: string) => void}
 */
export function collect (fn) {
  /** @type {string[]} */
  const total = []
  let almostFinished = false

  return report

  /**
   * @param {string} line
   * @returns {void}
   */
  function report (line) {
    total.push(line)
    if (line !== '' && NUMBER_LINE.test(line)) {
      almostFinished = true
    } else if (almostFinished && (
      line === '# ok' ||
            FAIL_LINE.test(line)
    )) {
      fn(strip(total.join('\n')))
    }
  }
}

/**
 * @param {string} line
 * @returns {string}
 */
export function strip (line) {
  const withoutTestDir = line.replace(
    new RegExp(__dirname, 'g'), '$TEST'
  )
  const withoutPackageDir = withoutTestDir.replace(
    new RegExp(path.dirname(__dirname), 'g'), '$TAPE'
  )
  const withoutPathSep = withoutPackageDir.replace(
    new RegExp('\\' + path.sep, 'g'), '/'
  )
  const withoutLineNumbers = withoutPathSep.replace(
    /:\d+:\d+/g, ':$LINE:$COL'
  ).replace(
    /:\d+/g, ':$LINE'
  )
  const withoutNestedLineNumbers = withoutLineNumbers.replace(
    /, <anonymous>:\$LINE:\$COL\)$/, ')'
  )

  const withoutNodeVersion = withoutNestedLineNumbers.replace(
    // new RegExp('Node.js*'),
    /^Node.js.*$/gm,
    ''
  )

  // const lines = withoutNestedLineNumbers.split('\n')
  const lines = withoutNodeVersion.split('\n')
  const newLines = lines.filter((line) => {
    return !line.includes('internal/process/task_queues.js') &&
            !line.includes('internal/process/next_tick.js') &&
            !line.includes('internal/modules/cjs/loader.js') &&
            !line.includes('internal/bootstrap/node.js')
  })

  return newLines.join('\n')
}

/**
 * @param {TemplateStringsArray} text
 * @returns {string}
 */
export function trimPrefix (text) {
  const lines = text[0].split('\n')
  let commonPrefix = Infinity
  for (const line of lines) {
    if (line === '' || line.trim() === '') continue
    const prefix = line.search(/\S|$/)
    if (prefix < commonPrefix) {
      commonPrefix = prefix
    }
  }

  /** @type {string[]} */
  const result = []
  for (const line of lines) {
    result.push(line.slice(commonPrefix))
  }

  return result.join('\n').trim()
}
