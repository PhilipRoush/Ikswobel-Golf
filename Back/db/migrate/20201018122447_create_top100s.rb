class CreateTop100s < ActiveRecord::Migration[6.0]
  def change
    create_table :top100s do |t|
      t.float :longitude
      t.float :latitude
      t.string :name
      t.string :state
      t.string :city
      t.string :street_address
      t.string :description
      t.string :image_address
      t.integer :rank
      
      t.timestamps
    end
  end
end
