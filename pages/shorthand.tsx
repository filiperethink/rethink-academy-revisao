import React from "react";
import styles from "../styles/Home.module.css";
import { getDatesInRange } from "../utils/index";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useRouter } from "../node_modules/next/router";
import { NOMEM } from "dns";

function Shorthand() {
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

  const codestring = `const product = {
    brand: brand,
    color: color,
    name: name,
    type: type,
    save: function () {
     console.log("Salvando o produto...");
    }
  };`;
  const codestringFinal = `const product = {
    brand,
    color,
    name,
    type,
    save () {
     console.log("Salvando o produto...");
    }
  };`;

  return (
    <div className={styles.page_container}>
      <div className={styles.inner}>
        <h1>Shorthand property names</h1>
        <p>
          With Shorthand Properties, whenever you have a variable which is the
          same name as a property on an object, when constructing the object,
          you can omit the property name.
        </p>
      </div>
      <div className={styles.spacingB}>
        Quando você está construindo um objeto assim:
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
          language="javascript"
        >
          {codestring}
        </SyntaxHighlighter>
        Você pode omitir o nome das propriedades que o javascript entende
        <br />
        automaticamente que você está criando uma key com o nome da <br />
        variavel:
        <SyntaxHighlighter
          wrapLines
          showLineNumbers
          customStyle={{
            maxWidth: "500px",
            minHeight: "100px",
            borderRadius: "10px",
            padding: "20px 10px",
          }}
          lineNumberStyle={true}
          language="javascript"
        >
          {codestringFinal}
        </SyntaxHighlighter>
        <button
          onClick={() => navigate.push("shorthand-solution")}
          className={styles.button}
        >
          Ir para tela de soluções
        </button>
      </div>
    </div>
  );
}

export default Shorthand;
