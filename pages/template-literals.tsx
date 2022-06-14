import React from "react";
import styles from "../styles/Home.module.css";
import { getDatesInRange } from "../utils/index";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useRouter } from "../node_modules/next/router";

function TemplateLiterals() {
  const navigate = useRouter();
  const getLivedDays = (year: Date) => {
    const livedDays = getDatesInRange(year).toLocaleString("pt-Br");

    return `você já viveu inacreditaveis ${livedDays} dias.`;
  };
  const getHello = (name: string, lastname: string) => {
    return `Olá ${name} ${lastname},`;
  };

  type RenderMessageParams = {
    year: Date;
    firstname: string;
    lastname: string;
  };
  const renderMessage = ({
    firstname,
    lastname,
    year,
  }: RenderMessageParams) => {
    return `${getHello(firstname, lastname)} ${getLivedDays(year)}`;
  };

  const codestring = `const infos = { 
    firstname: "Seu Nome", 
    lastname: "Seu Sobrenome", 
    year: "13/11/1990" 
  }`;
  return (
    <div className={styles.page_container}>
      <div className={styles.inner}>
        <h1>Template Literals & Dates</h1>
        <p>Template literals are like regular strings with super-powers:</p>
      </div>
      <div className={styles.spacingB}>
        <p>Crie uma função que retorne um string no seguinte formato:</p>
        <span className={styles.span}>
          {renderMessage({
            firstname: "Filipe",
            lastname: "Prado",
            year: new Date("1993-12-26"),
          })}
        </span>
        <p className={styles.spacingS}>
          você deve passar os parametros dessa forma:
        </p>
        <SyntaxHighlighter
          wrapLines
          showLineNumbers
          customStyle={{
            maxWidth: "500px",
            minHeight: "100px",
            borderRadius: "10px",
            padding: "20px 0px",
          }}
          lineNumberStyle={true}
          language='javascript'
        >
          {codestring}
        </SyntaxHighlighter>
        <button
          onClick={() => navigate.push("template-literals-solution")}
          className={styles.button}
        >
          Ir para tela de soluções
        </button>
      </div>
    </div>
  );
}

export default TemplateLiterals;
