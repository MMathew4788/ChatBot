function Greet(props) {

const name=props.name;

  return <div className=" text-3xl p-6 font-bold">
     Hi {name} , <br></br> How are you?</div>;
}
export default Greet;