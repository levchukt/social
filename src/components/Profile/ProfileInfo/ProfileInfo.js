import s from './ProfileInfo.module.css';
import avatar from '../../../img/avatar.jpg'
import Loader from '../../Common/Loader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader />
    }
    return (
        <div className={s.info}>
            <div className={s.avatar}>
                <img src={props.profile.photos.small ? props.profile.photos.small : avatar} alt='avatar'/>
            </div>
            <div>
                <p className={s.username}>@{props.profile.fullName}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;