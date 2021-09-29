# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Listing.destroy_all

User.destroy_all

user1 = User.create!(email: "chumbawumba@gmail.com", password: "password")
user2 = User.create!(email: "alexcrooks@gmail.com", password: "Th1sI$IMp0$si3Le")
user3 = User.create!(email: "demo@gmail.com", password: "greatasset")

listing1 = Listing.create(
    #  creator       :integer          not null
#  purchase      :boolean          not null
#  price         :integer          not null
#  num_bedrooms  :integer          not null
#  num_bathrooms :float            not null
#  street_number :integer          not null
#  street_name   :string           not null
#  city_name     :string           not null
#  state         :string           not null
#  zipcode       :integer          not null
)