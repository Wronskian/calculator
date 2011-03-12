require 'spec_helper'

describe "page layout" do
  describe "home" do
  
    it "should have a settings panel" do
      get "/"
      response.should have_selector("div", :class => "settings_panel")
    end
    
    it "should have a help panel" do
      get "/"
      response.should have_selector("div", :class => "help_panel")
    end
    
    it "should have a math panel" do
      get "/"
      response.should have_selector("div", :class => "math_panel mode_panel")      
    end
    
    it "should have a math sidebar" do
      get "/"
      response.should have_selector("div", :class => "math_panel mode_panel")
    end
    
    it "should have a matrix panel" do
      get "/"
      response.should have_selector("div", :class => "matrix_panel mode_panel")
    end
    
    it "should have a matrix sidebar" do
      get "/"
      response.should have_selector("div", :class => "matrix_panel mode_panel")
    end
    
  end
end
