import React from 'react'

//con item pasado como prop tengo acceso a toda la data de la api
const CharacterItem = ({item}) => {
    console.log(item);
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Nombre Actor:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Cumpleaños:</strong> {item.birthday}
            </li>
            <li>
              <strong>Estado:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem  
