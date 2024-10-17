let main = document.querySelector("#main");
let imageDiv = document.querySelector("#image");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

imageDiv.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 2,
    duration: 0.3,
    backgroundColor: "yellowgreen",
  });
});

imageDiv.addEventListener("mouseout", function () {
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
    backgroundColor: "#fff",
  });
});
