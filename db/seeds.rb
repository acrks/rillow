# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Listing.delete_all
User.delete_all
Favorite.destroy_all

user1 = User.create!(email: "chumbawumba@gmail.com", password: "password")
user2 = User.create!(email: "alexcrooks@gmail.com", password: "Th1sI$IMp0$si3Le")
user3 = User.create!(email: "demo@gmail.com", password: "greatasset")

listing1 = Listing.create!(
creator_id: user1.id,
purchase: 1,
price: 5000000,
num_bedrooms: 6,
num_bathrooms: 5.5,
sqft: 4000,
street_number: '900',
street_name: 'Battery St.',
city_name: 'San Francisco',
state: 'California',
zipcode: 94111)

listing2 = Listing.create!(
creator_id: user3.id,
purchase: false,
price: 3456,
num_bedrooms: 6,
num_bathrooms: 5.5,
sqft: 4300,
street_number: 90,
street_name: '5th Avenue',
city_name: 'New York',
state: 'New York',
zipcode: 10011)

listing3 = Listing.create!(
creator_id: user2.id,
purchase: 1,
price: 18048,
num_bedrooms: 2,
sqft: 5000,
num_bathrooms: 10.0,
street_number: 401,
street_name: 'Mile of Cars Way',
city_name: 'National City',
state: 'California',
zipcode: 91950)

usersArr = [user1, user2, user3]
listingsArr = [listing1, listing2, listing3]

favorite1 = Favorite.create!(listing_id: listingsArr.sample().id, favoriter_id: usersArr.sample().id)
favorite2 = Favorite.create!(listing_id: listingsArr.sample().id, favoriter_id: usersArr.sample().id)
favorite3 = Favorite.create!(listing_id: listingsArr.sample().id, favoriter_id: usersArr.sample().id)