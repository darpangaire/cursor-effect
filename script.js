let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (val) {
  gsap.to(cursor, {
    x: val.x,
    y: val.y,
    duration: 0.8,
  });
});

imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 1.5,
    backgroundColor: "yellowgreen",
    duration: 0.3,
  });
});

imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
    duration: 0.3,
  });
});
