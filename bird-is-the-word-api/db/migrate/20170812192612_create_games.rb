class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.json :board
      t.json :tiles
      t.json :bag
      t.timestamps
    end
  end
end
