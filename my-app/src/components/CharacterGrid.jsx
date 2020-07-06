import React from 'react'
import CharacterItem from './CharacterItem'

// Uso destructuring para no tener que andar poniendo props.
const CharacterGrid = ({items, isLoading}) => {
    return isLoading  ? (
        <h1>Loading...</h1>
        ) : (
        <section className="cards">
            {items.map((item) => (
                <CharacterItem key = {item.char_id} item={item}></CharacterItem>
            ))}
        </section>)
        
}
export default CharacterGrid
