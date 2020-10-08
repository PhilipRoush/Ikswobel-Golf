class CreateGolfCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :golf_courses do |t|
      t.float :longitude
      t.float :latitude
      t.string :name
      t.string :state
      t.string :city
      t.string :street_address

      t.timestamps
    end
  end
end
