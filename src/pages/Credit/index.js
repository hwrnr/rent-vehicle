import  CollapseContainer  from "../../components/CollapseContainer";

import "../style.css";

const Credit = (props) => {

  return (
    <div className="root">
      <CollapseContainer title="Uplati uplatnicom"> <p>Uplatnica</p> </CollapseContainer>
      <CollapseContainer title="Uplati preko banke">
        <p> Broj računa uplate: XX-231232123-XXX </p> 
        <p> Poziv na broj: 766976233 </p> 
      </CollapseContainer>

      <p> Kredit će se automatski dodati u aplikaciji nakon proknjižene uplate </p>
    </div>
  )
}

export default Credit;
