class CreateVotes < ActiveRecord::Migration[8.0]
  def change
    create_table :votes do |t|
      t.string :name, null: false
      t.string :email, null: false, index: true
      t.references :country, null: false, foreign_key: true, index: true

      t.timestamps
    end
  end
end
