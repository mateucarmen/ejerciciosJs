
async function runTimeOut() {
    try {
        setTimeout(function () {
            console.log("Time out!");
        }, 2000);  
    }
    catch(error){
        console.log(error);
    }
};

runTimeOut();