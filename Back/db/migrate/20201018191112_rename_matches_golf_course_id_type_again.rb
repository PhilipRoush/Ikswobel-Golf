class RenameMatchesGolfCourseIdTypeAgain < ActiveRecord::Migration[6.0]
  def change
    change_column :matches, :golf_course_id, 'integer USING CAST(golf_course_id AS integer)'
  end
end
