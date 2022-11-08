import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export const useFetch = (name) => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getCharacter(name);
      }, [name]);

    const getCharacter = async (name) => {
        setLoading(true)
        try {

            let response;
            
            if(name !== ""){
                response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=caef99f540bdb86a37397ad5ff6c0c7a&hash=2aaf62f95573c4b8419e3c56b1b676c8`)   
            } else {
                response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=caef99f540bdb86a37397ad5ff6c0c7a&hash=2aaf62f95573c4b8419e3c56b1b676c8`)
            }

            const data = await response.json();

            if ([...data.data.results].length === 0) {
                console.log(response);
                return Swal.fire({
                    title: "Error!",
                    text: `El personaje "${name}" no existe`,
                    icon: "error",
                });
            }

            console.log([...data.data.results].length)
            setCharacters([...data.data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error al buscar del Servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    }

    return [characters, loading]
      

};

