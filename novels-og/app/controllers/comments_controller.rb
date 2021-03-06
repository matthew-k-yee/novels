class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy]


  # GET /comments
  def index
    # @comments = Comment.all
    puts params.inspect
    if !(params[:book_id].present?)
      @comments = Comment.all
    else
      @comments = Comment.where(book_id: params[:book_id])
    end

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    puts params.inspect
    @comment = current_user.comments.new(comment_params)
    puts @comment
    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    @comment = Comment.find(params[:id])
    
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:review, :user_id, :book_id)
    end
end
