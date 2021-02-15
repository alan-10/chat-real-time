import react, { FormEvent, useState, useEffect  } from 'react';
import { io } from 'socket.io-client';




import Header from '../../components/Header';

import { Content, Chat, Form, 
  YourMessage, MyMessage , Connections
} from './styles';



const myId = `${Math.floor(Math.random() * 999999)}`.padStart(6, '0');

const socket =  io('http://localhost:3333',  { transports: ["websocket"] });
socket.on('connect', () => console.log('new user io connected'));
  


interface Messages {
  id: string;
  message: string;
}


  
function PageMain() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Messages[]>([]);
  const [totalConnetcion, setTotalConenection] = useState(0);

 console.log(totalConnetcion);

  useEffect(() => {

    const dandleNewMessage = (message: Messages) => {
      setMessages([...messages, message]);
      socket.off('chatMessage');
    }
    
    socket.on('chatMessage', (data:Messages) => {
      dandleNewMessage(data);
    });


    
     
  }, [ messages ]);

  useEffect(() => {
    

    socket.on('totalConnected', (data: number ) => {
      setTotalConenection(data);
    })

  }, [totalConnetcion])

  
  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();
    
  
    if (message.trim()) {
      socket.emit('chatMessage',{id: myId,message })
      setMessage('');
    }
  }

  

  return (
    <>
      <Header />
      <Content>
              
      <Connections>
        {totalConnetcion} conexôes.
      </Connections>
        <Chat>

          {messages.map((message, index) => {

            {
              if (message.id == myId) {
                return (
                  <MyMessage key={index}>
                    {message.message}
                  </MyMessage>
                )
              } else {
                return (
                  <YourMessage key={index}>
                    {message.message}
                  </YourMessage>
                )
              }
            }


          })}


          <Form onSubmit={handleSubmitForm}>
            <input type="text" name="" id=""
              placeholder="Digite sua mensagen.."
              value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </Form>
        </Chat>
      </Content>
    </>
  );
}

export default PageMain;

