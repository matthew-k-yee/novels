class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy]

  # GET /books
  def index
    puts params.inspect
    if !(params[:genre_id].present?)
      @books = Book.all
    else
      @books = Book.where(genre_id: params[:genre_id])
    end

    render json: @books

  end

  # GET /books/1
  def show
    render json: @book
  end

  # POST /books
  def create

      @book = Book.new(book_params)

      if @book.save
        render json: @book, status: :created, location: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
  end

  # PATCH/PUT /books/1
  def update
    if params[:user_id].present?
      @fav_book = Book.find(params[:id])
      if current_user.books << @fav_book
        render json: @fav_book
      else
        render json: @fav_book.errors, status: :unprocessable_entity
      end
    else
      if @book.update(book_params)
        render json: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end
  end

  # DELETE /books/1
  def destroy
    if params[:user_id].present?
      @fav_book = Book.find(params[:id])
      current_user.books.delete(@fav_book)
      render json: @fav_book
    else
      @book.destroy
      render json: @book
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def book_params
      params.require(:book).permit(:title, :author, :summary, :genre_id)
    end
end
