const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeDtls = document.querySelectorAll(".resume-details");

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {

        
        resumeBtns.forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");

        resumeDtls.forEach((dtl) => {
            dtl.classList.remove("active");
        });
        resumeDtls[idx].classList.add("active");
    });
});



