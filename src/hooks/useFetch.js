import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export const useFetch = (name, type) => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        getCharacter(name, type);
      }, [name, type]);

    const getCharacter = async (name, type) => {
        const URL_API = 'https://gateway.marvel.com:443/v1/public/'
        const API_KEY = 'ts=1&apikey=caef99f540bdb86a37397ad5ff6c0c7a&hash=2aaf62f95573c4b8419e3c56b1b676c8';

        setLoading(true)

        try {

            let response;

            if (name !== ""){
                switch (type){
                    case 'characters':
                        response = await fetch(`${URL_API}characters?nameStartsWith=${name}&${API_KEY}`)
                        break
                    case 'comics':
                        response = await fetch(`${URL_API}comics?titleStartsWith=${name}&${API_KEY}`) 
                        break
                    case 'series':
                        response = await fetch(`${URL_API}series?titleStartsWith=${name}&${API_KEY}`)
                        break
                    case 'creators':
                        response = await fetch(`${URL_API}creators?nameStartsWith=${name}&${API_KEY}`) 
                        break
                    case 'events':
                        response = await fetch(`${URL_API}events?nameStartsWith=${name}&${API_KEY}`) 
                        break
                    default : 
                        response = null
                        break
                }
            } else {
                switch (type){
                    case 'characters':
                        response = await fetch(`${URL_API}characters?${API_KEY}`)
                        break
                    case 'comics':
                        response = await fetch(`${URL_API}comics?${API_KEY}`) 
                        break
                    case 'series':
                        response = await fetch(`${URL_API}series?${API_KEY}`)
                        break
                    case 'creators':
                        response = await fetch(`${URL_API}creators?${API_KEY}`) 
                        break
                    case 'events':
                        response = await fetch(`${URL_API}events?${API_KEY}`) 
                        break
                    default : 
                        response = null
                        break
                }

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

