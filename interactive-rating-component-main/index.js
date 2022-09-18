const numOfRatingBtns=document.getElementsByClassName("rating-btn").length;
const submitBtn=document.querySelector("a.submit-btn");
// const thankyouContainer= document.querySelector(".")

let selectedRating;
let ratingSelected=false;

for(let i=0; i<numOfRatingBtns;i++){
    document.getElementsByClassName("rating-btn")[i].addEventListener(
        "click", function(){
        
            let activeRatingBtns= document.getElementsByClassName("active");

            if(activeRatingBtns.length>0){
                activeRatingBtns[0].className=activeRatingBtns[0].className.replace(" active","");

            }   
            this.className+=" active";
            selectedRating=this.id;
            ratingSelected=true;
        }
    )
}


submitBtn.addEventListener("click", function(){
    if(ratingSelected){
        document.querySelector(".container").style.display="none";

    document.getElementById("thank-you-container").classList.remove("hidden");

    document.getElementById("selectedRating").textContent=selectedRating;
    }else{
       document.querySelector(".warning").classList.remove("hidden");
    }
})