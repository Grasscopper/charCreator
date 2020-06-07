require "rails_helper"

RSpec.describe Api::V1::CharactersController, type: :controller do
  describe "GET#index" do
    let!(:char1) { Character.create(name: "Link", bio: "Hero of Hyrule", stats: "High courage") }
    let!(:char2) { Character.create(name: "Travis Touchdown", bio: "Otaku", stats: "Skilled assassin") }

    it "returns a successful response status and a content type of JSON" do
      get :index

      expect(response.status).to eq 200
      expect(response.content_type).to eq ("application/json")
    end

    it "returns all characters" do
      get :index

      returned_json = JSON.parse(response.body)
      expect(returned_json.length).to eq 2

      expect(returned_json[0]["name"]).to eq char1.name
      expect(returned_json[0]["bio"]).to eq char1.bio
      expect(returned_json[0]["stats"]).to eq char1.stats

      expect(returned_json[1]["name"]).to eq char2.name
      expect(returned_json[1]["bio"]).to eq char2.bio
      expect(returned_json[1]["stats"]).to eq char2.stats
    end
  end

end
