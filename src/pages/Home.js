import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery,gql } from '@apollo/client'

const FechReview=gql`
query Getreviews{
    reviews{
        title,
        body,
        rating,
        id
    }
}
`
export default function Home() {
    const {loading, error, data}=useQuery(FechReview)
    if(loading) return <p>Loding ..</p>
    if(error) return <p>eroor..</p>
console.log(data)
    return (
        <div>
          {
              data.reviews.map(review=>(
                  <div key={review.id} className="review-card">
                  <div className="rating">{review.rating}</div>
                  <h1>{review.title}</h1>
                  <small>consol list</small>
                  <p>{review.body.substring(0,200)}...</p>
                  <Link to={`/reviewdetails/${review.id}`}>Read more</Link>
                  </div>
              )    
              )
          }
        </div>
    )
}

