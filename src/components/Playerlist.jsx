import React from 'react'
import Cards from './Cards';

const Playerlist = () => {
    const players = [
        { img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHQwSpLTBzkU0XgnRXMUshyAAqWuaBpOAQMfVX2NXyc5T6_gpHzZNOy15YWTR236NVL4&usqp=CAU',   
          name:'messi',
          nationality:'argentin'
        }, 
    
        { img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUDXV6UpqmUDpPb79oHEmYffGsfoFV1-AEQ&s',   
          name:'ronaldo',
          nationality:'portugal'
        }, 
        { img:'https://www.africatopsports.com/wp-content/uploads/2013/10/ronalves.jpg',   
          name:'dani alves',
          nationality:'brazilian'
        },
        { img:'https://www.africatopsports.com/wp-content/uploads/2013/10/ronalves.jpg',   
          name:'dani alves',
          nationality:'brazilian'
        },
        { img:'https://www.africatopsports.com/wp-content/uploads/2013/10/ronalves.jpg',   
          name:'dani alves',
          nationality:'brazilian'
        },
        { img:'https://www.africatopsports.com/wp-content/uploads/2013/10/ronalves.jpg',   
          name:'dani alves',
          nationality:'brazilian'
        },
        { img:'https://www.africatopsports.com/wp-content/uploads/2013/10/ronalves.jpg',   
          name:'dani alves',
          nationality:'brazilian'
        },
        { img:'https://www.africatopsports.com/wp-content/uploads/2013/10/ronalves.jpg',   
          name:'dani alves',
          nationality:'brazilian'
        },
        { img:'https://www.africatopsports.com/wp-content/uploads/2013/10/ronalves.jpg',   
          name:'dani alves',
          nationality:'brazilian'
        },
        { img:'https://www.africatopsports.com/wp-content/uploads/2013/10/ronalves.jpg',   
          name:'dani alves',
          nationality:'brazilian'
        }
    
       ];
       
  return (
    
    <div className='cards'>
       {players.map(el=><Cards el={el} />)}  
    </div>
  )
}

export default Playerlist