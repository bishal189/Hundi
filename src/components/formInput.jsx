import { Form } from "react-bootstrap";
import './css/formInput.css'
export function CustomForm(props){
    return(
     <Form.Control
        size="lg"
        type={props.placeholder!=="Email ID"?"text":"email"}
        name={props.name}
        placeholder={props.placeholder}
        aria-label={props.placeholder}
        className="form_custom"
        readOnly={props.readonly}
        
      />   
    )

}