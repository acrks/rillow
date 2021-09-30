@listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :creator, :purchase, :price, :street_number, :street_name, :city_name, :zipcode
    #   Add in image_url for home
    #   json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
    end
  end