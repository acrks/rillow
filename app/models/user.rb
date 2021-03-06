# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#
class User < ApplicationRecord
    attr_reader :password
  
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 8 }, allow_nil: true
  
    after_initialize :ensure_session_token

    has_many :listings,
      primary_key: :id,
      foreign_key: :creator_id,
      class_name: :Listing
  
    has_many :favorites,
      foreign_key: :favoriter_id,
      class_name: :Favorite

    has_many :favorite_listings,
      through: :favorites,
      source: :listing
  
    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      p user
      return nil unless user
      user && user.is_password?(password) ? user : nil
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def reset_session_token!
      generate_unique_session_token
      save!
      self.session_token
    end
  
    private
  
    def ensure_session_token
      generate_unique_session_token unless self.session_token
    end
  
    def new_session_token
      SecureRandom.urlsafe_base64
    end
  
    def generate_unique_session_token
      self.session_token = new_session_token
      while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
      end
      self.session_token
    end
  end
  
