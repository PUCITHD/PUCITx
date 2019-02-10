<?php
require 'flight/Flight.php';

Flight::route('/', function(){
  require_once 'main.php';
});

Flight::route('/courses', function(){
  include 'courses.php';
});

Flight::route('/about', function(){
  include 'about.php';
});

Flight::route('/course/@slug', function($slug){
  include 'course.php';
});

Flight::start();
