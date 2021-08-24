import React from "react";

function Header({ vet }) {

  const { name, slogan, comercialActivity } = vet;

  return (
    <header className="header my-3 animate__animated animate__fadeInUp">
      <h1>{comercialActivity}</h1>
      <h2 className="header__name">{name}</h2>
      <p>{slogan}</p>
    </header>
  );
}

export default Header;
