import {mocks} from "./mock";
import camalize from "camelize"
 

export const ResturantService = (location = "43.653225,-79.383186") =>{

        return (
            new Promise ((resolve , reject ) =>{
                const mock = mocks[location]
                if(!mock){
                    reject["not found"]
                }
                resolve[mock]
            })
        )
 }
 export const ResturantDataAdd = ({result = []}) => {

    const AddedData = result.map((resturant)=>{
        return{
            ...resturant,
            isOpen:resturant.opening_hours && restaurant.opening_hours.open_now,
            isClosed: resturant.business_status === "CLOSED_TEMPORARILY"

        }
    })

    return camalize(AddedData)

 }

 ResturantService () 
 .then(ResturantDataAdd)
 .then((transformedData)=>{
     console.log(transformedData)
 }).catch((err)=>{
    console.log(err)
});
