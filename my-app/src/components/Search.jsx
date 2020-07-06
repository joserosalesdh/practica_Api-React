import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('');
    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }
    return (
        <section className='search'>
            <form action="">
                <input 
                type="text" 
                className="form-control" 
                placeholder= "Buscar Personaje ..." 
                value={text} 
                onChange = {(e) =>onChange(e.target.value)}
                // Esto hace que cada vez que pongamos algo en el input va a buscar cualquier cosa que tipiemos dentro de text
                autoFocus/>
            </form>
        </section>
    )
}

export default Search
