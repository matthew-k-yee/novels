class Book < ApplicationRecord
  # has_many :comments
  # has_many :comments, as: :commentable
  belongs_to :genre, class_name: 'Genre', foreign_key: 'genre_id', optional: true
end
