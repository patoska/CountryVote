class VotesController < ApplicationController
  def create
    vote = Vote.new(vote_params)
    if vote.save
      render json: vote
    else
      render json: { errors: vote.errors, status: :unprocessable_entity }
    end
  end

  private

  def vote_params
    params.expect(vote: [ :name, :email, :country_id ])
  end
end
