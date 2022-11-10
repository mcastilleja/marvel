import React from "react";
import ShowCharacter from "../components/character/ShowCharacter";
import Form from "../components/Form";
import Navs from "../components/detail/Navs";


function Comics( {name, setName, type} ) {

  return (
    <>
    <Form setName={setName} type={type}/>
    <Navs />
      <h1>Comics</h1>
      <ShowCharacter name={name} type={type} />
    </>
  );
}

export default Comics;