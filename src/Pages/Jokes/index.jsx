import { useState } from 'react'
import './styles.css'

export default function Jokes()
{
    const mockCharcaters = {
        "categories": [],
        "created_at": "2020-01-05 13:42:25.905626",
        "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
        "id": "i_70kfSbSD-jCGHZXIarJA",
        "updated_at": "2020-01-05 13:42:25.905626",
        "url": "https://api.chucknorris.io/jokes/i_70kfSbSD-jCGHZXIarJA",
        "value": "Never smile at a crocodile. Unless you know that Chuck Norris is about to rip it in half like a phone book."
    }

    const [conteudo,setConteudo] = useState(<>Carregando...</>)


    async function getCharacters(params) {
        
    }
    return(
        <>
        {conteudo}
        </>
    )
}