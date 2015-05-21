let http = require('http')
let fs = require('fs')
require('songbird')

http.createServer((req, res) => {
  console.log(__dirname + "\n");
    //BAD
    //Using callback
    fs.readdir(__dirname,function(err, files) {
      console.log(files);
    })

    console.log("test \n");

    //BETTER
    //Using promises
    fs.promise.readdir(__dirname).then(function (files) {
        console.log("using promise " + files)
    })


    fs.promise.readFile("control-flow.js").then(function (files) {
        console.log("using promise readfile " + files)
    })


    //BEST
    //Using async await
    async function ls() {
      let files = await fs.promise.readdir(__dirname);
      console.log(files);
    }
    ls().catch(function(err) {
      console.log(err.stack);
    });

}).listen(8000, '127.0.0.1');
