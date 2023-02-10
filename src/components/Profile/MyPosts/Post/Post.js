import s from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}></div>
            <p className={s.text}>{props.text}</p>
            <span className={s.likes}>{props.likesCount}</span>
        </div>
    )
}