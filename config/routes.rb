Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :user, only: [:create]
    resources :listings, only: [:create, :destroy, :update]
    resources :favorites, only: [:create, :destroy]
    resources :listings, only: [:index, :show]
    resource :session, only: [:create, :destroy]
end
  
  root to: "static_pages#root"
end
