function wait (fns, delay) {
  return Promise
    .all(
      fns.concat(
        new Promise(r => setTimeout(r, delay))
      )
    )
    .then(arr => arr.slice(0, arr.length - 1))
}
