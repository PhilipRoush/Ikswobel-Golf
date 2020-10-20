class RemoveMatchPlayersGolfCourseName < ActiveRecord::Migration[6.0]
  def change
    remove_column :match_players, :golf_course_name, :string
  end
end
