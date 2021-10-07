json.extract! listing, :id, :creator, :purchase, :num_bedrooms, :num_bathrooms, :sqft, :price, :street_number, :street_name, :city_name, :state, :zipcode, 
json.imageUrl url_for(listing.picture)