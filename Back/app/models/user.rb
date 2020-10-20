class User < ApplicationRecord
  has_secure_password

  validates_presence_of :email
  validates_uniqueness_of :email

  has_many :golf_courses, through: :past_rounds
  has_many :past_rounds
  has_many :matches, through: :match_players

  def full_name
    "#{first_name} #{last_name}".strip
  end
end
