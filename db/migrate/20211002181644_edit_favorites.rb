class EditFavorites < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, :favoriter_id
    add_index :favorites, :listing_id
  end
end
