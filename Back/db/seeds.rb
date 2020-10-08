GolfCourse.destroy_all

records = JSON.parse(File.read('/Users/philiproush/Flatiron/Ikswobel-Golf/Back/app/models/csvjson.json'))
records.each do |record|
 GolfCourse.create!(record)
end
