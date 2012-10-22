class CreateTables < ActiveRecord::Migration
  def change
    create_table :tables do |t|
      t.integer :seats
      t.integer :venue_id
      t.integer :appointment_id

      t.timestamps
    end
    add_index :tables, :venue_id
    add_index :tables, :appointment_id
  end
end
