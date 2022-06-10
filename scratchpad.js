class Car {
    constructor(brand) {
      this.carname = brand;
    }
    static hello(x) {
      return "Hello " + x.carname;
    }
  }
  
  mycar = new Car("Ford");
  
  document.getElementById("demo").innerHTML = Car.hello(mycar);



  StoryList.getStories() //response

  [
    {
      "author": "Matt Lane",
      "createdAt": "017-11-09T18:38:39.409Z",
      "storyId": "5081e46e-3143-4c0c-bbf4-c22eb11eb3f5",
      "title": "The Best Story Ever",
      "updatedAt": "017-11-09T18:38:39.409Z",
      "url": "https://www.rithmschool.com/blog/do-web-developers-need-to-be-good-at-math",
      "username": "hueter"
    }
  ]

  Story //obj

  {
    "story": {
      "author": "Matt Lane",
      "createdAt": "017-11-09T18:38:39.409Z",
      "storyId": "5081e46e-3143-4c0c-bbf4-c22eb11eb3f5",
      "title": "The Best Story Ever",
      "updatedAt": "017-11-09T18:38:39.409Z",
      "url": "https://www.rithmschool.com/blog/do-web-developers-need-to-be-good-at-math",
      "username": "hueter"
    }
  }

  $('#e6493a14-4518-4f93-9950-50acf354758a').append('<p>test</p>');
  $('#e6493a14-4518-4f93-9950-50acf354758a').prepend('<i class="fa-light fa-star"></i>');
  $('#e6493a14-4518-4f93-9950-50acf354758a').prepend('<span>test</span>');
  $('#e6493a14-4518-4f93-9950-50acf354758a').prepend('<span><i class="fas fa-star"></i></span>');
  $('#e6493a14-4518-4f93-9950-50acf354758a').prepend('<span><i class="far fa-star"></i></span>');
  
  $('#e6493a14-4518-4f93-9950-50acf354758a').children()[0].remove()
  
  // <i class="fa-light fa-star"></i>

  // <i class="fa-solid fa-star"></i>


  <i class="far fa-star"></i>

  <i class="fas fa-star"></i>


  storyId = '4a7cca44-9729-4e88-bd4e-80c79a895f66'


      // $('#e6493a14-4518-4f93-9950-50acf354758a').children()[0].remove()
    // const $star =  $story.children()[0];

    // $star.on("click"), function(e){

    //   const $storyLi = e.target.parent().attr('id');

    //   await currentUser._addOrRemoveStory($storyLi);
    
