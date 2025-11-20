namespace :countries do
  desc "This is a description of my custom task"
  task :sync => :environment do
    puts "Hello from my custom Rake task!"
    # You can access your Rails models, services, etc. here
    # Example: User.all.each { |user| puts user.email }
    require 'net/http'
    require 'json'
    uri = URI.parse('https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,subregion')
    response = Net::HTTP.get_response(uri)
    if response.is_a?(Net::HTTPSuccess)
      countries = JSON.parse(response.body)
      countries.each do |country|
        puts ""
        # puts "CODE: #{country['cca3']} - Name: #{country['name']['common']}"
        puts country.inspect
        c = Country.find_by(cca3: country['cca3'])
        if c.nil?
          puts "CREATING #{country['name']['common']}"
          Country.create!(
            cca3: country['cca3'],
            name: country['name']['common'],
            capital: country['capital'].length > 0 ? country['capital'][0] : "",
            region: country['region'],
            subregion: country['subregion']
          )
        else
          puts "UPDATING #{country['name']['common']}"
          c.update!(
            name: country['name']['common'],
            capital: country['capital'].length > 0 ? country['capital'][0] : "",
            region: country['region'],
            subregion: country['subregion']
          )
        end
      end
    else
      puts "Request failed with code: #{response.code}"
    end
  end
end
