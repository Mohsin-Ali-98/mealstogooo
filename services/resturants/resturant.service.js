import {mocks} from "./mock";
 


const ResturantService = (location = "43.653225,-79.383186") =>{
    return console.log(mocks)
}

export default ResturantService();

//     const ResturantService = (location = "43.653225,-79.383186") =>{

//         return (
//             new Promise ((resolve , reject ) =>{
//                 const mock = mocks[location]
//                 if(!mock){
//                     reject["not found"]
//                 }
//                 resolve[mock]
//             })
//         )
//  }


//  export default ResturantService().then((result)=>{
//      console.log(result)
//  }).catch((err)=>{
//      console.log(err)
//  });