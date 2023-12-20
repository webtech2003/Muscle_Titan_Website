const parentElementAll = document.querySelectorAll('.post-container');
const childImage = document.querySelectorAll(".post-container img");
const childTextAll = document.querySelectorAll(".post-text");



childImage.forEach(img => {
    img.addEventListener('mouseover', (event)=> {
        event.target.parentNode.querySelector('.post-text').classList.toggle("post-text-large-screen");;
    });
    img.addEventListener('mouseout', (event) => {
        event.target.parentNode.querySelector('.post-text').classList.toggle("post-text-large-screen");;
    })
});


parentElementAll.forEach((container) =>{
    container.addEventListener("click", (event)=>{
        switch(container.id){
            case "workoutContainer":
                window.open("workoutPage.html", '_blank');
                break;
            case "nutritionsContainer":
                window.open("dietPlansPage.html", '_blank');
                break;
            case "articlesContainer":
                window.open("articlesPage.html", '_blank');
                break;

        }
    });
});






