export default function wait (delay, fns = []) {
  return Promise
    .all(
      fns.concat(
        new Promise(r => setTimeout(r, delay))
      )
    )
    .then(arr => arr.slice(0, arr.length - 1))
}
