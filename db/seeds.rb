# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Listing.delete_all
User.delete_all
Favorite.destroy_all

user1 = User.create!(email: "chumbawumba@gmail.com", password: "password")
user2 = User.create!(email: "alexcrooks@gmail.com", password: "Th1sI$IMp0$si3Le")
user3 = User.create!(email: "demo@gmail.com", password: "greatasset")
user4 = User.create!(email: "spencertest@aaopen.com", password: "cApta1nN3m0")
user5 = User.create!(email: "peskyraccoon@gmail.com", password: "canIgetAn000000hy3h")
user6 = User.create!(email: "chubbyboy@biggie.com", password: "0nTheSc3n3")

usersArr = [user1, user2, user3, user4, user5, user6]

listing1 = Listing.create!(
creator_id: user1.id,
purchase: 'true',
price: 5000000,
num_bedrooms: 6,
num_bathrooms: 5.5,
sqft: 4000,
street_number: '900',
street_name: 'Battery St.',
city_name: 'San Francisco',
state: 'California',
zipcode: 94111)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/aasfshowpic.png')

listing1.picture.attach(io: file, filename: 'aasf.png')

listing2 = Listing.create!(
creator_id: user3.id,
purchase: 'false',
price: 3456,
num_bedrooms: 6,
num_bathrooms: 5.5,
sqft: 4300,
street_number: 90,
street_name: '5th Avenue',
city_name: 'New York',
state: 'New York',
zipcode: 10011)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/aanyshowpic.png')

listing2.picture.attach(io: file, filename: 'aany.png')

listing3 = Listing.create!(
creator_id: user2.id,
purchase: 'true',
price: 18048,
num_bedrooms: 2,
sqft: 5000,
num_bathrooms: 10.0,
street_number: 401,
street_name: 'Mile of Cars Way',
city_name: 'National City',
state: 'California',
zipcode: 91950)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/itttechshowpic.png')

listing3.picture.attach(io: file, filename: 'itttechshow.png')

listing4 = Listing.create!(
creator_id: user1.id,
purchase: 'true',
price: 5000000,
num_bedrooms: 4,
sqft: 2500,
num_bathrooms: 3,
street_number: 742,
street_name: 'Evergreen Terrace',
city_name: 'Springfield',
state: 'Oregon',
zipcode: 97403)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/evergreenshowpic.png')

listing4.picture.attach(io: file, filename: 'evergreenshow.png')

listing5 = Listing.create!(
creator_id: user1.id,
purchase: 'false',
price: 5928,
num_bedrooms: 3,
sqft: 1793,
num_bathrooms: 3,
street_number: 2066,
street_name: 'Crist Drive',
city_name: 'Los Altos',
state: 'California',
zipcode: 94024)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/applegarageshowpic.jpeg')

listing5.picture.attach(io: file, filename: 'applegarageshow.jpg')

listing6 = Listing.create!(
creator_id: user3.id,
purchase: 'true',
price: 4500000,
num_bedrooms: 5,
sqft: 6000,
num_bathrooms: 5,
street_number: 400,
street_name: 'Broad St',
city_name: 'Seattle',
state: 'Washington',
zipcode: 98109)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/spaceneedleshowpic.jpeg')

listing6.picture.attach(io: file, filename: 'spaceneedleshow.jpg')

listing7 = Listing.create!(
creator_id: user2.id,
purchase: 'true',
price: 2950000,
num_bedrooms: 3,
sqft: 1600,
num_bathrooms: 3,
street_number: 1,
street_name: 'Bowerton Drive',
city_name: 'Beaverton',
state: 'Oregon',
zipcode: 97005)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/nikeshowpic.jpeg')

listing7.picture.attach(io: file, filename: 'nikeshow.png')

listing8 = Listing.create!(
creator_id: user2.id,
purchase: 'false',
price: 3998,
num_bedrooms: 6,
sqft: 2136,
num_bathrooms: 10,
street_number: 175,
street_name: 'Olive Avenue',
city_name: 'Burbank',
state: 'California',
zipcode: 91502)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/codingdojoshow.png')

listing8.picture.attach(io: file, filename: 'codingdojo.png')

listing9 = Listing.create!(
creator_id: user2.id,
purchase: 'false',
price: 4687,
num_bedrooms: 5,
sqft: 2422,
num_bathrooms: 8,
street_number: 7650,
street_name: 'Mission Valley Road',
city_name: 'San Diego',
state: 'California',
zipcode: 92108)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/artintshow.png')

listing9.picture.attach(io: file, filename: 'artint.png')

listing10 = Listing.create!(
creator_id: user1.id,
purchase: 'true',
price: 1394700,
num_bedrooms: 2,
sqft: 1458,
num_bathrooms: 1,
street_number: 4406,
street_name: 'Kingswell Avenue',
city_name: 'Los Angeles',
state: 'California',
zipcode: 90027)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/disneyfirstshow.jpeg')

listing10.picture.attach(io: file, filename: 'disneyfirst.jpg')

listing11 = Listing.create!(
creator_id: user3.id,
purchase: 'false',
price: 1877,
num_bedrooms: 5,
sqft: 1458,
num_bathrooms: 5,
street_number: 1526,
street_name: 'H Street',
city_name: 'Sacramento',
state: 'California',
zipcode: 95814)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/ca_gov_mansion.jpeg')

listing11.picture.attach(io: file, filename: 'cagovmansion.jpg')

listing12 = Listing.create!(
creator_id: user1.id,
purchase: 'true',
price: 2464000,
num_bedrooms: 3,
sqft: 1750,
num_bathrooms: 3,
street_number: 823,
street_name: 'H Street',
city_name: 'Austin',
state: 'Texas',
zipcode: 78701)

file = open('https://rillow-seeds.s3.us-west-1.amazonaws.com/kahootshow.png')

listing12.picture.attach(io: file, filename: 'kahootoffice.png')

listingsArr = [listing1, listing2, listing3, listing4, listing5, listing6, listing7, listing8, listing9, listing10, listing11, listing12]

favorite1 = Favorite.create!(listing_id: listingsArr.sample().id, favoriter_id: usersArr.sample().id)
favorite2 = Favorite.create!(listing_id: listingsArr.sample().id, favoriter_id: usersArr.sample().id)
favorite3 = Favorite.create!(listing_id: listingsArr.sample().id, favoriter_id: usersArr.sample().id)
favorite4 = Favorite.create!(listing_id: listingsArr.sample().id, favoriter_id: usersArr.sample().id)
favorite5 = Favorite.create!(listing_id: listingsArr.sample().id, favoriter_id: usersArr.sample().id)
favorite6 = Favorite.create!(listing_id: listingsArr.sample().id, favoriter_id: usersArr.sample().id)