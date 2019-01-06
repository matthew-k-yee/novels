class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true

  has_many :favorites
  has_many :favorite_books, through: :favorites, source: :favorited, source_type: 'Book'

  def to_token_payload
      {
          sub: id,
          email: email
      }
  end
end
