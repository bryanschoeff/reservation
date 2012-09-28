class Appointment < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :notes, :seats, :when
end
