class Venue < ActiveRecord::Base
  attr_accessible :name
  has_many :tables
  has_many :appointments, :through => :tables
end
