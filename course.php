<?php
$burl='/';
$courses = array_diff(scandir('./courses_data'), array('..', '.'));
if (in_array($slug,$courses)){
  $course=json_decode(file_get_contents("./courses_data/".$slug."/outline.json"));
?>
<!doctype html>
<html lang="en">
  <head>
    <title><?php echo $course->title; ?> | PUCITx</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="description" content="<?php echo $course->description; ?>" />
    <meta name="keywords" content="PUCIT,help,desk,pucithd,team, PUCITx" />
           <!-- Twitter Card data -->
    <meta name="twitter:card" content="<?php echo $course->title; ?> | PUCITx">
    <meta name="twitter:site" content="@PUCITx">
    <meta name="twitter:title" content="<?php echo $course->title; ?> | PUCITx">
    <meta name="twitter:creator" content="@PUCITx">
          <!-- Twitter Summary card images must be at least 120x120px -->
    <meta name="twitter:image" content="http://pucitx.pucithd.com/courses_data/<?php echo $slug; ?>/social_photo.png">

          <!-- Open Graph data -->
    <meta property="og:title" content="<?php echo $course->title; ?> | PUCITx" />
    <meta property="og:description" content="<?php echo $course->description; ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://pucitx.pucithd.com/course/<?php echo $slug; ?>" />
    <meta property="og:image" content="http://pucitx.pucithd.com/courses_data/<?php echo $slug; ?>/social_photo.png" />
    <meta property="og:site_name" content="PUCITx" />
    <meta property="fb:app_id" content="544341492343243" />
    <meta property="fb:admins" content="100001633757789" />




    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,900" rel="stylesheet">

    <link rel="stylesheet" href="<?php echo $burl; ?>assets/css/bootstrap.css">
    <link rel="stylesheet" href="<?php echo $burl; ?>assets/css/animate.css">
    <link rel="stylesheet" href="<?php echo $burl; ?>assets/css/owl.carousel.min.css">

    <link rel="stylesheet" href="<?php echo $burl; ?>assets/fonts/ionicons/css/ionicons.min.css">
    <link rel="stylesheet" href="<?php echo $burl; ?>assets/fonts/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo $burl; ?>assets/fonts/flaticon/font/flaticon.css">

    <!-- Theme Style -->
    <link rel="stylesheet" href="<?php echo $burl; ?>assets/css/style.css">
    <style media="screen">
    .modal-dialog {
    max-width: 800px;
    margin: 30px auto;
    }



    .modal-body {
    position:relative;
    padding:0px;
    }
    .close {
    position:absolute;
    right:-30px;
    top:0;
    z-index:999;
    font-size:2rem;
    font-weight: normal;
    color:#fff;
    opacity:1;
    }
    </style>
  </head>
  <body>
    <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1&appId=745296145630598&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
    <header role="banner">

      <nav class="navbar navbar-expand-md navbar-dark bg-light">
        <div class="container">
          <a class="navbar-brand absolute" href="<?php echo $burl; ?>"><img src="<?php echo $burl; ?>assets/images/logo.png" alt="PUCITx" height="100"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse navbar-light" id="navbarsExample05">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" href="<?php echo $burl; ?>">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="<?php echo $burl; ?>courses">Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://blog.pucithd.com/">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="<?php echo $burl; ?>about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- END header -->

    <section class="site-hero overlay" data-stellar-background-ratio="0.5" style="background-image: url(<?php echo $burl; ?>courses_data/<?php echo $slug; ?>/social_photo.png);">
      <div class="container">
        <div class="row align-items-center site-hero-inner justify-content-center">
          <div class="col-md-12">

            <div class="mb-5 element-animate">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <h1 class="mb-0"><?php echo $course->title; ?></h1>
                  <p>By <?php echo $course->lecturer; ?></p>
                  <p class="lead mb-5"><?php echo $course->description; ?></p>

                  <p><a href="#series" class="btn btn-primary mr-2">Start Series</a></p>
                </div>
                <div class="col-md-4">
                  <img src="<?php echo $burl; ?>courses_data/<?php echo $slug; ?>/social_photo.png" alt="Image placeholder" class="img-fluid">
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>
    </section>
    <!-- END section -->


     <section class="site-section episodes" id="series">
      <div class="container">

        <?php for ($i=0; $i < sizeof($course->lectures); $i++) { ?>
        <div class="row <?php echo ($i%2==0) ? "bg-light" : "" ; ?>bg-light align-items-center p-4 episode">
          <div class="col-md-3">
            <span class="episode-number"><?php echo $i + 1; ?></span>
          </div>
          <div class="col-md-9">
            <p class="meta">Lecture <?php echo $i + 1; ?> <a href="#"  class="video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/<?php echo $course->lectures[$i]->videoID; ?>" data-target="#myModal">Runtime <?php echo $course->lectures[$i]->runtime; ?></a></p>
            <h2><a href="#"  class="video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/<?php echo $course->lectures[$i]->videoID; ?>" data-target="#myModal"><?php echo $course->lectures[$i]->title; ?></a></h2>
            <p><?php echo $course->lectures[$i]->description; ?></p>
          </div>
        </div>
      <?php } ?>
      </div>
    </section>







    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">


          <div class="modal-body">

           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <!-- 16:9 aspect ratio -->
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="" id="video"  allowscriptaccess="always">></iframe>
            </div>


          </div>

        </div>
      </div>
    </div>










    <section class="site-section bg-light">
      <div class="container">
        <div class="fb-comments" data-href="http://pucitx.pucithd.com/course/<?php echo $slug; ?>" data-width="100%"></div>
      </div>
    </section>
    <!-- END section -->







    <footer class="site-footer" style="background-image: url(<?php echo $burl; ?>assets/images/big_image_3.jpg);">
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

    <script src="<?php echo $burl; ?>assets/js/jquery-3.2.1.min.js"></script>
    <script src="<?php echo $burl; ?>assets/js/jquery-migrate-3.0.0.js"></script>
    <script src="<?php echo $burl; ?>assets/js/popper.min.js"></script>
    <script src="<?php echo $burl; ?>assets/js/bootstrap.min.js"></script>
    <script src="<?php echo $burl; ?>assets/js/owl.carousel.min.js"></script>
    <script src="<?php echo $burl; ?>assets/js/jquery.waypoints.min.js"></script>
    <script src="<?php echo $burl; ?>assets/js/jquery.stellar.min.js"></script>


    <script src="<?php echo $burl; ?>assets/js/main.js"></script>
    <script type="text/javascript">
    $(document).ready(function() {

    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);



    // when the modal is opened autoplay it
    $('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" );
    })


    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc);
    })






    // document ready
    });
    </script>
    <?php include_once 'tracking.php'; ?>
  </body>
</html>
<?php } ?>
