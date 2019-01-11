class FavoritesController < ApplicationController
  before_action :set_genre, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy]


  def index
    @favorites = Favorite.all
    render json: @favorites
  end

  def create
    @favorite = Favorite.new(favorite_params)
    render json: @favorite
  end

  def destory
    @favorite.destory
  end

private
  def favorite_genre
    @genre = Genre.find(params[:id])
  end

  def favorite_params
    params.require(:favorite).permit(:user_id, :book_id)
  end

end
