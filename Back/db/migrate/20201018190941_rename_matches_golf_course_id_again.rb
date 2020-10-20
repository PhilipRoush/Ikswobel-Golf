class RenameMatchesGolfCourseIdAgain < ActiveRecord::Migration[6.0]
  def change
    rename_column :matches, :name, :golf_course_id
  end
end
