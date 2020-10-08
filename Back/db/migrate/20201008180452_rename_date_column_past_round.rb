class RenameDateColumnPastRound < ActiveRecord::Migration[6.0]
  def change
    remove_column :past_rounds, :date, :datetime
  end
end
