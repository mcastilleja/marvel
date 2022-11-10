import React from "react";
import ShowCharacter from "../components/character/ShowCharacter";
import Form from "../components/Form";
import Navs from "../components/detail/Navs";


function Events( {name, setName, type} ) {

  return (
    <>
    <Form setName={setName} type={type}/>
    <Navs />
      <h1>Events</h1>
      <ShowCharacter name={name} type={type} />
    </>
  );
}

export default Events;