class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name, null: false
      t.string :bio
      t.string :stats

      t.timestamps null: false
    end
  end
end
