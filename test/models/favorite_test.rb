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
require 'test_helper'

class FavoriteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
