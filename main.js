let nums = document.querySelectorAll(".num");
let section = document.querySelector(".stats");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((ele) => {
        let goal = Number(ele.dataset.goal);
        console.log(goal);
        let count = setInterval(() => {
          ele.textContent++;
          if (ele.textContent == goal) {
            clearInterval(count);
          }
        }, 1);
      });
    }
    started = true;
  }
};
