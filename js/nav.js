"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

// Add function that displays the submit form

function showSubmitStory(evt){
  evt.preventDefault();
  hidePageComponents();
  putStoriesOnPage();
  $storyForm.show();
}

$submitAnchor.on("click", showSubmitStory);

// Add star to page
// check if favorites array is on page
// if on page, then make star bold
// else, do nothing

//add favorites to the DOM


function showFavorites(){
  // hide all stories
  hidePageComponents();
  loadFavorites();
  
  
  $favStoriesList.show();
}

function showMyStories(){
  populateUserStories()
  hidePageComponents();
  $myStoriesList.show();
}

$favStoriesList.on("click",'.star',showFavorites)

$navFavorites.on("click",showFavorites);

$navMyStories.on("click",showMyStories);