class Match < ApplicationRecord
    belongs_to :golf_course, optional: true
    has_many :match_players
    has_many :users, through: :match_players
    
end
