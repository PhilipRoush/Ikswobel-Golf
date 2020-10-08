class CreatePastRounds < ActiveRecord::Migration[6.0]
  def change
    create_table :past_rounds do |t|
      t.integer :score
      t.datetime :timestamp
      t.integer :golf_course_id
      t.integer :user_id

      t.timestamps
    end
  end
end


