class RemoveMatchOrganizerId < ActiveRecord::Migration[6.0]
  def change
    remove_column :matches, :organizer_id, :integer
  end
end
