const tempData = [`"hero-container"`, `"hero"`, `"mada__cascar"`];
const toCamelCase = (el) => {
  return el
    .replace('"', "")
    .split(/[-_.]/g)
    .map((call, index) => {
      if (index > 0) {
        return (call.charAt(0).toUpperCase() + call.slice(1)).slice(0, -1);
      } else {
        return call;
      }
    })
    .join("");
};
console.log(
  tempData
    .map(
      (el) =>
        `const ${toCamelCase(el)
          .replace('"', "")
          .slice(0, el.length - 2)} = document.getElementById(${el});\n`
    )
    .join("")
);
