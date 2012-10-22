class CreateTimeslots < ActiveRecord::Migration
  def change
    create_table :timeslots do |t|
      t.integer :hour
      t.references :appointment
      t.references :table

      t.timestamps
    end
    add_index :timeslots, :appointment_id
    add_index :timeslots, :table_id
  end
end
