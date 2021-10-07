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
#
class Listing < ApplicationRecord
    validates :creator_id, :price, :sqft, :num_bedrooms, :num_bathrooms, :street_number, :street_name, :city_name, :state, :zipcode, presence: true
    validates :purchase, inclusion: { in: [true, false] }
    validates :zipcode, numericality: { greater_than_or_equal_to: 10000, less_than_or_equal_to: 99999, only_integer: true }
    validates :street_number, :num_bathrooms, :num_bedrooms, :price, :sqft, :creator_id, numericality: {greater_than_or_equal_to: 1}
    
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

    def state_names
        %w(Alaska Alabama Arkansas American\ Samoa Arizona California Colorado Connecticut District\ of\ Columbia Delaware Florida Georgia Guam Hawaii Iowa Idaho Illinois Indiana Kansas Kentucky Louisiana Massachusetts Maryland Maine Michigan Minnesota Missouri Mississippi Montana North\ Carolina North\ Dakota Nebraska New\ Hampshire New\ Jersey New\ Mexico Nevada New\ York Ohio Oklahoma Oregon Pennsylvania Puerto\ Rico Rhode\ Island South\ Carolina South\ Dakota Tennessee Texas Utah Virginia Virgin\ Islands Vermont Washington Wisconsin West\ Virginia Wyoming)
    end
end
