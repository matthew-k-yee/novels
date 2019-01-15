class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true


  has_many :comments
  has_and_belongs_to_many :books

  def to_token_payload
      {
          sub: id,
          email: email
      }
  end
end
