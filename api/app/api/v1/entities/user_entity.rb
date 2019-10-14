module V1
  module Entities
    class UserEntity < Grape::Entity
      expose :id
      expose :email
      expose :token
    end
  end
end