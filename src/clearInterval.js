

const timeOut = 1000
const checking = () => console.log('Checking')

setInterval(checking, timeOut)

setTimeout(() => clearInterval(Interval), 5000)