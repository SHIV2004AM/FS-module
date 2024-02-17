const fs = require('fs')
// Asynchronus way
console.log("read start");
fs.readFile(('input.txt') , function(err , data){
    if(err){
        console.log("error :" , err);
    }
    console.log("data:" , data.toString())
    console.log("read end ");
    return data ;
})

console.log("other stuffs ");

//Synchronus way to read file 

try{
    var data = fs.readFileSync('input.txt') ; 
console.log("data: " , data.toString()) ; 
console.log("other data ");
}
catch(err) {
    console.log("error : " , err);
}
console.log("read end");

//  read + open

const buf = new Buffer(1024) ; 
fs.open('input.txt' , 'r+' , function(err , fd){
    if(err) {
        console.log("error in opening file " , err);
    }
    console.log("file opened successfully")

fs.read(fd , buf , 0 , buf.length , 0 , function(er , bytes){
    if(er) {
        console.log("error in reading file :"  , er);
    }
    console.log("bytes" , bytes)
    console.log("data:" , buf.slice(0 , bytes).toString())

    // close a file 

fs.close(fd, function(err) {
    if(err) {
        console.log('error : ' , err);
    }
    console.log("file closed successfully")
})
} ) 
})


// writing a file 

fs.writeFile('input.txt' , 'writing operation successfully performed ' , function(err) {
    if (err) {
        console.log("error : " , err);
    }
    console.log("writing operation successfull");
})
console.log(fs.readFileSync('input.txt').toString());

//  append to a file 

fs.appendFile('input.txt' , '--append suucessful' , function(err) {
    if(err) {
        console.log("error" , err);
    }
    else {
        console.log("append successfully performed ");
    }
} 
)

//  deleting a file 

fs.unlink('input.txt' , function(err){
    if(err){
    console.log("error:" , err);
 }
 else{
    console.log("deletion successfull");
 }
}) ;