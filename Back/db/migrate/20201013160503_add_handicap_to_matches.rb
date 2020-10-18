class AddHandicapToMatches < ActiveRecord::Migration[6.0]
  def change
    add_column :matches, :handicap, :integer
  end
end
