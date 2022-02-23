 const url=`http://127.0.0.1:5500/animales.json`

 let animales=(()=>{  
    const getData=async()=>{
        try {
            const res= await fetch(url);
            const data= await res.json();
            console.log(data)            
            return data
            
        } catch (error) {            
            console.error(error="Ha ocurrido un error en la peticion")

        }finally{
            console.log("La petición ha finalizado")
        }
        
    };
    
    return {getData};       
  
    })();



export default animales