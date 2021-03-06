import { useState } from "react";
import { TextField, Button } from "@mui/material";


import "../style.css";

const ChatBubble = (props) => {
  return (
    <div className={`chat-bubble ${props.position}`}>
      {props.text}
    </div>
  );
}

const Chat = () => {

  const [chatData, setChatData] = useState([
    {
      position: "chat-left",
      text: "Dobro došli",
    },
    {
      position: "chat-right",
      text: "Imam problem sa uplatom kredita",
    },
    {
      position: "chat-left",
      text: "Kredit će biti dostupan nakon proknjižene uplate. Ukoliko je prošlo više od dva radna dana od uplate, pošaljite nam podatke o uplati kako bi proverili njen status",
    },
    {
      position: "chat-right",
      text: "Podaci o uplati su sledeći",
    },
    {
      position: "chat-right",
      text: "Broj računa: 0080XXXXXXX213",
    },
  ])

  const [text, setText] = useState("");

  const handleSend = () => {
    const chatDataCopy = [...chatData];
    chatDataCopy.push(
      {
        position: "chat-right",
        text,
      },
      {
        position: "chat-left",
        text: "Tehnička podrška nije dostupna. Molimo Vas, pokušajte kasnije",
      },
    )
    setChatData(chatDataCopy);
    setText("");
  }

  return (
    <div className="root">
      <h3> Razgovor sa tehničkom podrškom </h3>

      {chatData.map((item, index) => 
        <ChatBubble key={index} position={item.position} text={item.text} />
      )}

      <div className="force-margin">
        <TextField 
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Upišite poruku"
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleSend}
        > Pošalji </Button>
      </div>
    </div>
  )
}

export default Chat;
