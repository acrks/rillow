class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create, :delete]

    def create
        @listing = Listing.create!(listing_params)
        render :show
      end

    def show
        @listing = Listing.find(params[:id])
    end

    def index
        @listings = Listing.all
        render :index
    end

    def delete
        
    end

    private
    def listing_params
        params(:listing).permit(
            :creator,
            :purchase,
            :price,
            :num_bedrooms,
            :num_bathrooms,
            :street_number,
            :street_name,
            :city_name,
            :state,
            :zipcode
        )
    end

end 