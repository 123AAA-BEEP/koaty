#!/bin/bash

# Create the brands directory if it doesn't exist
mkdir -p public/brands

# Create SVG logos for each brand
cat > public/brands/benjamin-moore-logo.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <text x="10" y="35" font-family="Arial" font-size="24" font-weight="bold" fill="#000">
    Benjamin Moore
  </text>
</svg>
EOL

cat > public/brands/sherwin-williams-logo.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <text x="10" y="35" font-family="Arial" font-size="24" font-weight="bold" fill="#000">
    Sherwin-Williams
  </text>
</svg>
EOL

cat > public/brands/romabio-logo.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <text x="10" y="35" font-family="Arial" font-size="24" font-weight="bold" fill="#000">
    ROMABIO
  </text>
</svg>
EOL

cat > public/brands/farrow-ball-logo.svg << 'EOL'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <text x="10" y="35" font-family="Arial" font-size="24" font-weight="bold" fill="#000">
    Farrow & Ball
  </text>
</svg>
EOL

# Make the script executable
chmod +x scripts/download-brand-logos.sh 