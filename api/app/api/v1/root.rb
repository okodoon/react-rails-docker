module V1
  class Root < Grape::API
    version :v1
    format :json

    helpers do
      def authenticate!
        error!('Unauthorized. Invalid or expired token.', 401) unless current_user
      end

      def current_user
        return nil unless headers['Authorization'] && headers['Authorization'].match(TOKEN_REGEX)
        token = headers['Authorization'].gsub(TOKEN_PREFIX, '')
        User.find_by(token: token)
      end
    end

    mount V1::Users
  end
end