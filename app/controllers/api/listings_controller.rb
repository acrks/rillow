class Api::ListingsController < ApplicationController

    def create
        @listing = Listing.new(listing_params)
        if @listing.save
          render :show
        else
          render json: @listing.errors.full_messages, status: 401
        end
      end

    def show
        @listing = Listing.find(params[:id])
    end

    def index
        @listings = Listing.all
        if params[:creator_id] 
          @listings = @listings.where(creator_id: params[:creator_id])
        end
        # @listings = listings.includes(:favorite_users)
        render :index
    end

    def update
      @listing = Listing.find(params[:id])
      #@listing.creator_id = current_user.id
      if @listing.update(listing_params)
        render :show
      else
        render json: @listing.errors.full_messages, status: 422
      end
    end
  

    def destroy
        @listing = Listing.find(params[:id])
        # @listings = Listing.all
        if @listing.destroy
          render :show
        else
          render json: @listing.errors.full_messages, status: 422
        end
    end

    private
    def listing_params
        params.require(:listing).permit(
            :purchase,
            :price,
            :sqft,
            :num_bedrooms,
            :num_bathrooms,
            :street_number,
            :street_name,
            :city_name,
            :state,
            :picture,
            :zipcode,
            :longitude,
            :latitude,
            :creator_id
        )
    end
end 