import styled from 'styled-components';

export const Container = styled.div`
  position:relative;
  width: min(560px, 100%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  overflow:hidden;
  max-height:900px;
  
`;

export const Chat = styled.div`
  width: min(560px, 100%);
  height: 80vh;
  margin:10px; 
  border-radius:10px;
  margin-top:20px;
  background: ${props => props.theme.colors.chat};

  position: relative;

  overflow:scroll;
  ::-webkit-scrollbar{
    display:none;
  }
 
`;

export const Connections = styled.div`
  margin-top:0.4rem;
  font-weight: bold;
`;


export const Form = styled.form`

  bottom:0;
  position:fixed;
  width:100%;
  display: flex;
  align-items:flex-end;


  input {
   
    height: 3rem;
    outline: none;
    padding: 5px;
    font-size:1.2rem;
    width: min(490px, 100%);
   
  }

  button {
    height: 3rem;
    width: 4.3rem;
    font: 700 bold ;
    outline: none;
  }
`;


export const YourMessage = styled.div`
  background: ${props => props.theme.colors.backgroundYouMessage};
  color: ${props => props.theme.colors.colorYouMessage};
  width:45%;
  margin:5px;
  padding:5px;
  border-radius:8px;
  word-wrap: break-word; 
  

  display:block;
  right:4;
`;


export const MyMessage = styled.h4`
  background: ${props => props.theme.colors.backgroundMyMessage};
  color: ${props => props.theme.colors.colorMyMessage};

  width:45%;
  width:45%;
  margin:5px;
  padding:5px;
  border-radius:8px;
  word-wrap: break-word;

  display:block;
  margin-left:50%;
  
`;

