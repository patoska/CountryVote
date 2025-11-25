class CountriesController < ApplicationController
  def index
    render json: Country.left_joins(:votes)
       .select('countries.*, COUNT(votes.id) AS votes_count')
       .group('countries.id')
  end
end
