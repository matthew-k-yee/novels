Rails.application.routes.draw do
  resources :comments
  resources :genres
  post 'user_token' => 'user_token#create'
  resources :users
  resources :books 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
