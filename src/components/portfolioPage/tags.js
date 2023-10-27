const tagClasses =
  "border font-rubik rounded-lg bg-opacity-75 px-1 py-0.5 text-xs inline-block mr-2 my-1";
const tagStyle = { boxShadow: "0px 0px .25rem" };
const JsTag = () => (
  <div
    style={tagStyle}
    className={`bg-yellow-800 border-yellow-500 text-yellow-500 ${tagClasses}`}>
    JAVASCRIPT
  </div>
);
const BootstrapTag = () => (
  <div
    style={tagStyle}
    className={`bg-purple-900 border-purple-400 text-purple-400 ${tagClasses}`}>
    BOOTSTRAP
  </div>
);
const TailwindTag = () => (
  <div
    style={tagStyle}
    className={`bg-blue-900 border-blue-400 text-blue-400 ${tagClasses}`}>
    TAILWIND
  </div>
);
const PythonTag = () => (
  <div
    style={tagStyle}
    className={`bg-sky-900 border-sky-300 text-sky-300 ${tagClasses}`}>
    PYTHON
  </div>
);
const ReactTag = () => (
  <div
    style={tagStyle}
    className={`bg-cyan-800 border-cyan-400 text-cyan-400 ${tagClasses}`}>
    REACT JS
  </div>
);

export const tag = (lang) => {
  return lang.map((langs) => {
    switch (langs) {
      case "js":
        return <JsTag key={langs} />;
      case "bootstrap":
        return <BootstrapTag key={langs} />;
      case "tailwind":
        return <TailwindTag key={langs} />;
      case "python":
        return <PythonTag key={langs} />;
      case "react":
        return <ReactTag key={langs} />;
      default:
        return null;
    }
  });
};
