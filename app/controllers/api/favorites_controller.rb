class Api::FavoritesController < ApplicationController
    def create
        @favorite.new
        @favorite.creator_id = current_user.id
        @favorite.listing_id = params[:id]
        unless @favorite.save
            flash[:errors] = @favorite.errors.full_messages
          end
          redirect_to listing_url(params[:id])
    end

    def index
      @favorites = Favorite.all
      if (params[:listing_id])
        @favorites = @favorites.where(listing_id: params[:listing_id])
      end
      render "/api/favorites/index"
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
        redirect_to listing_url(@favorite.listing_id)
      end

      private
      def like_params
        params.require(:favorite).permit(:favoriter_id, :listing_id)
      end
end
