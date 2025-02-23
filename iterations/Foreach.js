////// for each loop is array specific loop

let arr=[1,2,3,4,5,6]
arr.forEach((val,index , arr)=>{
    if(val==4){
        console.log("kush gupat" , );
    }
     console.log(val , index , arr);
})

const myobj=[{
    Name:"kush",
    Age:19,
},
{
    Name:"khushi",
    Age:19,
}]
myobj.forEach((items)=>{
    console.log(items.Name);
})