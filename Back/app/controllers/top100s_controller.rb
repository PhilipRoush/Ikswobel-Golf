class Top100sController < ApplicationController

    def index
      top100s = Top100.all
      render json: top100s
    end
  
    def show
      top100 = Top100.find(params[:id])
      render json: top100
    end
  
    def create
      top100 = Top100.create({
        longitude: params[:longitude], 
        latitude: params[:latitude], 
        name: params[:name], 
        state: params[:state], 
        city: params[:city], 
        street_address: params[:street_address],
        description: params[:description],
        image_address: params[:image_address],
        rank: params[:rank]})
      render json: top100
    end
  
    def update
      top100 = Top100.find(params[:id])
      top100.update({
        longitude: params[:longitude], 
        latitude: params[:latitude], 
        name: params[:name], 
        state: params[:state], 
        city: params[:city], 
        street_address: params[:street_address],
        description: params[:description],
        image_address: params[:image_address],
        rank: params[:rank]})
      render json: top100
    end
  
    
   
      
      
    private
  
    def top100_params
      params.require(:top100_params).permit(:longitude, :latitude, :name, :state, :city, :street_address, :description, :image_address, :rank)
    end
  end