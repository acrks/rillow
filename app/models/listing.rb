# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  creator       :integer          not null
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
#
class Listing < ApplicationRecord
    validates :creator, :price, :num_bedrooms, :num_bathrooms, :street_number, :street_name, :city_name, :state, :zipcode, presence: true
    validates :purchase, inclusion: { in: [true, false] }
    
    belongs_to :creator,
        foreign_key: :creator,
        class_name: :User
    
    has_many :likes,
        foreign_key: :listing_id,
        class_name: :Favorite

    
    

end
