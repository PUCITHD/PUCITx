<?php $courses = array_diff(scandir('courses_data'), array('..', '.')); ?>
<!doctype html>
<html lang="en">
  <head>
    <title>PUCITx by PUCIT Help Desk</title>

    <meta name="description" content="PUCITx is a project of PUCIT Help Desk. We gather lectures of PUCIT Instructors and provide them on a single platform hence making sure that all the knowledge needed by you is just a click away. It is designed to enlighten everyone to enhance teaching and learning skills on-campus, online, and beyond." />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="keywords" content="PUCIT,help,desk,pucithd,team, PUCITx" />
           <!-- Twitter Card data -->
    <meta name="twitter:card" content="PUCITx by PUCIT Help Desk">
    <meta name="twitter:site" content="@PUCITx">
    <meta name="twitter:title" content="PUCITx by PUCIT Help Desk">
    <meta name="twitter:creator" content="@PUCITx">
          <!-- Twitter Summary card images must be at least 120x120px -->
    <meta name="twitter:image" content="http://pucitx.pucithd.com/assets/images/logo.png">

          <!-- Open Graph data -->
    <meta property="og:title" content="About PUCITx" />
    <meta property="og:description" content="PUCITx is a project of PUCIT Help Desk. We gather lectures of PUCIT Instructors and provide them on a single platform hence making sure that all the knowledge needed by you is just a click away. It is designed to enlighten everyone to enhance teaching and learning skills on-campus, online, and beyond." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://pucitx.pucithd.com/" />
    <meta property="og:image" content="http://pucitx.pucithd.com/assets/images/logo.png" />
    <meta property="og:site_name" content="PUCITx" />
    <meta property="fb:app_id" content="544341492343243" />
    <meta property="fb:admins" content="100001633757789" />

    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,900" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css">

    <link rel="stylesheet" href="assets/fonts/ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/flaticon/font/flaticon.css">

    <!-- Theme Style -->
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>

    <header role="banner">

      <nav class="navbar navbar-expand-md navbar-dark bg-light">
        <div class="container">
          <a class="navbar-brand absolute" href="#"><img src="assets/images/logo.png" alt="PUCITx" height="100"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse navbar-light" id="navbarsExample05">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="courses">Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://blog.pucithd.com/">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about">About</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
    <!-- END header -->

    <section class="site-hero overlay" data-stellar-background-ratio="0.5" style="background-image: url(assets/images/big_image_1.jpg);">
      <div class="container">
        <div class="row align-items-center site-hero-inner justify-content-center">
          <div class="col-md-8 text-center">

            <div class="mb-5 element-animate">
              <h1>Learn From Top Institute</h1>
              <p class="lead">Learn skills from top instructors of leading institute.</p>
            </div>


          </div>
        </div>
      </div>
    </section>
    <!-- END section -->

    <section class="school-features d-flex" style="background-image: url(assets/images/big_image_3.jpg);">

      <div class="inner">
        <div class="media d-block feature">
          <div class="icon"><span class="flaticon-video-call"></span></div>
          <div class="media-body">
            <h3 class="mt-0">Online trainings from experts</h3>
            <p>Learn Online from expert having years of experience in specific field.</p>
          </div>
        </div>

        <div class="media d-block feature">
          <div class="icon"><span class="flaticon-student"></span></div>
          <div class="media-body">
            <h3 class="mt-0">Learn anywhere in the world</h3>
            <p>No matter where you from, you should not stop learning. You can learn from anywhere.</p>
          </div>
        </div>

        <div class="media d-block feature">
          <div class="icon"><span class="flaticon-video-player-1"></span></div>
          <div class="media-body">
            <h3 class="mt-0">Creative learning video</h3>
            <p>With interective video learning you will be able to do courses on self pace.</p>
          </div>
        </div>


        <div class="media d-block feature">
          <div class="icon"><span class="flaticon-audiobook"></span></div>
          <div class="media-body">
            <h3 class="mt-0">Audio learning</h3>
            <p>Clear voice of instructor will help you to listen and understand core concepts easily.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- END section -->


    <section class="site-section bg-light">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center">
            <h2>Recent Courses</h2>
            <p class="lead">Some Recent courses added on PUCITx.</p>
          </div>
        </div>
        <div class="row top-course">

          <?php foreach ($courses as $data_item) { ?>
          <?php $course=json_decode(file_get_contents('courses_data/'.$data_item.'/outline.json')); ?>
          <div class="col-lg-3 col-md-4 col-sm-6 col-12">
            <a href="course/<?php echo $data_item; ?>" class="course">
              <img src="courses_data/<?php echo $data_item; ?>/social_photo.png" alt="Image placeholder">
              <h2><?php echo $course->title; ?></h2>
              <p>By <?php echo $course->lecturer; ?></p>
            </a>
          </div>
          <?php } ?>
        </div>
      </div>
    </section>
    <!-- END section -->

    <section class="site-section">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center">
            <h2>Meet Your Instructors</h2>
            <p class="lead">Meet top instructors from PUCIT.</p>
          </div>
        </div>
        <section class="school-features text-dark d-flex">

          <div class="inner">
            <div class="media d-block feature text-center">
              <img src="http://www.arifbutt.me/wp-content/uploads/2017/08/Optimized-ariff_one.jpg" alt="Arif Butt Photo" class="mb-3">
              <div class="media-body">
                <h3 class="mt-0">Arif Butt</h3>
                <p class="instructor-meta">Operating Systems Expert</p>
                <p>Arif Butt is working as an Assistant Professor in PUCIT, since 2005. His teaching interests are Operating Systems, Embedded Systems, and System Programming.</p>
              </div>
            </div>

            <div class="media d-block feature text-center">
              <img src="assets/images/teachers/Bilal_Shahzad.jpg" alt="Image placeholder" class="mb-3">
              <div class="media-body">
                <h3 class="mt-0">Bilal Shahzad</h3>
                <p class="instructor-meta">Solution Architect</p>
                <p>Bilal Shahzad is teaching at PUCIT since 2008. He is Microsoft Certified Trainer and Microsoft Most Valuable Professional. He is also Program Architect at IBEX.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
    <!-- END section -->


    <footer class="site-footer" style="background-image: url(assets/images/big_image_3.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Design: <a href="https://colorlib.com" target="_blank">Colorlib</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          </div>
        </div>
      </div>
    </footer>
    <!-- END footer -->

    <!-- loader -->
    <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214"/></svg></div>

    <script src="assets/js/jquery-3.2.1.min.js"></script>
    <script src="assets/js/jquery-migrate-3.0.0.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/jquery.waypoints.min.js"></script>
    <script src="assets/js/jquery.stellar.min.js"></script>


    <script src="assets/js/main.js"></script>
  </body>
</html>
