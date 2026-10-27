import TopBar from "./TopBar";

const CardStore = (props) => {
  return (
    <div style={{height:"10%", border:"5px"}}> 
        <TopBar title="Store"/>
          Id Barang: {props.id}, Product: {props.product}, Price {props.prices}
    </div>
  );
};

export default CardStore;
