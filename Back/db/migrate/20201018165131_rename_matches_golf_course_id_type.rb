class RenameMatchesGolfCourseIdType < ActiveRecord::Migration[6.0]
  def change
    change_column :matches, :name, :string
  end
end
