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

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

//when submit clicked, get form data
//Add button click listener

async function newStoryToList(e){
  e.preventDefault();
  console.log('yay');

  //get data from form
  const $title = $('#title').val();
  const $author = $('#author').val();
  const $id = $('#url').val();

  const data = {
    "author": `${$author}`,
    "title": `${$title}`,
    "id": `${$id}`
  };

  // const token = currentUser.loginToken;

  const response = await StoryList.addStory(currentUser, data);

  //hide form
  $storyForm.addClass("hidden")

  //reset form
  $storyForm.trigger('reset');

}

$storySubmitBtn.on("click", newStoryToList)

// let newStory = await StoryList.addStory(currentUser, {title: "happy", author: 
//"Me", url: "http://meow.com"})

// const response = await axios.post(
//   `${BASE_URL}/stories`, 
//   {
//     "token": `${token}`,
//     "story": data
//   });
// return response;