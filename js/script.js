'use strict';

function titleClickHandler(event){
  // console.log('Link was clicked!');
  // console.log(event);
  event.preventDefault();

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
  const clickedElement = this;
  // console.log('clickedElement:', clickedElement);


  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post.active');
  console.log(activeArticles);
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* [DONE] get 'href' attribute from the clicked link */

  const href = clickedElement.getAttribute('href');
  // const articleSelector = href;
  // #article-1 #article-2


  const articleId = href.replace('#', '');
  // console.log(articleId);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector('.post[id="'+ articleId + '"]');
  // console.log(targetArticle);


  /* [DONE] add class 'active' to the correct article */
  targetArticle.classList.add('active');

}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }

function generateTitleLinks(){
  // console.log(generateTitleLinks);

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  // console.log(articles);

  let html = '';

  for(let article of articles){
    /* get the article id */
    const articleId = article.getAttribute('id');
    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    // console.log(linkHTML);
    /* insert link into titleList */
    titleList.insertAdjacentHTML('beforeend', linkHTML);

  }
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  // console.log(html);


}

generateTitleLinks();
