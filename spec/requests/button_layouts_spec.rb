require 'spec_helper'

describe "button layout" do
  
  describe "mode options" do
    modes = [ "math", "stats", "vars", "graph", "trig", "matrix" ]
    modes.each do |button|
      it "should have a #{button} button" do
        get "/"
        response.should have_selector("a", :content => "#{button.capitalize}")
      end
    end  
  end
  
  describe "stack options" do
    stack = [ "swap", "view" ]
    stack.each do |button|
      it "should have a #{button} button" do
        get "/"
        response.should have_selector("a", :content => "#{button.capitalize}")
      end
    end
  end
  
  describe "input" do
    it "should have an ENTER button" do
      get "/"
      response.should have_selector("a", :content => "ENTER")
    end
  end
  
  describe "keyboard" do
    numpad_xtras = "."
    numbers = (0..9).collect { |c| "#{c}" }
    
    numpad = numbers << numpad_xtras
    numpad.collect! do |number|
      "num_#{number}"
    end

    symbols = [ "lambda", "pi", "atilde" ]
    symbols.collect! do |symbol|
      "symbol_#{symbol}"
    end
    
    keys = numpad + symbols
    keys.each do |key|
      it "should have a #{key} key" do
        get "/"
        response.should have_selector("a", :id => "#{key}")
      end
    end
  end
end