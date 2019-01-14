class Book < ApplicationRecord
  has_many :comments
  # has_and_belongs_to_many :users


  has_many :favorite_books

  # has_and_belongs_to_many :favorites, :join_table => "favorites", :class_name => "User"
  # has_many :comments, as: :commentable
  belongs_to :genre, class_name: 'Genre', foreign_key: 'genre_id'
end
