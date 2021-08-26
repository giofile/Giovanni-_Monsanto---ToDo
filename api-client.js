const url = `http://localhost:3000/`



//GET Method


const getFormat = async() => {
    try {
        const response = await fetch(url, {method:"GET"}) 
        return await response.json();   
    }
    catch(error){          
        console.log(error);
     }
}


// POST Method
const postFormat = async( data) =>{
    try{   
        const response = await fetch (url, {
        method: ' POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': ' application/json'
        }
    })
    const json = response.json()
    return json
}
    catch (error) {console.log(error)}
}


//Delete Method

const deleteFormat = async () =>{
    try{
        const result = await fetch (url, {method: "DELETE"})
    }
    catch (error){
        console.log(error);
    }