@listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :creator, :purchase, :price, :street_number, :street_name, :city_name, :state, :zipcode
    #   json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
    end
end