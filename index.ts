export default function wait (
  delay: number,
  fns: any = []
) {
  return Promise
    .all(
      [].concat(fns).concat(
        new Promise(r => setTimeout(r, delay))
      )
    )
    .then(arr => arr.slice(0, arr.length - 1))
}
