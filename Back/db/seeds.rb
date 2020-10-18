GolfCourse.destroy_all

records = JSON.parse(File.read('/Users/philiproush/Flatiron/Ikswobel-Golf/Back/app/models/top100GC.json'))
records.each do |record|
 Top100.create!(record)
end

email: "p@", password_digest: 'p0op0o', first_name: "phil", last_name: "roush", city: "Austin", state: "TX")