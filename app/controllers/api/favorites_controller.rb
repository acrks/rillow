class Api::FavoritesController < ApplicationController
  
  def create
        @favorite = Favorite.new(fav_params)
        # @favorite.favoriter_id = params[:favoriter_id]
        # @favorite.listing_id = params[:listing_id]
        # @favorite.listing_id = params[:id]
        unless @favorite.save
            flash[:errors] = @favorite.errors.full_messages
          end
          # render `/api/listings/#{params[:listing_id]}`
    end

    def index
      @favorites = Favorite.all
      if(params[:favoriter_id])
        @favorites = @favorites.where(favoriter_id: params[:favoriter_id])
      end
      if(params[:listing_id] && params[:favoriter_id])
        @favorites = @favorites.where(listing_id: params[:listing_id], favoriter_id: params[:favoriter_id])
      end
      render "/api/favorites/index"
    end

    def destroy
      @favorite = Favorite.find(params[:id])
      @favorite.destroy
      # render `/api/listings/#{params[:listing_id]}`
    end

      private
      def fav_params
        params.require(:favorite).permit(:favoriter_id, :listing_id)
      end
end
