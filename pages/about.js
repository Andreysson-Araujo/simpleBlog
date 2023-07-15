import React from "react";

function Title(props) {
  return <h1 style={{ color: props.color }}>{props.children}</h1>;
}

export default function Sobre() {
  return (
    <div>
      <header>
        <Title>Pagina Sobre</Title>
      </header>

      <Link>
        <a>Link para Home!</a>
      </Link>
    </div>
  );
}
