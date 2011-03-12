// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(){

  //help toggle
  $(".help_toggle").click(function(){
    $(this).toggleClass("selected");
    $(".help_panel").slideToggle("slow");
  });

  //settings toggle
  $(".settings_toggle").click(function(){
    $(this).toggleClass("selected");
    $(".settings_panel").slideToggle("slow");
  });
  
  //keyboard toggle
  $(".keyboard_option").click(function(){
    $(this).toggleClass("selected");
    $(".keyboard_panel").slideToggle("slow");
  });
  
  //mode options hide open panels on click
  $(".mode_option").click(function(){
    $(".mode_option").removeClass("selected");
    $(".mode_panel").hide();
  });
  
  //math mode
  $(".math_option").click(function(){
    $(this).addClass("selected");
    $(".math_panel").show();
  });
  
  //matrix mode
  $(".matrix_option").click(function(){
    $(this).addClass("selected");
    $(".matrix_panel").show();
  });
  
  //stats mode
  $(".stats_option").click(function(){
    $(this).addClass("selected");
    $(".stats_panel").show();
  });
  
  //vars mode
  $(".vars_option").click(function(){
    $(this).addClass("selected");
    $(".vars_panel").show();
  });
  
  //graph mode
  $(".graph_option").click(function(){
    $(this).addClass("selected");
    $(".graph_panel").show();
  });
  
  //trig mode
  $(".trig_option").click(function(){
    $(this).addClass("selected");
    $(".trig_panel").show();
  });
  
});