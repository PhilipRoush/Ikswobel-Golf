class GolfCourse < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    
    has_many :matches
    has_many :past_rounds
    has_many :users, through: :past_rounds

    
end
