import { Form } from "react-bootstrap";
import './css/formInput.css'
export function CustomForm(props){
    return(
     <Form.Control
      onChangeCapture={props.onChange&&props.onChange}
        size="lg"
        defaultValue={props.val}
        type={props.placeholder!=="Email ID"?"text":"email"}
        name={props.name}
        placeholder={props.placeholder}
        aria-label={props.placeholder}
        className="form_custom"
        readOnly={props.readonly}

        
      />   
    )

}