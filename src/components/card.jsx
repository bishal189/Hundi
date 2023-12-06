
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
import Card from 'react-bootstrap/Card';
import { FaRegCopy } from "react-icons/fa";

export const  TransferSendCard=(props)=>{
    return (
        <Card className="transfer_card">
          <Card.Body>

            <Card.Text>
            <div className='spacer'>
                    <p className="muted_color">Amount Sent: </p>
                    <p className="money_color">550.0rb</p>
                </div>
                <div className='spacer'>
                    <p className="muted_color">Sender Name: </p>
                    <p className="text_color">Thomas Henry</p>
                </div>
                <div className='spacer'>
                    <p className="muted_color">Comission: </p>
                    <p className="text_color">0 rb</p>
                </div>
                <div className='spacer'>
                    <p className="muted_color">Average Rate: </p>
                    <p className="text_color">1 rub=0.65nig</p>
                </div>
            </Card.Text>

          </Card.Body>
        </Card>
      );
}

export const TransferReceiveCard=(props)=>{
    return (
        <Card className="transfer_card">
          <Card.Body>

            <Card.Text>
            <div className='spacer'>
                    <p className="muted_color">Recepient Get: </p>
                    <p className="money_color">550.0rb</p>
                </div>

                <div className='spacer'>
                    <p className="muted_color">Recepient Name: </p>
                    <p className="text_color">Thomas Henry</p>
                </div>
                <div className='spacer'>
                    <p className="muted_color">Recepient Bank: </p>
                    <p className="text_color">0 rb</p>
                </div>
                <div className='spacer'>
                    <p className="muted_color">Account Number: </p>
                    <p className="text_color">1 rub=0.65nig</p>
                </div>
            </Card.Text>

          </Card.Body>
        </Card>
      );  
}

export const BankCard=(props)=>{
    return (
        <Card className="bank_card">
          <Card.Body>

            <Card.Text>
           <p>
            Sberbank
           </p>
           <p style={{marginTop:'30px',marginRight:'10px'}} className="account_text">
            2202 0r50 e0r0 0554
            <FaRegCopy style={{marginLeft:'30px'}}/>
           </p>
           <div style={{marginTop:'30px'}}>
            <p className="name_text">Sandesh</p>
            <p>Rub</p>
           </div>
            </Card.Text>

          </Card.Body>
        </Card>
      );  
}