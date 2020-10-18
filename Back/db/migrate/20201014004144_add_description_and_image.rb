class AddDescriptionAndImageandRank < ActiveRecord::Migration[6.0]
  def change
    add_column :golf_courses, :description, :string
    add_column :golf_courses, :image_address, :string
    add_column :golf_courses, :rank, :integer
  end
end
