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
