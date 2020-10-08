class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.integer :organizer_id
      t.string :title
      t.text :description
      t.integer :golf_course_id
      t.string :date
      t.string :time
      
      t.timestamps
    end
  end
end
