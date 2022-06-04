import  CollapseContainer  from "../../components/CollapseContainer";

import "../style.css";

const FAQ = () => {

  const data = [
    {
      question: "Jel moram da imam položeno?",
      answer: "Za iznajmiljivanje biciklova i trotineta, nije neophodno imati položen vozački ispit. Međutim, za iznajmiljivanje motornih vozila je potrebno poslati dokaz o položenim odgovarajućim vozačkim kategorijama.",
    },
    {
      question: "Kako se uplaćuje kredit?",
      answer: "Jednostavno.",
    },
    {
      question: "Kako se rezerviše vozilo?",
      answer: "Jednostavno.",
    },
    {
      question: "Mogu li da iznajmim vozila za nekog drugog na moje ime?",
      answer: "Ti si kriv ako se desi neka šteta na vozilu.",
    },
  ]

  return (
    <div className="root">
      <h2> FAQ - često postavljena pitanja </h2>
      {data.map((item, index) => 
        <CollapseContainer key={index} title={item.question}> <p>{item.answer}</p> </CollapseContainer>
      )}

    </div>
  )
}

export default FAQ;
