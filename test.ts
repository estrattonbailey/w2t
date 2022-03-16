import { test } from 'uvu'
import * as assert from 'uvu/assert'

import wait from './index';

test('returns array', async t => {
  const res = await wait(0, ['foo']);
  assert.ok(Array.isArray(res))
})

test('returns values in order', async t => {
  const res = await wait(0, [ 'foo', 'bar' ]);
  assert.equal(res[0], 'foo')
  assert.equal(res[1], 'bar')
})

test('resolves promises', async t => {
  const res = await wait(0, [
    Promise.resolve('foo')
  ]);
  assert.equal(res[0], 'foo')
})

test('types resolve', async t => {
  const [str, num] = await wait<[Promise<string>, Promise<number>]>(0, [
    Promise.resolve('foo'),
    Promise.resolve(1),
  ]);
  assert.equal(str, 'foo')
  assert.equal(num, 1)
})

test.run()
