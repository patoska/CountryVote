require "rails_helper"

RSpec.describe "Countries API", type: :request do
  describe "GET /countries" do
    it "returns all countries with votes_count" do
      country1 = create(:country)
      country2 = create(:country)

      create_list(:vote, 3, country: country1)
      create(:vote, country: country2)

      get "/countries"

      expect(response).to have_http_status(:ok)
      json = JSON.parse(response.body)

      expect(json.size).to eq(2)

      c1 = json.find { |c| c["id"] == country1.id }
      c2 = json.find { |c| c["id"] == country2.id }

      expect(c1["votes_count"]).to eq(3)
      expect(c2["votes_count"]).to eq(1)
    end
  end
end

