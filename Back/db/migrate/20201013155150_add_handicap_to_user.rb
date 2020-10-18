class AddHandicapToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :handicap, :integer
  end
end
