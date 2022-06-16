import React from 'react'
import { Icon } from '../Icon/Icon'
import { H5 } from '../Text/Text'
import { Flex } from '../UI/Flex/Flex'
import './Header.css'
import {Link,  Router, useNavigate} from 'react-router-dom'

export const Header =()=> {
  const navigate = useNavigate()
  return (
    <div className="header">
        

        <img width="8%"  src={require('../../assets/images/logo/logo.png')} alt="" />

        <div className="search_bar">

        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search here..." />

        </div>
        <div className="navbar">
        
                <Link style={{textDecoration:"none",color:"inherit"}} to="/">
                <Icon margin="10px" icon="fa-solid fa-house"color="grey"  backgroundColor="white" />
                </Link>
                <Link to="/event" style={{textDecoration:"none",color:"inherit"}} > 
               <Icon margin="10px" icon="fa-solid fa-calendar-days"color="grey"  backgroundColor="white" />
</Link>
                <Link to="/queries" style={{textDecoration:"none",color:"inherit"}} > 
                <Icon margin="10px" icon="fa-solid fa-clipboard-question"color="grey"  backgroundColor="white" />
                
                </Link>
                <Icon margin="10px" icon="fa-solid fa-envelope"color="grey"  backgroundColor="white" />


           
            {/* <H5 margin='15px' color="black" fontWeight="bold">
                Profile
            </H5> */}
           
            {/* <i class="fa-solid fa-envelope"></i>*/}
            <Flex>
            <Link to="/account" style={{textDecoration:"none",color:"inherit"}} > 

               
                <Icon  margin="10px" icon="fa-solid fa-gear" color="grey" backgroundColor="white" />
</Link>
{/* onClick={()=>navigate('/settings')} */}
                <Link to="/profile" style={{textDecoration:"none",color:"inherit"}} > 

                <Icon margin="10px" icon="fa-solid fa-user"color="grey"  backgroundColor="white" />
</Link>

              </Flex>
              
            
            
        </div>


    </div>
  )
}
