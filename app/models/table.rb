class Table < ActiveRecord::Base
  attr_accessible :appointment_id, :seats, :venue_id
  belongs_to :venue
  has_many :appointments
end
