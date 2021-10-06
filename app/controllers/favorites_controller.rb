class FavoritesController < ApplicationController
    def create
        @favorite.new
        @favorite.creator_id = current_user.id
        @favorite.listing_id = params[:id]
        unless @favorite.save
            flash[:errors] = @favorite.errors.full_messages
          end
          redirect_to listing_url(params[:id])
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
        redirect_to listing_url(@favorite.listing_id)
      end
end
