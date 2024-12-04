#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download placeholder images
curl -o public/hero-painting.jpg "https://source.unsplash.com/1600x900/?house,painting"
curl -o public/interior-painting.jpg "https://source.unsplash.com/800x600/?interior,painting"
curl -o public/exterior-painting.jpg "https://source.unsplash.com/800x600/?exterior,house"
curl -o public/cabinet-painting.jpg "https://source.unsplash.com/800x600/?kitchen,cabinet"
curl -o public/brick-painting.jpg "https://source.unsplash.com/800x600/?brick,wall"
curl -o public/limewash.jpg "https://source.unsplash.com/800x600/?limewash,wall"
curl -o public/fence-staining.jpg "https://source.unsplash.com/800x600/?fence,wood"
curl -o public/deck-staining.jpg "https://source.unsplash.com/800x600/?deck,wood"
curl -o public/power-washing.jpg "https://source.unsplash.com/800x600/?pressure,washing" 