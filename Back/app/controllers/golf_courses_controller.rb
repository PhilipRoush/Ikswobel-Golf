class GolfCoursesController < ApplicationController

    def index
      golf_courses = GolfCourse.all
      render json: golf_courses
    end
  
    def show
      golf_course = GolfCourse.find(params[:id])
      render json: golf_course
    end
  
    def create
      golf_course = GolfCourse.create({
        longitude: params[:longitude], 
        latitude: params[:latitude], 
        name: params[:name], 
        state: params[:state], 
        city: params[:city], 
        street_address: params[:street_address]})
      render json: golf_course
    end
  
    def update
      golf_course = GolfCourse.find(params[:id])
      golf_course.update({
        longitude: params[:longitude], 
        latitude: params[:latitude], 
        name: params[:name], 
        state: params[:state], 
        city: params[:city], 
        street_address: params[:street_address]})
      render json: golf_course
    end
  
    def destroy
      golf_course = GolfCourse.find(params[:id])
      golf_course.destroy
      render json: golf_course
    end

   
      
      
    private
  
    def golf_course_params
      params.require(:golf_course).permit(:longitude, :latitude, :name, :state, :city, :street_address)
    end
  end