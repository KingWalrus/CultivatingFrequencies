def custom_method
    require 'net/http'
    require 'uri'
    uri = URI.parse("http://api.thingspeak.com/update?key=7IZXDF84MXCGB0G2 &field1=60&field2=50&field3=20&field4=21")
    # Shortcut
    response = Net::HTTP.get_response(uri)
    
    outlet(0, response)
end

def meth
    out0 "meth is bad"
end

def bang
    out0 "banging"
end