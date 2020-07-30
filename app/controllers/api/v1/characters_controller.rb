class Api::V1::CharactersController < ApplicationController
   protect_from_forgery with: :null_session, if: Proc.new {|c| c.request.format.json? }
  def index
    render json: Character.all.order(:id)
  end

  def create
    newChar = Character.create(char_params)
    render json: newChar
  end

  def destroy
    Character.find(params["id"]).delete
    render json: Character.all.order(:id)
  end

  def update
    Character.find(params["id"]).update(char_params)
    render json: Character.all.order(:id)
  end

  def char_params
    params.require(:character).permit(:id, :name, :bio, :stats)
  end
end
