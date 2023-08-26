import React from 'react';

function Comments(props) {
    return (
        <div>
            <div className='Comment-Box'>
                <div className='User-Dp'>Some Image Here</div>
                <div className='Comment-Content-Container'>
                    <div className='User-Name'>Gaurav</div>
                    <div className='User-Comment'>Some Comments Here</div>
                    <div className='Comment-Time'>Today</div>
                </div>

            </div>
        </div>
    );
}

export default Comments;