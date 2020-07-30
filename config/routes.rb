Rails.application.routes.draw do
  root 'homes#index'
  get '/characters/:id', to: 'homes#index'

  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :characters, only: [:index, :show, :create, :destroy, :update]
    end
  end
end
