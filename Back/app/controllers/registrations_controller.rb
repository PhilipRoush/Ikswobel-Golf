class RegistrationsController < ApplicationController
  def create
    user = User.create!(
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation'],
      first_name: params['user']['first_name'],
      last_name: params['user']['last_name'],
      city: params['user']['city'],
      state: params['user']['state'],
      handicap: params['user']['handicap']
    )

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end
end
