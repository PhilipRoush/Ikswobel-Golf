class AddMatchCourseName < ActiveRecord::Migration[6.0]
  def change
    add_column :matches, :course_name, :string
  end
end
