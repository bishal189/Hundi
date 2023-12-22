import {Modal,Button} from "react-bootstrap";



export function ErrorModal(props){
    return(
        <>
         {props.show && <Modal show={props.show}  centered>
    <Modal.Body>
      <div style={{display:'flex'}}>
        <div style={{fontSize:'1rem' ,marginLeft:'20px',marginTop:'20px'}}>
         
          <h5 style={{color:props.color||'red'}}>{props.error}</h5>
          </div>

      </div>
      
     </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={()=>props.closeModal(false)}>
        Close
      </Button>
     
    </Modal.Footer>
  </Modal>}
  </>
    )
}