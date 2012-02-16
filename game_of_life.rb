require 'rubygems'
require 'sinatra'
require 'uri'
require 'mongo'

uri = URI.parse(ENV['MONGOHQ_URL'])
conn = Mongo::Connection.from_uri(ENV['MONGOHQ_URL'])
db = conn.db(uri.path.gsub(/^\//, ''))

get '/' do
  "Are you ready for the worlds sexiest game of life?"
end