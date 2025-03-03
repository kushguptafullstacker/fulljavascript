// const promiseone=new Promise(function(resolve , reject){
//     setTimeout(function(){
        
       
//         resolve(console.log("kush gupta satrt enrolling"))
//     },1000)
// })
// promiseone.then(function(){
//   console.log("kush gupta completed");
    
// })

// const promisetwo=new Promise((resolve , reject)=>{
//     setTimeout(()=>{
       
//         resolve( console.log("enrolled successfully"))
//     },1000)
    
// })
// promisetwo.then(()=>{
//     console.log("batch id mailed you");
// })

// const pronisefour= new Promise(function(resolve , reject){
//     setTimeout(() => {
//         resolve({username:" your name enroll successfully kush gupta",
//             age:"12",
//         })
//     }, 1000);
// })
// pronisefour.then(function(user){
//    console.log(user.username);
// })

 const promisefive=new Promise(function (resolve , reject){
     setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username :"hii on tuesday be prepare "})

        }else{
            reject("hii you have not enrolled successfully because dice team is not working properly")
        }
     },1000)
})


 

const promiseasync=async function (){
    try{
        const response=await promisefive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
promiseasync()

const apicall= async function(){
    const response= await fetch ('https://api.github.com/users/kushguptafullstacker')

    const doawit= await response.json()
    console.log(doawit);
    console.log(doawit.avatar_url);
}
apicall()