// function all(promises) {
//   return new Promise((resolve, reject) => {
//     let resolvedCounter = 0
//     const promiseNum = promises.length
//     const resolvedValues = new Array(promiseNum)
//     for (let i = 0; i < promiseNum; i++) {
//       Promise.resolve(promises[i]).then((value) => {
//         resolvedCounter++
//         resolvedValues[i] = value
//         if (resolvedCounter == promiseNum)
//           return resolve(resolvedValues)
//       }, (reason) => {
//         return reject(reason)
//       })
//     }
//   })
// }

// const race = (promises) => {
//   return new Promise((res, rej) => {
//     for (const iterator of promises) {
//       Promise.resolve(iterator).then(
//         (val) => {
//           res(val)
//         },
//         (err) => {
//           rej(err)
//         },
//       )
//     }
//   })
// }

// const allsettled = (promises) => {
//   let count = 0
//   const resAll = []
//   const promisesArr = [...promises]
//   return new Promise((res, rej) => {
//     for (let i = 0; i < promisesArr.length; i++) {
//       Promise.resolve(promisesArr[i]).then(
//         (val) => {
//           resAll[i] = val
//           count++
//           if (count === promisesArr.length)
//             res(resAll)
//         },
//         (err) => {
//           resAll[i] = err
//           count++
//           if (count === promisesArr.length)
//             res(resAll)
//         },
//       )
//     }
//   })
// }

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'three')
// })
// const p2 = Promise.reject(666)
// const p3 = 111

// Promise.any([p2]).then((res) => {
//   console.log(res)
// }, (err) => {
//   console.log(err)
// })
