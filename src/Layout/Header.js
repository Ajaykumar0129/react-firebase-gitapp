import React,{useContext,useState} from 'react'
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText} from 'reactstrap'
import {Link} from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

const Header=()=>{
    const  context=useContext(UserContext)
    const  [isOpen,setIsOpen]=useState(false)
    const toogle=()=>setIsOpen(!isOpen)
    const ls=localStorage.getItem('User')

    const Logout=()=>{
        console.log("onclick")
        return(
            <div>
           {localStorage.removeItem('User')}
            {context.setUser(null)}
            </div>
          
        )
    }
return(
    <Navbar color="info" light expand="md">
      <NavbarBrand>
          <Link to="/" className="text-white">React-GitGubApp</Link>
    </NavbarBrand>
     <NavbarText className="text-white">
         {
         ls!=null?ls:""
     }
     </NavbarText>
        <NavbarToggler onClick={toogle}/> 
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {
            ls!=null ?(
             <NavItem>
               <NavLink onClick={()=>Logout()} tag={Link} className="text-white">Logout</NavLink>
            </NavItem> 
            ):(
                <React.Fragment>
            <NavItem>
            <NavLink tag={Link} to="/signup" className="text-white">Signup</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to="/signin" className="text-white">Signin</NavLink>
            </NavItem>
                </React.Fragment>
                )
             }
           
          </Nav>
        </Collapse>
    </Navbar>
)
}
export default Header;