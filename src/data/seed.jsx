import {data} from "./recipe"

export default async function SeedRecipes(){
    await fetch("https://restapi.fr/api/cookRecipes", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
}