import { color } from "framer-motion";
import React from "react";
import styled from "styled-components";

const SubTitle = styled.h1`
  font-size: 20px;
  color: #ff6a00;
  display: inline-Block;
  padding: 2px;
`;

export default function Home(props) {
  const linkHref = "/about";
  return (
    <div>
      <header className="headerContainer">
        <img src={props.avatar_url} />
        <a href="/about">
          <h1>AndreyssonDev</h1>
        </a>
      </header>

      <section className="postsContaienr">
        <article className="postsContainer_post">
          <a color="red" href="/">
            Sobre:
          </a>
          <p>Repositorios: 37</p>
          <p>Linguagens de programção: Python, JavaScript, Typescript</p>
          <p className="info">Frameworks e Libs:</p>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express.js" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux" width="40" height="40"/>
        </article>
      </section>

      <section className="postsContaienr">
        <SubTitle>Repositorios Favoritos</SubTitle>
        <article className="postsContainer_post">
          <a href="/">Pong Game</a>
          <p>Um simples jogo de Ping-Pong feito utilizando html, css e Js</p>
        </article>
        <article className="postsContainer_post">
          <a href="/">Drac Finaces</a>
          <p>
            Sistema de controle Financeiro desenvolvido com React Js onde é
            possivel fazer deposito e retiradas e verificar o saldo da conta principal.
          </p>
        </article>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const githubResponse = await fetch(
    "http://api.github.com/users/andreysson-araujo"
  ).then((res) => res.json());

  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      public_repos: githubResponse.public_repos,
    },
  };
}
