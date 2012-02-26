ENV['RACK_ENV'] = 'test'

require 'rack'
require 'capybara'
require 'capybara/cucumber'

Capybara.app = eval("Rack::Builder.new {( " + File.read(File.dirname(__FILE__) + '/../../config.ru') + "\n )}")

class SomeWorld
  include Capybara::DSL
end

World do
  SomeWorld.new
end