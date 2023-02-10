import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={s.info}>
            <div className={s.avatar}>
                
            </div>
            <p className={s.username}>@{props.user}</p>
        </div>
    )
}

export default ProfileInfo;