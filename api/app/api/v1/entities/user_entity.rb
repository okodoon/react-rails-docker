module V1
  module Entities
    class UserEntity < Grape::Entity
      expose :email
      expose :name
      expose :token
    end
  end
end