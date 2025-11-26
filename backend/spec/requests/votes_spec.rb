require "rails_helper"

RSpec.describe "Votes API", type: :request do
  describe "POST /votes" do
    let(:country) { create(:country) }

    context "with valid params" do
      let(:params) do
        {
          vote: {
            name: "John Doe",
            email: "john@example.com",
            country_id: country.id
          }
        }
      end

      it "creates a vote" do
        expect {
          post "/votes", params: params
        }.to change(Vote, :count).by(1)

        expect(response).to have_http_status(:ok)

        json = JSON.parse(response.body)
        expect(json["name"]).to eq("John Doe")
        expect(json["email"]).to eq("john@example.com")
        expect(json["country_id"]).to eq(country.id)
      end
    end

    context "with invalid params" do
      let(:params) do
        {
          vote: {
            name: "",
            email: "bad",
            country_id: nil
          }
        }
      end

      it "does not create a vote and returns errors" do
        expect {
          post "/votes", params: params
        }.not_to change(Vote, :count)

        expect(response).to have_http_status(:ok) # your controller uses 200 for errors
        json = JSON.parse(response.body)

        expect(json["errors"]).to be_present
        expect(json["errors"]["name"]).to include("can't be blank")
        expect(json["errors"]["country"]).to include("must exist")
      end
    end
  end
end

