class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :first_name
      t.string :last_name
      t.integer :seats
      t.datetime :when
      t.text :notes

      t.timestamps
    end
  end
end
