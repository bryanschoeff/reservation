class Timeslot < ActiveRecord::Base
  belongs_to :appointment
  belongs_to :table
  attr_accessible :hour
end
