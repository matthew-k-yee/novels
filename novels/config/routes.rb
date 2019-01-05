Rails.application.routes.draw do
  resources :genres
  post 'user_token' => 'user_token#create'
  resources :users
  resources :comments
  resources :books do
    collection do
      get 'mine'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
