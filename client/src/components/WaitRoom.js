import React from 'react'
import style from './styles/WaitRoom.module.css'
import Loader from './Loader'

const WaitRoom = ({player}) => {

  console.log(player);


  if(player) return (
    <section className={style.container}>

      <p className={style.textRoom}>Sala: {player.room}</p>

      <div className={style.infoContainer}>
        <p>Olá {player.username}! Chame algum amigo para jogar contra você. </p>
        <Loader/>
      </div>
    </section>
  )
}

export default WaitRoom