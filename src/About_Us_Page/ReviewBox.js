import React from 'react';
import './ReviewBox.css';

function ReviewBox({title, content, ratings, userName}){
    const fullStars = Math.ceil(ratings)
    const emptyStars= 5-fullStars
    return(
        <div className='reviewBox bg-white'>
            <div className='reviewRatings m-4 border text-2xl'>
                {'★'.repeat(fullStars)}
                {'☆'.repeat(emptyStars)}
            </div>
            <div className='reviewTitle text-xl m-4 border'><h1>{title}</h1></div>
            <div className='reviewContent m-4 border'>
                <p>{content}</p>
            </div>
            <div className='reviewerName text-xl m-4 border'><h1>{userName}</h1></div>
        </div>
    )
}

export default ReviewBox;