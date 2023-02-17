import s from './ProfileInfo.module.css';
import avatar from '../../../img/avatar.jpg'


const ProfileInfo = (props) => {
    debugger
    return (
        <div className={s.info}>
            <div className={s.avatar}>
                <img src={props.profile.photos.large ? props.profile.photos.large : avatar} alt='avatar'/>
            </div>
            <p className={s.username}>@{props.profile.fullName}</p>
        </div>
    )
}

export default ProfileInfo;