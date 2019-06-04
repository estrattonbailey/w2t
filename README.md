# w2t
Tiny asynchronous action timer. **150 bytes gzipped.**

## Install
```
npm i w2t --save
```

# Usage
Sometimes UI actions feel more human if we delay them instead of allowing them to
be completed at computer time. `w2t` allows you to specify actions and a minimum
time for them to be completed before the `Promise` is resolved.
```javascript
import wait from 'w2t'

function addToCart (items) {
  // show loading state

  wait(600, [
    addItemsToCart(items)
  ]).then(() => {
    // success, hide loading state
  })
}
```

If no actions are provided, `w2t` becomes useful as a `sleep` handler:
```javascript
async function addToCart (items) {
  addItemsToCart(items)

  await wait(600) // wait 600ms

  // do something
}
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
