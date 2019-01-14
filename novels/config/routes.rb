Rails.application.routes.draw do
  resources :genres do
    resources :books, :except => [:create]
  end

  post 'user_token' => 'user_token#create'

  # resources :users do
  #   resources :favorite_books
  # end

  resources :users do
    resources :favorites
  end

  resources :books do
    resources :comments
  end

  resources :comments

  resources :books do
    collection do
      get 'mine'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
