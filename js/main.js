"use strict";

// So we don't have to keep re-finding things on page, find DOM elements once:

const $body = $("body");

const $storiesLoadingMsg = $("#stories-loading-msg");
const $allStoriesList = $("#all-stories-list");
// const $myStoriesList = $("#my-stories-list");
// const $favStoriesList = $("#fav-stories-list");

const $loginForm = $("#login-form");
const $signupForm = $("#signup-form");

const $navLogin = $("#nav-login");
const $navUserProfile = $("#nav-user-profile");
const $navLogOut = $("#nav-logout");

const $navFavorites = $("#favorites-anchor");
const $navMyStories = $("#user-stories-anchor")

const $storyForm = $("#story-form");
const $submitAnchor = $("#submit-anchor");
const $storySubmitBtn = $("#storySubmit");

const $emptyStar = '<i class="far fa-star"></i>';
const $boldStar = '<i class="fas fa-star"></i>';
const $trashCan = '<i class="fas fa-trash"></i>';

const $favStoriesList = $('#fav-stories-list');
const $myStoriesList = $('#my-stories-list');

const $navBrand = $('.navbar-brand');
const $nav = $('.nav');
const $allNavLinks = $('.allNavLinks');

const $loginBtn = $('#loginBtn');

/** To make it easier for individual components to show just themselves, this
 * is a useful function that hides pretty much everything on the page. After
 * calling this, individual components can re-show just what they want.
 */

function hidePageComponents() {
  const components = [
    $allStoriesList,
    $favStoriesList,
    $myStoriesList,
    $loginForm,
    $signupForm,
    $storyForm
  ];
  components.forEach(c => c.hide());
}

/** Overall function to kick off the app. */

async function start() {
  console.debug("start");

  hidePageComponents();
  // $allNavLinks.show();

  // "Remember logged-in user" and log in, if credentials in localStorage
  await checkForRememberedUser();
  await getAndShowStoriesOnStart();

  if(!currentUser){
    $allNavLinks.hide();
  }else{
    $allNavLinks.show()
  }

}


// $loginBtn.on("click",start);






//ensure stories show up in the right sections
// favorites & ownStories






// Once the DOM is entirely loaded, begin the app

console.warn("HEY STUDENT: This program sends many debug messages to" +
  " the console. If you don't see the message 'start' below this, you're not" +
  " seeing those helpful debug messages. In your browser console, click on" +
  " menu 'Default Levels' and add Verbose");
$(start);
