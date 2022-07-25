const milliSecond = require("./globals");

function time(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}
async function print(){
    await time(1000);
    console.log("HELLO WORLD!!!");
    // setInterval(()=>{
    //     print();
    // },2000);
}
async function call_print(){
    setInterval(()=>{
        print();
    },milliSecond.ms1);
}

module.exports = {call_print,print,time};