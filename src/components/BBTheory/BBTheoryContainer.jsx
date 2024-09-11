
import { data } from "../../helpers/data";
import BBTheoryCard from './BBTheoryCard';
import { Container } from 'react-bootstrap';
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Row} from 'react-bootstrap'
import "./BBTstyle.css"

const BBTheoryContainer = () => {
    const [search, setSearch] = useState("")

  return (
<div>

<Form.Control
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Oyuncu arama.."
        className="w-75 mx-auto my-2"
      />

<Container  className=" cont p-3 rounded-4 card-container my-3">
<Row className="justify-content-center g-3">
{data.filter((bbt)=>
bbt.name.toLowerCase().includes(search.trim().toLowerCase())).map((bbt)=>(
    <BBTheoryCard key={bbt.id} bbt={bbt}/>
    
))}


  

</Row>
  
</Container>
</div>
  )
}

export default BBTheoryContainer