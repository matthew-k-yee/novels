class Comment < ApplicationRecord
  # belongs_to :commentable, polymorphic: true
  # has_many :comments, as: :commentable
  # belongs_to :book, class_name: 'Book', foreign_key: 'book_id', optional: true
  # belongs_to :user, class_name: 'User', foreign_key: 'user_id', optional: true
end
