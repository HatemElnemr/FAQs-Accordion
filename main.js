const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".faq-icon .icon");
    for (let q of faqQuestions) {
      if (q !== question) {
        q.nextElementSibling.style.display = "none";
        const icon = q.querySelector(".faq-icon .icon");
        icon.src = "/images/icon-plus.svg";
      }
    }
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    if (icon.src.includes("/images/icon-plus.svg")) {
      icon.src = "/images/icon-minus.svg";
    } else {
      icon.src = "/images/icon-plus.svg";
    }
  });
});
