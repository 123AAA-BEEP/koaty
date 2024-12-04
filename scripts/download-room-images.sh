#!/bin/bash

# Create necessary directories
mkdir -p public/images/rooms/{living-room,bedroom,kitchen,exterior}

# Download base room images
curl -o public/images/rooms/living-room/base.jpg "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3"
curl -o public/images/rooms/bedroom/base.jpg "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8"
curl -o public/images/rooms/kitchen/base.jpg "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7"
curl -o public/images/rooms/exterior/base.jpg "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"

# Create mask images using ImageMagick
# Living Room
convert public/images/rooms/living-room/base.jpg \
  -colorspace gray \
  -fill white -draw "rectangle 0,0 100%,100%" \
  -alpha set -background none \
  -channel A -evaluate multiply 0.5 \
  public/images/rooms/living-room/mask.png

# Bedroom
convert public/images/rooms/bedroom/base.jpg \
  -colorspace gray \
  -fill white -draw "rectangle 0,0 100%,100%" \
  -alpha set -background none \
  -channel A -evaluate multiply 0.5 \
  public/images/rooms/bedroom/mask.png

# Kitchen
convert public/images/rooms/kitchen/base.jpg \
  -colorspace gray \
  -fill white -draw "rectangle 0,0 100%,100%" \
  -alpha set -background none \
  -channel A -evaluate multiply 0.5 \
  public/images/rooms/kitchen/mask.png

# Exterior
convert public/images/rooms/exterior/base.jpg \
  -colorspace gray \
  -fill white -draw "rectangle 0,0 100%,100%" \
  -alpha set -background none \
  -channel A -evaluate multiply 0.5 \
  public/images/rooms/exterior/mask.png

echo "Room images and masks have been downloaded and prepared." 