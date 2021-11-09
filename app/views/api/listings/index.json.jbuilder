@listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :creator, :purchase, :price, :num_bathrooms, :num_bedrooms, :sqft, :street_number, :street_name, :city_name, :state, :zipcode, :longitude, :latitude
      json.image_url url_for(listing.picture)
    end
end