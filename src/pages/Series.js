import React from "react";
import ShowCharacter from "../components/character/ShowCharacter";
import Form from "../components/Form";
import Navs from "../components/detail/Navs";


function Series( {name, setName, type} ) {

  return (
    <>
    <Form setName={setName} type={type}/>
    <Navs />
      <h1>Series</h1>
      <ShowCharacter name={name} type={type} />
    </>
  );
}

export default Series;