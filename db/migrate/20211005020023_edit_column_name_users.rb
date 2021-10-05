class EditColumnNameUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :listings, :creator, :creator_id
  end
end
