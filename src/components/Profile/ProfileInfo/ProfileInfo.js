import s from './ProfileInfo.module.css';
import avatar from '../../../img/avatar.jpg'
import Loader from '../../Common/Loader';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader />
    }
    return (
        <div className={s.info}>
            <div className={s.avatar}>
                <img src={props.profile.photos.small ? props.profile.photos.small : avatar} alt='avatar'/>
            </div>
            <p className={s.username}>@{props.profile.fullName}</p>
        </div>
    )
}

export default ProfileInfo;