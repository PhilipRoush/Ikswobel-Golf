class RenameMatchesGolfCourseId < ActiveRecord::Migration[6.0]
  def change
    rename_column :matches, :golf_course_id, :name
  end
end
