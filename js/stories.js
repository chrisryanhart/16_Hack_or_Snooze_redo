"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

// Makes HTML for the stories

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

async function handleFavoriteClick(e){
  //story

  const $star = $(e.target);

  console.log('e listener worked');
  const $storyLi = e.target.parentElement.id;

  await currentUser._addOrRemoveStory($storyLi);

  $star.toggleClass('fas far');

}

$favStoriesList.on("click",".fa-star",handleFavoriteClick);


function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  // if in user favorite array, then show 

  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    // const storyId = story.storyId

    // Have to loop through this array b/c array has story objects
    // you do have to loop through two times

    if (currentUser){
      const favorites = currentUser.favorites

      const isFavorite = favorites.some(f => f.storyId === story.storyId)
  
      // will need to skip section if no user is logged in
  
      if(isFavorite){
        // add full star
        $story.prepend($boldStar);
     
      }else{
        // add empty star
        $story.prepend($emptyStar);
      }
    }


    // add click listener

    // $('#e6493a14-4518-4f93-9950-50acf354758a').children()[0].remove()
    // const $star =  $story.children()[0];

    // $star.on("click"), function(e){

    //   const $storyLi = e.target.parent().attr('id');

    //   await currentUser._addOrRemoveStory($storyLi);
    
    // };



    $allStoriesList.append($story);
  }
  $allStoriesList.show();
}



// $('i').on("click", handleFavoriteClick)

// This will attach after the function is called
$allStoriesList.on("click", ".fa-star", handleFavoriteClick)
// 

//when submit clicked, get form data
//Add button click listener

async function newStoryToList(e){
  e.preventDefault();

  //get data from form
  const $title = $('#title').val();
  const $author = $('#author').val();
  const $url = $('#url').val();

  const storyData = {
    "author": `${$author}`,
    "title": `${$title}`,
    "url": `${$url}`
  };

  // const token = currentUser.loginToken;

  const response = await storyList.addStory(currentUser, storyData);

  //create instance of Story
  //Pass into gen.S.Markup()

  const $story = generateStoryMarkup(response);

  // add star to li

  // $story.prepend($emptyStar);

  $story.prepend($emptyStar);

  $allStoriesList.prepend($story);

  $storyForm.hide();

  //add the response to the top of the DOM list

  //hide form
  $storyForm.addClass("hidden")

  //reset form
  $storyForm.trigger('reset');

}

$storySubmitBtn.on("click", newStoryToList)

function loadFavorites(){
  console.log('loaded favorites');

  $favStoriesList.empty();

  if(currentUser.favorites.length === 0){
    return "no stories to add";
  }else{
    for(let story of currentUser.favorites){
      let $story = generateStoryMarkup(story);
      addStar(story, $story);
      $favStoriesList.append($story);
    }
  }
}

function addStar(storyFromList, $story){
  const favorites = currentUser.favorites

  const isFavorite = favorites.some(f => f.storyId === storyFromList.storyId)

  // will need to skip section if no user is logged in

  if(isFavorite){
    // add full star
    $story.prepend($boldStar);
 
  }else{
    // add empty star
    $story.prepend($emptyStar);
  }
}

function populateUserStories(){
  //take currentUser.ownstories
  //add to array
  //update the DOM
  //send POST request to the API
  $myStoriesList.empty();

  for (let story of currentUser.ownStories){
    //generate HTML markup
    let $story = generateStoryMarkup(story);
    addStar(story, $story);
    // $story.prepend
    $story.prepend($trashCan);
    $myStoriesList.append($story);

    //everytime I click on myStoriesList, 
    //add trashcan
    //append to list 
  }
}

$myStoriesList.on("click",'.fa-trash',deleteStory);

async function deleteStory(e){
  // Remove parent storyß
  const $storyLi = $(e.target.parentElement);
  const storyId = $storyLi.attr('id');

  e.target.parentElement.remove(); 

  
  // Remove from DOM and API
  // implement with click listener
  // do I need to get a story instanceß

  await storyList.deleteStoryFromAPI(currentUser,storyId);
  const test = 1;
  
}

$myStoriesList.on("click",'.fa-star',handleFavoriteClick);


// let newStory = await StoryList.addStory(currentUser, {title: "happy", author: 
//"Me", url: "http://meow.com"})

// const response = await axios.post(
//   `${BASE_URL}/stories`, 
//   {
//     "token": `${token}`,
//     "story": data
//   });
// return response;