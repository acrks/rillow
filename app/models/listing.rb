# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  creator_id    :integer          not null
#  purchase      :boolean          not null
#  price         :integer          not null
#  num_bedrooms  :integer          not null
#  num_bathrooms :float            not null
#  street_number :integer          not null
#  street_name   :string           not null
#  city_name     :string           not null
#  state         :string           not null
#  zipcode       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  sqft          :integer
#  longitude     :float
#  latitude      :float
#  unit_number   :string
#
class Listing < ApplicationRecord
    validates :creator_id, :price, :sqft, :num_bedrooms, :num_bathrooms, :street_number, :street_name, :city_name, :state, :zipcode, presence: true
    validates :purchase, inclusion: { in: [true, false] }
    validates :street_number, :num_bathrooms, :num_bedrooms, :price, :sqft, :creator_id, numericality: {greater_than_or_equal_to: 1}
    validate :ensure_photo, :ensure_zip
    
    has_one_attached :picture

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User
    
    has_many :likes,
        foreign_key: :listing_id,
        class_name: :Favorite

    has_many :favorite_users,
        through: :favorites,
        source: :favoriter

    def ensure_photo
        unless self.picture.attached?
            errors[:picture] << "must be attached"
        end
    end
    
    def ensure_zip
        unless ValidatesZipcode.valid?(self.zipcode.to_s, 'US')
            errors[:zipcode] << "Your zipcode must be valid"
        end
    end

end
