class MatchesController < ApplicationController


    def index
        matches = Match.all
        render json: matches
      end

    def new
      match = Match.new(match_params)
      render json: match
    end

      def show 
        @match = Match.find(params[:id])
        # user = User.find_by(id: match.user_id)
        render json: @match
      end    

      def create
        
        match = Match.create(
          full_name: params[:full_name],
          user_id: params[:user_id],
          title: params[:title], 
          description: params[:description], 
          golf_course_id: params[:golf_course_id],
          date: params[:date], 
          time: params[:time],
          handicap: params[:handicap],
          course_name: params[:course_name]
          
          
          )
          puts '================='
          puts params
          MatchPlayer.create(
            user_id: params[:user_id],
            match_id: match.id
            
          )
        
        render json: match
    end

    def update
      match = Match.find(params[:id])
      match.update(
        user_id: params[:user_id],
          title: params[:title], 
          description: params[:description], 
          golf_course_id: params[:golf_course_id],
          date: params[:date], 
          time: params[:time],
          handicap: params[:handicap])
          
      render json: match
    end

    def destroy
      if match.destroy
        render status: :ok, json: { notice: "Successfully deleted match." }
      else
        render status: :unprocessable_entity, json: { errors: match.errors.full_messages }
      end
    end

 private
  
    def match_params
      params.require(:matches).permit(:full_name, :user_id, :title, :description, :name, :date, :time, :handicap, :course_name)
    end
  
end 