import React from 'react'
import {useParams} from 'react-router-dom'
import { useQuery,gql } from '@apollo/client'

const FechReview=gql`
query Getreviews($id: ID!){
    review(id: $id){
        title,
        body,
        rating,
        id
    }
}
`
export default function ReviewDetails() {
    const {id}=useParams()
    const {loading, error, data}=useQuery(FechReview,{
        variables:{id:id}
    })
    if(loading) return <p>Loding ..</p>
    if(error) return <p>eroor..</p>
    return (
       <div className="review-card">
                  <div className="rating">{data.review.rating}</div>
                  <h1>{data.review.title}</h1>
                  
                  <p>{data.review.body}</p>
                 
                  </div>
    )
}
