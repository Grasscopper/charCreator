Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :characters, only: [:index, :create, :destroy]
    end
  end
end
