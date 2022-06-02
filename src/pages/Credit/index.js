import  CollapseContainer  from "../../components/CollapseContainer";

import "../style.css";

const Credit = (props) => {

  return (
    <div className="root">
      <CollapseContainer title="Uplati preko banke"> <p>Banka</p> </CollapseContainer>
      <CollapseContainer title="Uplati uplatnicom"> <p>Uplatnica</p> </CollapseContainer>

      <p> Kredit će se automatski dodati u aplikaciji nakon proknjižene uplate </p>
    </div>
  )
}

export default Credit;
