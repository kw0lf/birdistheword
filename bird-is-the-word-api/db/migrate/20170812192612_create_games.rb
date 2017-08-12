class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.text :board, array: true, default: []
      t.text :bag, array: true, default: []
      t.timestamps
    end
  end
end
