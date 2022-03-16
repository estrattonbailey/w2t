/**
 * @see https://levelup.gitconnected.com/crazy-powerful-typescript-tuple-types-9b121e0a690c
 */
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type UnwrapPromises<T extends [...any[]]> =
    T extends [infer Head, ...infer Tail]
        ? [UnwrapPromise<Head>, ...UnwrapPromises<Tail>]
        : [];
type RemapPromises<T extends [...any[]]> = Promise<UnwrapPromises<T>>;

export default function wait<T extends [...any[]]>(
  delay: number,
  fns: [...T]
): RemapPromises<T> {
  return Promise
    .all(
      [].concat(fns).concat(
        new Promise(r => setTimeout(r, delay))
      )
    )
    .then(arr => arr.slice(0, arr.length - 1)) as RemapPromises<T>
}
