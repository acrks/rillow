class Favorite < ApplicationRecord
    validates :favoriter_id, uniqueness: { scope: :listing_id }

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :favoriter,
        foreign_key: :favoriter_id,
        class_name: :User
end
