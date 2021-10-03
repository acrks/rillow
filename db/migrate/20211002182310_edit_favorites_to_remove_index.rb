class EditFavoritesToRemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :favorites, [:favoriter_id, :listing_id]
    add_index :favorites, [:listing_id, :favoriter_id], unique: true
  end
end
