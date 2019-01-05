class Book < ApplicationRecord
  belongs_to :genre, class_name: 'Genre', foreign_key: 'genre_id', optional: true
end
