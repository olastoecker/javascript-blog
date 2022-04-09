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
  // console.log(activeArticles);
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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = 'post-author';

function clearMessages(){
  document.getElementById('messages').innerHTML = '';
}

function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

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
  // console.log(links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  // console.log(html);
}
generateTitleLinks();

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const generateTags = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    // console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray){
    // console.log(tag);
      /* generate HTML of the link */
      let linkHTMLTag = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html.insertAdjacentHTML('beforeend', linkHTMLTag);
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    generateTags.innerHTML = html;
  /* END LOOP: for every article: */
  }
  generateTags();

  function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    /* find all tag links with class active */
    const tagActiveLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    /* START LOOP: for each active tag link */
    for (let tagActiveLink of tagActiveLinks){
      /* remove class active */
      tagActiveLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const allTags = document.querySelectorAll('a[href="' + href + '"]');
    /* START LOOP: for each found tag link */
    for (let allTag of allTags){
      /* add class active */
      allTag.classList.add('active');
    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags(){
    /* find all links to tags */
    allTags = document.querySelectorAll('a[href^="#tag-"]');
    /* START LOOP: for each link */
    for (let allTag of allTags){
      /* add tagClickHandler as event listener for that link */
      allTag.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }

  addClickListenersToTags();

function generateAuthors(){
  /* find all authors */
  const authors = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every author: */
  for(let author of authors){
    /* find tags wrapper */
    const generateAuthors = document.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get authors from data-author attribute */
    const articleAuthors = article.getAttribute('data-author');
    /* insert HTML of all the links into the tags wrapper */
    generateAuthors.innerHTML = html;
    /* generate link */
    const link = '<li><a href="#author-' + articleAuthors + '">' + articleAuthors + '</a></li>';
    /* insert html */
    generateAuthors.innerHTML = html;
  /* END LOOP: for every author: */
  }
  generateAuthors();
