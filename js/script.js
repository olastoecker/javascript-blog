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

  /* [DONE] get 'href' attribute from the clicked link */

  const href = clickedElement.getAttribute('href');
  // const articleSelector = href;
  // #article-1 #article-2


 const articleId = href.replace('#', '');
 console.log(articleId);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector('.post[id="'+ articleId + '"]');
  console.log(targetArticle);


  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function GenerateTitleLinks(){

    /* remove contents of titleList */

    /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */
}

generateTitleLinks();