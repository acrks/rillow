import React from 'react'

// export default ({listing, createListing}) => (
    
//     <div className = "listing_index_item">
//         {/* <h3>{listing.purchase ? null : 'Leasing' }
//         Agent: {listing.creator}</h3>
//         <p className = "index-item-address">{listing.street_number}, {listing.street_name}
//         <br/>
//         {listing.city_name}, {listing.zipcode}
//         </p> */}
        
//     </div>
// )

const PostIndexItem = ({listing}) => (
    <li>
        {/* <Link to = {`/posts/${post.id}`}>{post.title}</Link>
        <Link to = {`/posts/${post.id}/edit`}>Edit</Link>
        <button onClick = {() => deletePost(post.id)}>Delete Post</button> */}
        {listing}
    </li>
)

export default PostIndexItem
