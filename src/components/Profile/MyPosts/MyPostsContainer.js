import React from 'react';
import { Post } from './Post/Post';
import { addPostActionCreator } from '../../../redux/profile_reducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        posts: state.profilePage.posts.map((post) => <Post key={post.id} id={post.id} text={post.text} likesCount={post.likes} />)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postMessage: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);