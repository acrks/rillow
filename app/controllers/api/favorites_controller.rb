class Api::FavoritesController < ApplicationController
  
  def create
        @favorite = Favorite.new(fav_params)
        # @favorite.favoriter_id = params[:favoriter_id]
        # @favorite.listing_id = params[:listing_id]
        # @favorite.listing_id = params[:id]
        unless @favorite.save
            flash[:errors] = @favorite.errors.full_messages
        end
        render :show
    end

    def show
      if params[:favoriter_id] && params[:listing_id]
        @favorite = Favorite.find_by(listing_id: params[:listing_id], favoriter_id: params[:favoriter_id])
        render :show
      elsif(params[:id])
        @favorite = Favorite.find_by(id: params[:id])
        render :show
      else
        render json: ['No favorite found with that id'], status: 401
      end

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
      @favorite = Favorite.find_by(id: params[:id])
      if @favorite
          @favorite.destroy
      else
          render json: ['No favorite found with that id'], status: 401
      end
    end

      private
      def fav_params
        params.require(:favorite).permit(:favoriter_id, :listing_id)
      end
end
