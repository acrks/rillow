class AddUnitNumberToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :unit_number, :string
  end
end
