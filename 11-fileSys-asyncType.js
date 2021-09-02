const {readFile, writeFile} = require('fs')

//readfile is async
//third param is a callback func
readFile('./10-test/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(result)
});