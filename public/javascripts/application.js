// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(){
  $(".settings_toggle").click(function(){
    $(this).toggleClass("selected");
    $(".settings_panel").slideToggle("slow");
  });
  
  $(".mode_option").click(function(){
    $(".mode_option").removeClass("selected");
    $(".mode_panel").hide();
  });
  
  $(".math_option").click(function(){
    $(this).addClass("selected");
    $(".math_panel").show();
  });
  
  $(".matrix_option").click(function(){
    $(this).addClass("selected");
    $(".matrix_panel").show();
  });
  
});