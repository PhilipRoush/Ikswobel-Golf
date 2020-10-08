class RemoveUserOrganizer < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :organizer, :boolean
  end
end
