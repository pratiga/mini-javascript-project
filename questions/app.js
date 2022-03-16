const questions = document.querySelectorAll(".question");
questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");
       // console.log(btn)

        btn.addEventListener("click", function () {
        console.log("i am js developer")
            questions.forEach(function (item) {
               console.log(item);
               if (item !== question){
                  item.classList.remove("show-text");
                }
            });

             question.classList.toggle("show-text");
        });
        
});