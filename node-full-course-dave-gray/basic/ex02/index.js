//Learning the FS and Path Modules, how to create and update a .txt using this native module.
//Learning about Stream, using chunks to create content.
//mkdir, rmdir, existsSync
//how to use fs.unlink(), writeFile(), appendFile(), rename()
//how to handling errors using try and catch


const fsPromises = require(`fs`).promises; //COMMON JS
const path = require('path')
//import fs from 'fs'    //ESM MODULES


console.log(__dirname)
const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', "starter.txt"), "utf8")
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', "starter.txt"))

        await fsPromises.writeFile(path.join(__dirname, 'files', "promiseWrite.txt"), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', "promiseWrite.txt"), "Nice to meet you!")
        await fsPromises.rename(path.join(__dirname, 'files', "promiseWrite.txt"), path.join(__dirname, 'files', "promiseComplete.txt"))

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', "promiseComplete.txt"), "utf8")
        
        console.log(newData);
    }
    catch (err) {
        console.error(err)
    }
}

fileOps();


 /*
    fs.readFile(path.join(__dirname, 'files', "starter.txt"), "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
    })


    console.log("Hello....")

    fs.writeFile(path.join(__dirname, 'files', "reply.txt"), "Nice to mmet youu.", (err) => {
        if (err) throw err;
        console.log("Write Complete!");

        fs.appendFile(path.join(__dirname, 'files', "reply.txt"), "\n\nYes it is.", (err) => {
            if (err) throw err;
            console.log("Append Complete!");

            fs.rename(path.join(__dirname, 'files', "reply.txt"), path.join(__dirname, 'files', "newReply.txt"), (err) => {
                if (err) throw err;
                console.log("Rename Complete!");
            })
        })

    })

*/


process.on("uncaughtException", err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1);
})