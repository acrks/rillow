class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :creator, null: false
      t.boolean :purchase, null: false
      t.integer :price, null: false
      t.integer :num_bedrooms, null: false
      t.float :num_bathrooms, null: false
      t.integer :street_number, null: false
      t.string :street_name, null: false
      t.string :city_name, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false

      t.timestamps
    end
    add_index(:listings, [:street_number, :street_name, :zipcode])
  end
end
