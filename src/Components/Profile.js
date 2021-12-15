import React from 'react';
import image from './images/image-jeremy.png'
import style from './styles/profile.module.css'

const Profile =()   => {
    return(
      <div className={style.person}>
          <div className={style.personUp}>
            <img className={style.img} src={image} alt={'jeremy'} />
            <p className={style.smallText}>Report for</p>
            <p className={style.personName}>Jeremy Robson</p> 
          </div>
      </div>
    )
  

};
export default Profile;