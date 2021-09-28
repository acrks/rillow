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
require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
