////// for each loop is array specific loop

// let arr=[1,2,3,4,5,6]
// arr.forEach((val,index , arr)=>{
//     if(val==4){
//         console.log("kush gupat" , );
//     }
//      console.log(val , index , arr);
// })

// const myobj=[{
//     Name:"kush",
//     Age:19,
// },
// {
//     Name:"khushi",
//     Age:19,
// // }]
// // myobj.forEach((items)=>{
// //     console.log(items.Name);
// // })

// let mynum = [1, 2, 3, 4, 5, 6, 7]

// // const meranumber = mynum.forEach((num) => {
// //     console.log(num);
// // })

// // mynum.map((num) => {
// //     console.log(num * 10);
// // })
// const meranum = mynum.map((num) => {
//     return (num * 10);
// })
// console.log(meranum);

// // const merafilter=mynum.filter((item)=>{
// //      return (item>2);
// // })  
// // console.log(merafilter);

// const mernewarray = []

// const meraerach = mynum.forEach((each) => {
//     if (each > 2) {
//         mernewarray.push(each)
//     }
// })
// console.log(mernewarray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


let mybk = books.filter((bok) => {
    return bok.genre === "History" && bok.publish < 1999;
})
console.log(mybk);

// userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);


const chaining = [1, 2, 3, 4, 5, 6, 7, , 8, 9]
const mychain = chaining.map((ch) => ch * 10)
    .map((ce) => ce + 1)
    .filter((c) => c > 10)

console.log(mychain);


////////////// syntax of reduce 

const myr = [1, 2, 3, 34]

const myreduce = myr.reduce(function (acc, curval) {
    console.log(acc, curval);
    return acc - curval
}, 0)///// sccumulator start from the zero then value get subtract subtract value give to the accumulator

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const cart=shoppingCart.reduce((acc , curvall)=>{
    console.log(acc , curvall);
    return acc+curvall.price
},0) 
console.log(cart);