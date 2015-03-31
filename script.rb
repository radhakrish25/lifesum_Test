# This script suppose that a table tbluser is created
# before running this script, make sure to create that table

require 'active_record' # make sure this is the last version "4.2.1"
require 'active_support/duration'
require 'faker'

ActiveRecord::Base.establish_connection( adapter: 'mysql2',
                                        database: 'test_job_development',
                                        user: 'root',
                                        password: 'root')

class User < ActiveRecord::Base
  self.table_name = 'tbluser'
  self.primary_key = 'userid'
end

1000.times do
  begin
  attrs = {
    firstname: Faker::Name.first_name, 
    lastname: Faker::Name.last_name,
    username: Faker::Internet.user_name,
    height: Random.rand(120..180),
    age: Random.rand(15..90),
    password: Faker::Internet.password(8, 20),
    device: %w(android online apple).sample,
    
    birthdate: Faker::Date.between(15.years.ago, 90.years.ago)
  }
  user = User.create(attrs)
  puts "Created User: #{user.attributes.inspect}"
  rescue ActiveRecord::RecordNotUnique => e
    puts "Error: #{e.message}"
    redo
  end
end
