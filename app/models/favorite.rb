# == Schema Information
#
# Table name: favorites
#
#  id           :bigint           not null, primary key
#  favoriter_id :integer          not null
#  listing_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Favorite < ApplicationRecord
    validates :favoriter_id, uniqueness: { scope: :listing_id }

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :favoriter,
        foreign_key: :favoriter_id,
        class_name: :User
end
