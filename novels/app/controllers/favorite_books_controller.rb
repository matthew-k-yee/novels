class FavoriteBooksController < ApplicationController
  before_action :set_book

  def index
    @favorites = current_user.favorite_books
  end

  def create
    if Favorite.create(favorited: @book, user: current_user)
      redirect_to @book, notice: 'Book has been favorited'
    else
      redirect_to @book, alert: 'Something went wrong...*sad panda*'
    end
  end

  def destroy
    Favorite.where(favorited_id: @book.id, user_id: current_user.id).first.destroy
    redirect_to @book, notice: 'Book is no longer in favorites'
  end

  private

  def set_project
    @book = Book.find(params[:project_id] || params[:id])
  end
end
