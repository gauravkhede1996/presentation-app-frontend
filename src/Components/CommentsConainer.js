import React, { Component } from 'react';
import { Button } from '@mui/material'
import Comments from './Comments';
class CommentsContainer extends Component {
    render() {
        return (
            <div className='Comments-Container'>
                
                    <div className='Comments-Input-Box'>
                    <textarea style= {{width:'50%', padding:'3px', margin: '5px', height:'50%'}}/>
                    <Button variant="contained" className='Post-Button' style={{marginTop:'12px'}}>Post</Button>
                    </div>
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                
            </div>
        );
    }
}

export default CommentsContainer;