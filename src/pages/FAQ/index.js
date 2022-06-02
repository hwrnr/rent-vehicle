import  CollapseContainer  from "../../components/CollapseContainer";

import "../style.css";

const FAQ = () => {

  const data = [
    {
      question: "Jel moram da imam položeno?",
      answer: "Nije naš problem. Ti ideš u zatvor.",
    },
    {
      question: "Kako se uplaćuje kredit?",
      answer: "Jednostavno.",
    },
    {
      question: "Kako se koristi app?",
      answer: "Jednostavno.",
    },
  ]

  return (
    <div className="root">
      {data.map((item, index) => 
        <CollapseContainer key={index} title={item.question}> <p>{item.answer}</p> </CollapseContainer>
      )}

    </div>
  )
}

export default FAQ;
