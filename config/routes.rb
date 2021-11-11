Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :show] 
    # do
    #   resources :favorites, only: [:create, :destroy]  
    # end
    # resources :favorites, only: [:index]
    resources :favorites, only: [:create, :destroy, :index, :show]
    resources :listings, only: [:create, :destroy, :update]
    resources :listings, only: [:index, :show]
    resource :session, only: [:create, :destroy]
end
  
  root to: "static_pages#root"
end
