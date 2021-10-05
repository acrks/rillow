class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create, :delete]

    def create
        @listing = Listing.new(listing_params)
        if @listing.save
          render :show
        else
          render json: @listing.errors.full_messages, status: 422
        end
      end

    def show
        @listing = Listing.find(params[:id])
    end

    def index
        @listings = Listing.all
        # @listings = listings.includes(:favorite_users)
        render :index
    end

    def update
      @listing = Listing.find(params[:id])
  
      if @listing.update(listing_params)
        render :show
      else
        render json: @listing.errors.full_messages, status: 422
      end
    end
  

    def destroy
        @listing = Listing.find(params[:id])
        @listings = Listing.all
        if @listing.destroy
          render :index
        else
          render json: @listing.errors.full_messages, status: 422
        end
    end

    private
    def listing_params
        params.require(:listing).permit(
            :creator_id,
            :purchase,
            :price,
            :sqft,
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