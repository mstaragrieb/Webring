<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Webring</title>
  <meta name="description" content="Webring">
  <meta name="author" content="Tara Elizabeth Grieb">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- JAVASCRIPT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script charset="utf-8" src="js/glide.js"></script>
  <script charset="utf-8" src="js/app.js"></script>

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet">
  <!--  font-family: 'Roboto Condensed', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
  -->

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="Skeleton_Css/normalize.css">
  <link rel="stylesheet" href="Skeleton_Css/skeleton.css">
  <link rel="stylesheet" href="Skeleton_Css/app.css">
  <!-- Required Core Stylesheet -->
  <link rel="stylesheet" href="Glide_Css/glide.core.min.css">

  <!-- Optional Theme Stylesheet -->
  <link rel="stylesheet" href="Glide_Css/glide.theme.min.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <!-- <link rel="icon" type="image/png" href="http://getskeleton.com/examples/landing/images/favicon.png"> -->

</head>
<body>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="header">
       <div class="wrapper">
          <div class="nav-menu">
              <label for="drawer-control" class="drawer-toggle"></label>
              <input type="checkbox" id="drawer-control" class="drawer">
              <div>
                <label for="drawer-control" class="drawer-close"></label>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Search</a>
              </div>
          </div>
          <div class="ring-title">This webring’s unique name lorem</div>
          <div class="logo"></div>
       </div>
  </div>

  <div class="section hero">
    <div class="container">
      <div class="row">
        <div class="column">
        </div>
      </div>
    </div>
  </div>
  <div class="content">
     <div class="glide">
              <div class="glide__track" data-glide-el="track">
                  <ul class="glide__slides">
                      <li class="glide__slide">0</li>
                      <li class="glide__slide">1</li>
                      <li class="glide__slide">2</li>
                  </ul>
              </div>
              <div class="glide">
                  <div class="glide__arrows" data-glide-el="controls">
                      <button class="glide__arrow glide__arrow--prev" data-glide-dir="<">prev</button>
                      <button class="glide__arrow glide__arrow--next" data-glide-dir=">">next</button>
                  </div>

                  <div class="glide__bullets" data-glide-el="controls[nav]">
                      <button class="glide__bullet" data-glide-dir="=0"></button>
                      <button class="glide__bullet" data-glide-dir="=1"></button>
                      <button class="glide__bullet" data-glide-dir="=2"></button>
                  </div>
              </div>
          </div>
  </div>
  <div class="section values">
    <div class="container">
      <div class="row">
        <div class="one-third column value">
          <h2 class="value-multiplier">67%</h2>
          <h5 class="value-heading">Purchase Increase</h5>
          <p class="value-description">Percentage of users more likely to purchase on mobile friendly site.</p>
        </div>
        <div class="one-third column value">
          <h2 class="value-multiplier">90%</h2>
          <h5 class="value-heading">Multi-device Users</h5>
          <p class="value-description">Most of the world accesses the internet on multiple devices.</p>
        </div>
        <div class="one-third column value">
          <h2 class="value-multiplier">66%</h2>
          <h5 class="value-heading">Sad Users</h5>
          <p class="value-description">Percentage of users that are frustrated with page load times.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="section get-help">
    <div class="container">
      <h3 class="section-heading">Need help getting started?</h3>
      <p class="section-description">Skeleton is an amazingly easy place to start with responsive development. If you want to learn more, just visit the documentation!</p>
      <a class="button button-primary" href="http://getskeleton.com">View Skeleton Docs</a>
    </div>
  </div>

  <div class="section categories">
    <div class="container">
      <h3 class="section-heading">Responsive Images</h3>
      <p class="section-description">Skeleton images sit easily in grid with .u-max-full-width class. I suggest exploring solution to serving different images based on device size.</p>
      <div class="row">
        <div class="one-half column category">
          <img class="u-max-full-width" src="http://getskeleton.com/examples/landing/images/placeholder.png">
        </div>
        <div class="one-half column category">
          <img class="u-max-full-width" src="http://getskeleton.com/examples/landing/images/placeholder.png">
        </div>
      </div>
    </div>
  </div>

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>
