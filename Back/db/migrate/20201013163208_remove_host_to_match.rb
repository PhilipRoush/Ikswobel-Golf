class RemoveHostToMatch < ActiveRecord::Migration[6.0]
  def change
    remove_column :matches, :host, :integer
  end
end
