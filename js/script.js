'use strict';

function titleClickHandler(){
  console.log('Link was clicked!');
  console.log(event);
  event.preventDefault();

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  const clickedElement = this; 
  console.log('clickedElement:', clickedElement);


  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  /* [IN PROGRESS] get 'href' attribute from the clicked link */

  const articleSelector = href;
  href = clickedElement.getAttribute('#article-1 #article-2 #article-3 #article-4 #article-5 #article-6 #article-7 #article-8 #article-9 #article-10');



  /* [IN PROGRESS] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = querySelector;
  

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

