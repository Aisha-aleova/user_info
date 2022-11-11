import React, { useState } from "react";
import Barak from "./utils/images/Barak.jpg";
import Bill from "./utils/images/Bill.jpg";
import Johnny from "./utils/images/johnny.jpg";
import Malala from "./utils/images/Malala.jpg";
import Taylor from "./utils/images/Taylor.jpg";
import Vladimir from "./utils/images/Vladimir.jpg";
import "./App.css";
import { useContext } from "react";
import { ContextData } from "./Context/Context";




function App() {

  const array = [
    {
      id: 1,
      name: "Barak Obama",
      image: Barak,
      occupation: "politician",
      birthdate: new Date('1961-08-4'),
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ratione doloremque aliquam!"
    },
    {
      id: 2,
      name: "Bill Gates",
      image: Bill,
      occupation: "Businessman",
      birthdate: new Date('1955-10-28'),
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ratione doloremque aliquam!"
    },
    {
      id: 3,
      name: "Johnny Depp",
      image: Johnny,
      occupation: "actor",
      birthdate: new Date('1963-06-9'),
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ratione doloremque aliquam!"
    },
    {
      id: 4,
      name: "Malala Yousafzai",
      image: Malala,
      occupation: "activist",
      birthdate: new Date('1997-07-12'),
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ratione doloremque aliquam!"
    },
    {
      id: 5,
      name: "Vladimir Putin",
      image: Vladimir,
      occupation: "politician",
      birthdate: new Date('1952-10-7'),
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ratione doloremque aliquam!"
    },
    {
      id: 6,
      name: "Taylor Swift",
      image: Taylor,
      occupation: "singer",
      birthdate: new Date('1989-12-13'),
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ratione doloremque aliquam!"
    }

  ];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const [currentObject, setCurrent] = useState({});
  const {add, subtract} = useContext(ContextData);
  const [value, setValue] = useState(0);
  function handleClick(item){
    setCurrent(item);
  }
  function changeInput(e){
    setValue(e.target.value);
  }
  return (
    <div className="wrapper">
      <section className="sectionTop">
          { Object.keys(currentObject).length !== 0 ?
          <div className="content">
            <figure>
              <img src={currentObject.image} alt="" />
            </figure>
            <div className="leftInfo">
              <p><b>Name:</b> {currentObject.name}</p>
              <p><b>Occupation:</b> {currentObject.occupation}</p>
              <p><b>Birth date:</b> {currentObject.birthdate.getDate()} {months[currentObject.birthdate.getMonth()]} {currentObject.birthdate.getFullYear()}</p>
              <p><b>More Information:</b> {currentObject.info}</p>
            </div>
          </div>
          :
            <div>
              <p>Select a person below</p>
              <button onClick={()=>add(value, setValue)}>Add</button>
              <input  onChange={(e)=>changeInput(e)} type="text" value={value}/>
              <button onClick={()=>subtract(value, setValue)}>Subtract</button>
            </div>
          }
      </section>
      <section className="sectionBottom">
        {
          array.map((item) => (
            <div onClick={()=>handleClick(item)} className={item.id === currentObject.id ? "highlight" : "card"} key={item.id}>
              <figure>
                <img src={item.image} alt="i" />
              </figure>
              <div>
              <p>{item.name}</p>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default App;
