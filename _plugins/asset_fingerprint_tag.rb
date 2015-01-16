# Append md5 fingerprint to file path
require 'digest/md5'

module Jekyll
  class AssetFingerprintTag < Liquid::Tag

    def initialize(tag_name, file, tokens)
      super
      @file = file
      @file.strip!
    end

    def render(context)
      site = context.registers[:site]
      dir = File.realpath context.registers[:site].source
      path = File.join dir, @file

      unless File.exist?(path)
        raise IOError.new "'#{@file}' not found"
      end

      hash = Digest::MD5.hexdigest File.read(path)
      "#{@file}?v=#{hash}"

    end
  end
end

Liquid::Template.register_tag('asset_fingerprint', Jekyll::AssetFingerprintTag)