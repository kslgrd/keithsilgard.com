module Jekyll
  module Filters
    def summarize(str, delimeter = '<!-- END -->')
      str.split(delimeter)[0]
    end
  end
end