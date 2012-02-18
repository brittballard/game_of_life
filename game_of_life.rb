require 'rubygems'
require 'sinatra'
require 'uri'
require 'mongo'

get '/' do
  erb :game_of_life
end

get '/specs' do
  erb :jasmine
end