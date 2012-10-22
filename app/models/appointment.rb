class Appointment < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :notes, :seats, :when
  belongs_to :table
  has_one :timeslot
end
