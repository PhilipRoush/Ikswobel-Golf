class AddMatchesCreatedBy < ActiveRecord::Migration[6.0]
  def change
    add_column :matches, :created_by, :integer
  end
end
