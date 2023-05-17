// 타입 가드 (Type Guards)

// function logText(el: Element) {
//   console.log(el.textContent);
// }

// const h1El = document.querySelector("h1");
// if (h1El instanceof HTMLHeadingElement) {
//   logText(h1El);
// }

function add(val: string | number | boolean) {
  let res = "Result => ";
  if (typeof val === "number") {
    res += val.toFixed(2);
  }
  if (typeof val === "string") {
    res += val.toUpperCase();
  } else {
    res += val.toString();
  }
  console.log(res);
}

add(3.141592);
add("Hello World");
add(false);
