class EditUsersAndListings < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string

    add_column :listings, :longitude, :float
    add_column :listings, :latitude, :float
  end
end
