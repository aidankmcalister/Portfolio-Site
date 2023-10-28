import portfolioProjectImg from "../assets/imgs/portfolioProjectImg.png";
import JSONFormatterImg from "../assets/imgs/JSONFormatterImg.png";

export const PROJECTS = [
  {
    id: 0,
    img: JSONFormatterImg,
    lang: ["js", "bootstrap"],
    name: "JSON Formatter",
    link: "https://github.com/aidankmcalister/JSON-Formatter",
    description:
      'Turns text from name:value into {"name":"value"}. Includes a clear and a copy button.',
    readme: `
    <div class="project-readme">
        <h1>Overview:</h1>
        <p>JSON Syntax Formatter is a simple web-based tool that takes input in the form of name-value pairs and formats it into valid JSON syntax.</p>

        <h2>Usage:</h2>
        <ol>
            <li>Open the provided HTML file in your web browser.</li>
            <li>In the <strong>Input JSON Data</strong> textbox, enter your data in the following format:</li>
            <p>
                name1:value1<br>
                name2:value2
            </p>
            <p><strong>OR</strong></p>
            <p>
                name1|value1<br>
                name2|value2
            </p>
            <li>Click the <strong>Format</strong> button.</li>
            <li>The tool will format the data into JSON syntax, and the result will be displayed in the <strong>Formatted JSON Output</strong> textbox.</li>
            <pre>
                JSON
                  {
                      "name1": "value1",
                      "name2": "value2"
                  }

            </pre>
            <li>To copy the formatted JSON to your clipboard, click the <strong>Copy to Clipboard</strong> button.</li>
        </ol>

        <h2>Example:</h2>
        <h3>Input JSON Data:</h3>
        <p>
            first_name:John<br>
            last_name:Doe<br>
            age:30
        </p>
        <h3>Formatted JSON Output:</h3>
        <pre>
            JSON
            {
                "first_name": "John",
                "last_name": "Doe",
                "age": 30
            }
        </pre>

        <h2>Technologies Used:</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </div>
    `,
  },
  {
    id: 1,
    img: portfolioProjectImg,
    lang: ["js", "tailwind", "react"],
    name: "Portfolio Site",
    link: "https://github.com/aidankmcalister/Portfolio-Site",
    description:
      "This is the project for this site. I've used multiple packages like tsparticles, react-scroll, tailwindcss-animations, and more.",
    readme: "",
  },
];
