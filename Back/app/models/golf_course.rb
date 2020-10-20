class GolfCourse < ApplicationRecord
    
    
    has_many :matches
    has_many :past_rounds
    has_many :users, through: :past_rounds
    belongs_to :top100s
    
end
