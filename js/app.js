var comicsList = {
  "comicsData": [
    {
      "comicName": "Midnight Furies",
      "authorNames": "Jess Herron",
      "comicDescription": "Zoe is an ex-basketball-ace desperate for any way to play the game who was forced by the death of her parents to drop out of school and support her brothers. Luckily, her mysterious friend Chase can get her into the most off-the-wall tournament no one's ever heard of- one where you play for time added onto your life! But Zoe's gotta be careful. Chase is playing her own game... and it might cost them more than just points. ~~~~~ DRAMA/ACTION/SLOWBURN ROMANCE F|M F|F, 14+, updates 3x a month",
      "comicGenres": [
        "Action",
        "Drama",
        "LGBTQ+"
        ],
      "comicBadges": [{
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      },
      {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      },
      {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      },
      {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      },
      {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }]
    },
    {
      "comicName": "Long Exposure",
      "authorNames": true,
      "comicDescription": "gold",
      "comicGenres": null,
      "comicBadges": {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }
    },
    {
      "comicName": "",
      "authorNames": true,
      "comicDescription": "gold",
      "comicGenres": null,
      "comicBadges": {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }
    },
    {
      "comicName": "",
      "authorNames": true,
      "comicDescription": "gold",
      "comicGenres": null,
      "comicBadges": {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }
    },
    {
      "comicName": "",
      "authorNames": true,
      "comicDescription": "gold",
      "comicGenres": null,
      "comicBadges": {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }
    },
    {
      "comicName": "",
      "authorNames": true,
      "comicDescription": "gold",
      "comicGenres": null,
      "comicBadges": {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }
    },
    {
      "comicName": "",
      "authorNames": true,
      "comicDescription": "gold",
      "comicGenres": null,
      "comicBadges": {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }
    },
    {
      "comicName": "",
      "authorNames": true,
      "comicDescription": "gold",
      "comicGenres": null,
      "comicBadges": {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }
    },
    {
      "comicName": "",
      "authorNames": true,
      "comicDescription": "gold",
      "comicGenres": null,
      "comicBadges": {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }
    },
    {
      "comicName": "",
      "authorNames": true,
      "comicDescription": "gold",
      "comicGenres": null,
      "comicBadges": {
        "badgeLink": "foo",
        "badgeURL": "foo",
        "badgeImage": "foo"
      }
    }
  ]
}

function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

ready(function() {
  // your code here
  new Glide('.glide', {
    type: 'carousel',
    autoplay: 0,
    animationDuration: 600,
    animationTimingFunc: 'linear',
    perView: 3,
    peek: {
        before: 0,
        after: 80
    },
    focusAt: 0,
    breakpoints: {
        1024: {
            perView: 2
        },
        600: {
            perView: 1
    }
  }
  }).mount();
});
