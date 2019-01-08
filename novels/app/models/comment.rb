class Comment < ApplicationRecord
  belongs_to :book, class_name: 'Book', foreign_key: 'book_id'
  belongs_to :user
end
