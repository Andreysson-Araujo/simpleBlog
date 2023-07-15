import React from "react";
import styled from "styled-components";



const SubTitle = styled.h1`
  font-size: 20px;
  color: #ff6a00;
  display: inline-Block;
  padding: 2px;
  background-color: #000000;
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
          <a color="red" href="/">Meus Repositorios</a>
          <p>Repositorios:</p>
          <img ></img>
        </article>
      </section>

      <section className="postsContaienr">
        <SubTitle>Repositorios Favoritos</SubTitle>
        <article className="postsContainer_post">
          <a href="/">Titulo post</a>
          <p>sobre o post</p>
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
