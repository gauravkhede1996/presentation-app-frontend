import React, { Component } from 'react';
import CommentsContainer from './CommentsConainer';
import UsersContainer from './UsersContainer';
class CommentsAndUsersContainer extends Component {
    render() {
        return (
            <div className='Comments-And-Users-Container'>
                <CommentsContainer />
                <UsersContainer />
            </div>
        );
    }
}

export default CommentsAndUsersContainer;