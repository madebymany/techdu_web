module EventHelper
  def events
    data.events
  end

  def event_has_url?(e)
    e.media =~ /\Ahttps?:\/\//
  end

end
