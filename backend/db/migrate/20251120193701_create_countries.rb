class CreateCountries < ActiveRecord::Migration[8.0]
  def change
    create_table :countries do |t|
      t.string :cca3, null: false, index: true
      t.string :name, null: false
      t.string :capital
      t.string :region
      t.string :subregion

      t.timestamps
    end
  end
end
