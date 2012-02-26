require 'rubygems'
require 'sinatra'
require 'uri'
require 'mongo'

APP_ROOT = File.dirname(__FILE__)
require File.join(APP_ROOT, 'partials')

helpers Sinatra::Partials

get '/' do
  erb :game_of_life
end

get '/specs' do
  erb :jasmine
end
