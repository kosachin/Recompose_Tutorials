import { compose, withHandlers, withState } from "recompose";

const employeesList = [
  {
    id: 1,
    first_name: "Rafaela",
    pic: "http://dummyimage.com/116x100.png/dddddd/000000",
  },
  {
    id: 2,
    first_name: "Dennie",
    pic: "http://dummyimage.com/213x100.png/ff4444/ffffff",
  },
  {
    id: 3,
    first_name: "Drucy",
    pic: "http://dummyimage.com/227x100.png/dddddd/000000",
  },
  {
    id: 4,
    first_name: "Yehudit",
    pic: "http://dummyimage.com/238x100.png/dddddd/000000",
  },
  {
    id: 5,
    first_name: "Mathew",
    pic: "http://dummyimage.com/191x100.png/dddddd/000000",
  },
  {
    id: 6,
    first_name: "La verne",
    pic: "http://dummyimage.com/126x100.png/5fa2dd/ffffff",
  },
  {
    id: 7,
    first_name: "Sisely",
    pic: "http://dummyimage.com/233x100.png/dddddd/000000",
  },
  {
    id: 8,
    first_name: "Mattie",
    pic: "http://dummyimage.com/250x100.png/dddddd/000000",
  },
  {
    id: 9,
    first_name: "Honoria",
    pic: "http://dummyimage.com/189x100.png/dddddd/000000",
  },
  {
    id: 10,
    first_name: "Walliw",
    pic: "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
  },
];
const Card = ({ info, display, handleCardState, id }) => {
  // console.log(display);
  return (
    <div>
      <button
        style={{ display: !display ? "block" : "none" }}
        onClick={() => handleCardState(id)}
      >
        +
      </button>
      <button
        style={{ display: display ? "block" : "none" }}
        onClick={() => handleCardState(false)}
      >
        -
      </button>
      {}
      <div style={{ display: display ? "block" : "none" }}>
        <img src={info.pic} />
        <p>{info.first_name}</p>
      </div>
    </div>
  );
};
const EmpList = ({ setOpen, open, handleCardState }) => {
  return (
    <div>
      <h1>Employee list</h1>
      {employeesList.map((emp) => (
        <Card
          id={emp.id}
          key={emp.id}
          info={emp}
          display={open === emp.id}
          handleCardState={handleCardState}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
};

const enhance = compose(
  withState("open", "setOpen", false),
  withHandlers({
    handleCardState:
      ({ setOpen }) =>
      (e) => {
        console.log(e);
        setOpen(e);
      },
  })
);
export default enhance(EmpList);
