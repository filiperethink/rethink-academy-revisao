// @ts-ignore

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import styles from "../styles/Home.module.css";

function TemplateLiterals() {
  const codestringFinal =
    "const newProduct = ({ brand, color, name, type }) => {\n  const save = () => {\n    console.log(Salvando o produto ${name}...);\n  };\n  return { brand, color, name, type, save };\n};";

  const newProduct = ({ brand, color, name, type }) => {
    const save = () => {
      console.log(`Salvando o produto ${name}...`);
    };
    return { brand, color, name, type, save };
  };

  const AirMax = newProduct({
    brand: "Nike",
    color: "Azul",
    name: "AirMax",
    type: "Sneaker",
  });

  console.log({ AirMax });
  AirMax.save();

  const codestring = `const product = {
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
        <h1>Template Literals & Dates</h1>
      </div>
      <div className={styles.spacingB}>
        <p>Crie uma função que retorne um objeto no seguinte formato:</p>
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
          {codestring}
        </SyntaxHighlighter>
        <hr />A função é como essa :
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
      </div>
    </div>
  );
}

export default TemplateLiterals;
