class AddHostToMatch < ActiveRecord::Migration[6.0]
  def change
    add_column :matches, :host, :integer
  end
end
