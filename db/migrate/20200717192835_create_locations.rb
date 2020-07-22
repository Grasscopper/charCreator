class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.integer :rating
      t.belongs_to :character, null: false

      t.timestamps null: false
    end
  end
end
