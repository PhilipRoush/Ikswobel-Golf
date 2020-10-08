class CreateMatchPlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :match_players do |t|
      t.integer :user_id
      t.integer :match_id
      
      t.timestamps
    end
  end
end
