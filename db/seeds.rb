# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Listing.destroy_all

User.destroy_all

user = User.create!(email: "guest@gmail.com", password: "password")
user1 = User.create!(email: "demo@gmail.com", password: "password")
user2 = User.create!(email: "ashe1@gmail.com", password: "password")
user3 = User.create!(email: "alistar1@gmail.com", password: "password")
user4 = User.create!(email: "ryze1@gmail.com", password: "password")