const products =[
    {
        id: "Sd2988",
        name:"Remera malibu",
        description:"",
        stock: 10,
        price: 3000,
        image:"",
        category:"remeras"
    },
    {
        id: "Tw2908",
        name:"Jeans Cargo",
        description:"",
        stock: 8,
        price: 13000,
        image:"",
        category:"jeans"
    },
    {
        id: "Qs2978",
        name:"Buzo canguro",
        description:"",
        stock: 7,
        price: 30000,
        image:"",
        category:"buzos"
    }
]
    /*
    const promesa = new Promise((resolve, reject) => {
        if (condicion){
            resolve("Se resolvio la promesa")
        }else{
            reject("Se rechazo la promesa")
        }
    })
    */  
const getProducts = () =>{
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            resolve(products)
        }, 2000)
    })
}

export {getProducts}