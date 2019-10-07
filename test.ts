import test from 'ava';
import wait from './index';

test('returns array', async t => {
  const res = await wait(0, 'foo');
  console.log(res)
  t.truthy(Array.isArray(res))
})

test('returns values in order', async t => {
  const res = await wait(0, [ 'foo', 'bar' ]);
  t.is(res[0], 'foo')
  t.is(res[1], 'bar')
})

test('resolves promises', async t => {
  const res = await wait(0, [
    Promise.resolve('foo')
  ]);
  t.is(res[0], 'foo')
})
