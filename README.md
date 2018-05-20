# w2t
Tiny asynchronous action timer. **130 bytes gzipped.**

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

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
