class Book < ApplicationRecord
  has_many :comments

  has_and_belongs_to_many :users
  # validates :user, uniqueness: true

  belongs_to :genre, class_name: 'Genre', foreign_key: 'genre_id'
end
