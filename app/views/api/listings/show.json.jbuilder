json.listing do
    json.set! @listing.id do
        json.extract! @listing, :creator, :purchase, :price, :street_number, :street_name, :city_name, :zipcode
    end
end