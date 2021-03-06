# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_20_004752) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "golf_courses", force: :cascade do |t|
    t.float "longitude"
    t.float "latitude"
    t.string "name"
    t.string "state"
    t.string "city"
    t.string "street_address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "match_players", force: :cascade do |t|
    t.integer "user_id"
    t.integer "match_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "matches", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "golf_course_id"
    t.string "date"
    t.string "time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "handicap"
    t.integer "user_id"
    t.string "full_name"
    t.string "course_name"
  end

  create_table "past_rounds", force: :cascade do |t|
    t.integer "score"
    t.datetime "timestamp"
    t.integer "golf_course_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "top100s", force: :cascade do |t|
    t.float "longitude"
    t.float "latitude"
    t.string "name"
    t.string "state"
    t.string "city"
    t.string "street_address"
    t.string "description"
    t.string "image_address"
    t.integer "rank"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.string "city"
    t.string "state"
    t.integer "handicap"
  end

end
