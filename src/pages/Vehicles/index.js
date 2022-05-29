import Vehicle from "./Vehicle";

const Vehicles = () => {

  const data = [
    {
      regNumber: "NS 555 RT",
      distance: 200,
      price: 100,
      type: 0,
    },
    {
      regNumber: "NS 904 BR",
      distance: 1200,
      price: 100,
      type: 1,
    },
    {
      regNumber: "Bike 12",
      distance: 600,
      price: 100,
      type: 2,
    },
    {
      regNumber: "Trotinet 31",
      distance: 10,
      price: 100,
      type: 3,
    },
    {
      regNumber: "NS 418 NJ",
      distance: 1000,
      price: 100,
      type: 1,
    },
  ]
    


  return (
    <div>
      {data.map(vehicle => <Vehicle key={`vehicle-${vehicle.regNumber}`} vehicle={vehicle}/>)}
    </div>
  )
}

export default Vehicles;
