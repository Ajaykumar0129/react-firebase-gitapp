import React from 'react'
import {Card,CardBody} from 'reactstrap'

const Usercard=({user})=>{
 return(
     <Card className="text-center mt-3 mb-4">
       <img src={user.avatar_url} className="img-thumbnail"/>
       <CardBody>
         <div className="text-primary">Name:{user.name}</div>
         <div className="text-primary">Public Repos:{user.public_repos}</div>
         <div className="text-primary">Followers:{user.followers}</div>
       </CardBody>
     </Card>
 )
}
export default Usercard