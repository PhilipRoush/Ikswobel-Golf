class AddMatchPlayersGolfCourseName < ActiveRecord::Migration[6.0]
  def change
    add_column :match_players, :golf_course_name, :string
  end
end
