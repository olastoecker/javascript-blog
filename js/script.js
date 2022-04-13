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
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags.list',
  optCloudClassCount = '5',
  optCloudClassPrefix = 'tag-size-',
  optAuthorsListSelector = '.authors.list';

function generateTitleLinks(customSelector = ''){

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);

  // let html = '';

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
function calculateTagsParams(tags){
  const params = {max: '0', min: '999999'};
  for(let tag in tags){
    // console.log(tag + ' is used ' + tags[tag] + ' times');
    if(tags[tag] > params.max){
      params.max = tags[tag];
    }
    if(tags[tag] < params.min){
      params.min = tags[tag];
    }
  }
  return params;
}

function calculateTagClass(count, params){
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
  return optCloudClassPrefix + classNumber;
}

function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  // console.log(articles);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    // console.log(articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    // console.log('articleTagsArray:', articleTagsArray);
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
    // console.log(tag);
      /* generate HTML of the link */
      let linkHTMLTag = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      // html.insertAdjacentHTML('beforeend', linkHTMLTag); // jak uzyc adjacentHTML zamiast tego co ponizej, zeby dzialalo? //
      html = html + linkHTMLTag;
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags.hasOwnProperty(tag)){
      /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams);

  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
    /* [NEW] generate code of a link and add it to a allTagsHTML */
    const tagLinkHTML = '<li>' + calculateTagClass(allTags[tag], tagsParams) + '</li>';
    allTagsHTML += tagLinkHTML;
    console.log('tagLinkHTML:', tagLinkHTML);
  }
  /* [NEW] END LOOP: for each tag in allTags: */

  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTagsHTML;
}

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
  for(let tagActiveLink of tagActiveLinks){
    /* remove class active */
    tagActiveLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagsAll = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let tagAll of tagsAll){
    /* add class active */
    tagAll.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const tagsAll = document.querySelectorAll('a[href^="#tag-"]');
  // console.log(tagsAll);
  /* START LOOP: for each link */
  for(let tagAll of tagsAll){
    /* add tagClickHandler as event listener for that link */
    tagAll.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

function calculateAuthorsParams(authors){
  const authorsParams = {max: '0', min: '999999'};
  for(let author in authors){
    console.log(author + ' is used ' + authors[author] + ' times');
    if(authors[author] > authorsParams.max){
      authorsParams.max = authors[author];
    }
    if(authors[author] < authorsParams.min){
      authorsParams.min = authors[author];
    }
  }
  return authorsParams;
}

/* czy to ponizej w ogole jest potrzebne czy mnie nieco ponioslo? */

function calculateAuthorsClass(count, params){
  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
  return optCloudClassPrefix + classNumber;
}

function generateAuthors(){
  /* [NEW] create a new variable allAuthors with an empty object */
  let allAuthors = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    // console.log('test', optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get authors from data-author attribute */
    const author = article.getAttribute('data-author');
    /* generate link */
    let linkHTMLAuthor = '<li><a href="#author-' + author + '">' + author + '</a></li>';
    /* insert HTML */
    html = html + linkHTMLAuthor;
    /* [NEW] check if this link is NOT already in allAuthors */
    if(!allAuthors.hasOwnProperty(author)){
      /* [NEW] add author to allAuthors object */
      allAuthors[author] = 1;
    } else {
      allAuthors[author]++;
    }
    /* END LOOP: for every article: */
    authorWrapper.innerHTML = html;
  }
  /* insert HTML of all the links into the tags wrapper */

  /* [NEW] find list of authors in right column */
  const authorsList = document.querySelector(optAuthorsListSelector);
  const authorsParams = calculateAuthorsParams(allAuthors);
  console.log('authorsParams:', authorsParams);
  /* [NEW] create variable for all links HTML code */
  let allAuthorsHTML = '';
  /* [NEW] start LOOP for each author in allAuthors */
  for (let author in allAuthors){
  /* [NEW] generate HTML and add to allAuthorsHTML */
    const linkAuthorsHTML = '<li>' + calculateAuthorsClass(allAuthors[author], authorsParams) + '</li>';
    allAuthorsHTML +- linkAuthorsHTML;
    console.log('linkAuthorsHTML:', linkAuthorsHTML);
  }
  /* [NEW] add html to authorsList */
  authorsList.innerHTML = allAuthorsHTML;
}

function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "author" and extract author from the "href" constant */
  const author = href.replace('#author-', '');
  console.log(author);
  /* find all author links with class active */
  const authorActiveLinks = document.querySelectorAll('a.active[href^="#author-"]');
  /* START LOOP: for each active author link */
  for(let authorActiveLink of authorActiveLinks){
    /* remove class active */
    authorActiveLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all author links with "href" attribute equal to the "href" constant */
  const authorsAll = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found author link */
  for (let authorAll of authorsAll){
    /* add class active */
    authorAll.classList.add('active');
    /* END LOOP: for each found author link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors(){
  /* find all links related to authors */
  const authorsAll = document.querySelectorAll('a[href^="#author-"]');
  console.log(authorsAll);
  /* START LOOP: for each author */
  for(let authorAll of authorsAll){
    /* add authorClickHandler as event listener for that link */
    authorAll.addEventListener('click', authorClickHandler);
    /* END LOOP: for each author */
  }
}

generateTitleLinks();
generateTags();
addClickListenersToTags();
generateAuthors();
addClickListenersToAuthors();
