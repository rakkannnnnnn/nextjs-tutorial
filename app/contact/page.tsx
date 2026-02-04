import ButtonComponent from "./button"


export default async function contact(){
    console.log("hey is this in the server or client?")

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    console.log(posts)
    return ( 
        <div> 
            <ButtonComponent />     
        </div> 
    );

}