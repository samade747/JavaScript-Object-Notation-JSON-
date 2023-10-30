// Api 
// json format, javascript object notation 
// loader chalne ke badh data agye toh reslove chale ga after loading
// loader chalne ke badh data na aye toh rejet chale ga

// callback function
// function ke andar parameter ki surat mai 1 aur function pass hojata hai 

// arrow function  
//                   (parameter)// (reslove or reject) (res, rej)
let pro = new Promise((res, rej) => {
    let kilwao = 'zinger kilaooo'
    if(kilwao == 'zinger kilaooo'){
        res('han bahi theek hai')
    } else {
        rej('nikal bhai')
    }
})
// promise ka respone ata hai 2 surato mai
// .done if fulfiled chalte hain
// .catch if rejected chalte hain


// pro ka data //. then is a call back function //(parameter)
pro.then((data) => {
    console.log(data)
// catch is a call back function
// is promise not fullfiled error show
}).catch((err) => {
    console.log(err)
})