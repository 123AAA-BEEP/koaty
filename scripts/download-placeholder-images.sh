#!/bin/bash

# Create necessary directories
mkdir -p public/images/{hero,services/{interior,exterior,cabinet,deck,brick,limewash,drywall,ceiling,stucco,wallpaper,carpentry,misc},locations}

# Download hero images
curl -o public/images/hero/main.jpg "https://images.unsplash.com/photo-1562259949-e8e7689d7828"

# Download interior painting images
curl -o public/images/services/interior/living-room.jpg "https://images.unsplash.com/photo-1562259949-e8e7689d7828"
curl -o public/images/services/interior/bedroom.jpg "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8"
curl -o public/images/services/interior/kitchen.jpg "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7"
curl -o public/images/services/interior/office.jpg "https://images.unsplash.com/photo-1497366811353-6870744d04b2"

# Download exterior painting images
curl -o public/images/services/exterior/house-1.jpg "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
curl -o public/images/services/exterior/house-2.jpg "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
curl -o public/images/services/exterior/house-3.jpg "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
curl -o public/images/services/exterior/fence.jpg "https://images.unsplash.com/photo-1621873495884-845a939892d4"

# Download cabinet painting images
curl -o public/images/services/cabinet/kitchen-1.jpg "https://images.unsplash.com/photo-1556911220-bff31c812dba"
curl -o public/images/services/cabinet/kitchen-2.jpg "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
curl -o public/images/services/cabinet/kitchen-3.jpg "https://images.unsplash.com/photo-1556909172-54557c7e4fb7"

# Download deck images
curl -o public/images/services/deck/deck-1.jpg "https://images.unsplash.com/photo-1591825729269-caeb344f6df2"
curl -o public/images/services/deck/deck-2.jpg "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e"
curl -o public/images/services/deck/fence.jpg "https://images.unsplash.com/photo-1621873495884-845a939892d4"

# Download brick painting images
curl -o public/images/services/brick/brick-1.jpg "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
curl -o public/images/services/brick/brick-2.jpg "https://images.unsplash.com/photo-1581612129334-551ccd069e63"
curl -o public/images/services/brick/brick-3.jpg "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"

# Download limewash specific images
curl -o public/images/services/limewash/exterior-1.jpg "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
curl -o public/images/services/limewash/exterior-2.jpg "https://images.unsplash.com/photo-1576941089067-2de3c901e126"
curl -o public/images/services/limewash/interior-1.jpg "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
curl -o public/images/services/limewash/interior-2.jpg "https://images.unsplash.com/photo-1598928636598-26c54a7937dc"

# Download drywall images
curl -o public/images/services/drywall/repair-1.jpg "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15"
curl -o public/images/services/drywall/repair-2.jpg "https://images.unsplash.com/photo-1573883430697-4c3479aae6b9"
curl -o public/images/services/drywall/patch-1.jpg "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb"
curl -o public/images/services/drywall/patch-2.jpg "https://images.unsplash.com/photo-1573883431276-b8c6d8f1e8f5"

# Download ceiling images
curl -o public/images/services/ceiling/popcorn-1.jpg "https://images.unsplash.com/photo-1595514535415-dae8580c416c"
curl -o public/images/services/ceiling/popcorn-2.jpg "https://images.unsplash.com/photo-1595514535425-8e13c5f45b31"
curl -o public/images/services/ceiling/texture-1.jpg "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff"
curl -o public/images/services/ceiling/texture-2.jpg "https://images.unsplash.com/photo-1595514535445-8e13c5f45b51"

# Download stucco images
curl -o public/images/services/stucco/repair-1.jpg "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
curl -o public/images/services/stucco/repair-2.jpg "https://images.unsplash.com/photo-1600607687939-ce2a6b187c88"
curl -o public/images/services/stucco/finish-1.jpg "https://images.unsplash.com/photo-1578662996442-48f60103fc96"
curl -o public/images/services/stucco/finish-2.jpg "https://images.unsplash.com/photo-1600607687949-ce2a6b187c90"

# Download wallpaper images
curl -o public/images/services/wallpaper/install-1.jpg "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5"
curl -o public/images/services/wallpaper/install-2.jpg "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6"
curl -o public/images/services/wallpaper/pattern-1.jpg "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
curl -o public/images/services/wallpaper/pattern-2.jpg "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908"

# Download carpentry images
curl -o public/images/services/carpentry/work-1.jpg "https://images.unsplash.com/photo-1504148455328-c376907d081c"
curl -o public/images/services/carpentry/work-2.jpg "https://images.unsplash.com/photo-1617791160505-6f00504e3519"
curl -o public/images/services/carpentry/tools.jpg "https://images.unsplash.com/photo-1530124566582-a618bc2615dc"

# Download misc service images
curl -o public/images/services/misc/declutter-1.jpg "https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
curl -o public/images/services/misc/declutter-2.jpg "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac"
curl -o public/images/services/misc/odor-1.jpg "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5"
curl -o public/images/services/misc/caulking-1.jpg "https://images.unsplash.com/photo-1581141849291-1125c7b692b5"

# Download location images
curl -o public/images/locations/toronto.jpg "https://images.unsplash.com/photo-1517090504586-fde19ea6066f"
curl -o public/images/locations/mississauga.jpg "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a"
curl -o public/images/locations/brampton.jpg "https://images.unsplash.com/photo-1591955506264-3f5a6834570a"
curl -o public/images/locations/vaughan.jpg "https://images.unsplash.com/photo-1605130009611-f2a79c89de70"
curl -o public/images/locations/markham.jpg "https://images.unsplash.com/photo-1591955506271-901782697bf4"
curl -o public/images/locations/richmond-hill.jpg "https://images.unsplash.com/photo-1591955506258-f2f7c3a8f7f2"

echo "All placeholder images have been downloaded."