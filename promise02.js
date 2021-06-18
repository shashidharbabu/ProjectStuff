const video1 = new Promise((resolve, reject) => {

    resolve('Video 1 uploaded');
    reject('Unsuccessful');
})
const video2 = new Promise((resolve, reject) => {
    resolve('Video 2 uploaded');
    reject('Unsuccessful');
})
const Video3 = new Promise((resolve, reject) => {
    resolve('Video 3 Uploaded');
    reject('Unsuccessful');
})
Promise.all([
    video1,
    video2,
    Video3
]).then((messages) => {
    console.log(messages)
})