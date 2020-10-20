class AddMatchFullName < ActiveRecord::Migration[6.0]
  def change
    add_column :matches, :full_name, :string
  end
end
