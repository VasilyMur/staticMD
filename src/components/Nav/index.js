import Link from 'next/link';
import NavStyles from '../styles/NavStyles';
//import Cities from './Components/cities';

class Nav extends React.Component {

    state = {
        hover: false,
    }


    handleMouseOver = () => {
        const hover = this.state.hover;
        this.setState({ hover: !hover });
    }



    render() {
        const { hover } = this.state;

        return (
            <React.Fragment>
                <NavStyles data-test="nav"> 
                <li> 
                <Link prefetch as={`/new-york`} href={ {pathname: '/city', query: { city: `new-york`, page: 0 }} }>
                                            <a className="city-main">New York</a></Link>
                </li>

                <li>
                <Link prefetch as={`/phoenix`} href={ {pathname: '/city', query: { city: `phoenix`, page: 0 }} }>
                                            <a className="city-main">Phoenix</a></Link>
                </li>

                <li onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOver} >
                    <a href="#" className="city-main" >All Cities</a>
                        {/* { hover ? <Cities /> : ''} */}
                </li>

                

                </NavStyles>
             
            
                
            </React.Fragment>
        )
    }
}
       

  
  export default Nav;