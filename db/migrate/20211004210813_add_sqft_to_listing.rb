class AddSqftToListing < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :sqft, :integer
  end
end
