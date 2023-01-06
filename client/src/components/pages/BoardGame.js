import React from 'react'

const BoardGame = ({io, socket}) => {
  const[player, setPlayer]= React.useState(JSON.parse(localStorage.getItem("player")))
  const[headerGame, setHeaderGame]= React.useState(null)

  React.useEffect(()=>{
    socket.emit("pairPlayersInGame", player)
  },[])

  socket.once("makeHeaderGame", data=>{
    setHeaderGame(data)
  })


  return (
    <section>




    </section>
  )
}

export default BoardGame