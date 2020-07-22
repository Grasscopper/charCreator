class Api::V1::CharactersController < ApplicationController
   protect_from_forgery with: :null_session, if: Proc.new {|c| c.request.format.json? }
  def index
    render json: Character.all
  end

  def create
    render json: Character.create(char_params)
  end

  def char_params
    params.require(:character).permit(:id, :name, :bio, :stats)
  end
end
