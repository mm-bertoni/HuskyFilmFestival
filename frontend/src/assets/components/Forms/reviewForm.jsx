import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";

export default function ReviewForm(){
    const [selected, setSelected] = useState("Not Reviewed"); // Default is hasnt been reviewed.
    // Fix this 
    const handleSelection = (event) =>{
        setSelected(event.target.value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log("Selection made:", selected);
        // Will put comms to Server here
       
    }

    return(
        <Container>
            <Form onSubmit={onSubmit}>
                
                <Form.Select value={selected} onChange={handleSelection}>
                    <option>Make a decision</option>
                    <option value="Selected">Selected</option>
                    <option value="Waitlisted">Waitlisted</option>
                    <option value="Rejected">Rejected</option>
                </Form.Select>
                <Button variant="primary" type="submit"> Submit</Button>
            </Form>
        </Container>

    );
}
