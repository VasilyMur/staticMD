import axios from 'axios';
import AllItems from '../src/components/AllItems';
import styled from 'styled-components';



const Index = (props) => {
        return (
            <Inner>
                <AllItems {...props} name='Global Strip Club List'/>
            </Inner>
        )
} 
   

Index.getInitialProps = async function() {
    try {
        // CHANGE!!!!! to REAL PATH!! WHY RELATIVE нельзя???
        //const { page } = context.query;
        const res = await axios.get(`http://localhost:3000/api/items`)

        return {
            items: res.data
        //     items: res.data.items,
        //     count: res.data.count,
        //     pages: res.data.pages,
        //     page: res.data.page,
        }  
    } catch(err) {
        console.log(err)
    }

} 

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: ${props => props.theme.innerPadding};
display: grid;
justify-content: center;
`;

export default Index