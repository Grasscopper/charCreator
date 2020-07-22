class Api::V1::CharactersController < ApplicationController
   protect_from_forgery with: :null_session, if: Proc.new {|c| c.request.format.json? }
  def index
    Character.order(:id)
    render json: Character.all
  end

  def create
    newChar = Character.create(char_params)
    Character.order(:id)
    render json: newChar
  end

  def destroy
    Character.find(params["id"]).delete
    Character.order(:id)
    render json: Character.all
  end

  def update
    Character.find(params["id"]).update(char_params)
    Character.order(:id)
    render json: Character.all
  end

  def char_params
    params.require(:character).permit(:id, :name, :bio, :stats)
  end
end
