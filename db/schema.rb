# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_08_191917) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "favoriter_id", null: false
    t.integer "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["favoriter_id"], name: "index_favorites_on_favoriter_id"
    t.index ["listing_id", "favoriter_id"], name: "index_favorites_on_listing_id_and_favoriter_id", unique: true
    t.index ["listing_id"], name: "index_favorites_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.boolean "purchase", null: false
    t.integer "price", null: false
    t.integer "num_bedrooms", null: false
    t.float "num_bathrooms", null: false
    t.integer "street_number", null: false
    t.string "street_name", null: false
    t.string "city_name", null: false
    t.string "state", null: false
    t.integer "zipcode", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sqft"
    t.float "longitude"
    t.float "latitude"
    t.string "unit_number"
    t.index ["street_number", "street_name", "zipcode"], name: "index_listings_on_street_number_and_street_name_and_zipcode"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest"
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.index ["email"], name: "index_users_on_email"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
