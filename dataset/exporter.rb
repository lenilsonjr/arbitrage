#!/usr/bin/env ruby
require 'csv'
require 'savanna-outliers'

if ARGV[0].nil? || ARGV[0].empty?
  puts('You need to pass a country name as param')
  exit
end

@country = ARGV[0]

@time = Time.now
puts "Starting to read file - #{@time}"

@salaries = Array.new

CSV.foreach("./survey_results_public.csv", :skip_blanks => true, :headers => true) do |row|
  if row['Country'] == @country && !['NA', '0'].include?(row['ConvertedSalary']) && @salaries.count < 5000 
    @salaries.push(row['ConvertedSalary'].to_i)
  end
end

if @salaries.count == 0
  puts "Ooops. No amostrage for #{@country}"
  exit
end

puts "The amostrage for #{@country} is of #{@salaries.count} samples"

# Let's remove outliers
@salaries = Savanna::Outliers.remove_outliers(@salaries, :all)

@annual_average = @salaries.sum / @salaries.count

puts "#{@country} has a average annual salary of #{@annual_average} USD"
puts "The average hourly rate in #{@country} is $#{@annual_average / 50 / 5 / 8}/hour"

puts "EOF. Took #{Time.now - @time}"
