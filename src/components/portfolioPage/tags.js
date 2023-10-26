const tagClasses =
  "border font-rubik rounded-lg bg-opacity-75 my-1 px-1.5 py-0.5 text-xs inline-block mx-0.5";

const JsTag = () => (
  <div
    className={`bg-yellow-800 border-yellow-500 text-yellow-500 ${tagClasses}`}>
    JAVASCRIPT
  </div>
);
const BootstrapTag = () => (
  <div
    className={`bg-purple-800 border-purple-500 text-purple-500 ${tagClasses}`}>
    BOOTSTRAP
  </div>
);
const TailwindTag = () => (
  <div className={`bg-blue-800 border-blue-500 text-blue-500 ${tagClasses}`}>
    TAILWIND
  </div>
);
const PythonTag = () => (
  <div className={`bg-blue-700 border-blue-300 text-blue-300 ${tagClasses}`}>
    PYTHON
  </div>
);
const ReactTag = () => (
  <div className={`bg-cyan-800 border-cyan-400 text-cyan-400 ${tagClasses}`}>
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
