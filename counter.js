const btn = document.querySelectorAll(".btn");
const countValue = document.querySelector(".count span");
let count = 0;
btn.forEach((btn) =>
    btn.addEventListener("click", () => {
        if (btn.classList.contains("btn-incement")) count++;
        else if (btn.classList.contains("btn-decrement")) count--;
        else count = 0;
        countValue.textContent = count;
    })
);

// another way
// btnIncement.addEventListener("click", () => {
//    count++
//     countValue.textContent = count ;
// });

// btnReset.addEventListener("click", () => {
//     count = 0;
//     countValue.textContent = count;
// });

// btnDecrement.addEventListener("click", () => {
//    count--
//    countValue.textContent = count;
// });
