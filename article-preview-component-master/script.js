const shareBtn= document.querySelector('.share-cta');
const shareLinks=document.querySelector('.social-share-group');

shareBtn.addEventListener('click', ()=>{
    shareLinks.classList.toggle('hidden');
    shareLinks.classList.toggle('selected');
});


    
