
// another example to run 
function clonefunction(cloneArr){
    return new Promise((resolve, reject) => {
        resolve([...cloneArr]);
    })
};


async function resolvePromise(){

    let clone = await clonefunction([1,1,1]); 

    console.log(clone)
}

resolvePromise();