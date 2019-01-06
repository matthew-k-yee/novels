Rails.application.routes.draw do
  resources :genres do
    resources :books
  end

  post 'user_token' => 'user_token#create'

  resources :users do
    resources :favorite_books, only: [:index, :create, :destroy]
  end

  resources :comments
  #   resources :comments
  # end

  resources :books do
    collection do
      get 'mine'
    end
    resources :comments
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
