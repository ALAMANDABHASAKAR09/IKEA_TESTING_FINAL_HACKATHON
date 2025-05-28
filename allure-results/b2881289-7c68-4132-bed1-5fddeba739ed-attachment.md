# Test info

- Name: IKEA Automation Tests >> Extract Wardrobe of Metal Type
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:58:9

# Error details

```
Error: locator.elementHandle: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[aria-describedby="hnf-postalcode-helper"]')

    at Homepage.highlightElement (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\homepage.js:16:65)
    at Homepage.setPincode (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\homepage.js:33:20)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:34:13
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:33:9
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: "#hnf-content"
- banner:
  - button "Change language or country/region, current language is English": INEnglish
  - link "Delivery starts from Rs. 69":
    - /url: https://www.ikea.com/in/en/cat/furniture-fu001/
  - button "Enter postal code"
  - button "Select store"
  - link "IKEA Home":
    - /url: https://www.ikea.com/in/en/
  - search:
    - combobox "Search for products, inspiration or new arrivals"
    - button "Search IKEA products using a photo"
  - navigation:
    - button "Hej! Log in"
    - link "Shopping list":
      - /url: https://www.ikea.com/in/en/favourites/
    - link "Shopping bag":
      - /url: https://www.ikea.com/in/en/shoppingcart/
- tablist:
  - tab "Shop products" [selected]
  - tab "Shop by rooms"
  - tab "Offers"
  - tab "New at IKEA"
  - tab "IKEA for Business"
  - tab "Customer service"
  - tab "Tips, ideas & trends"
  - tab "More"
- tabpanel:
  - link "Skip listing":
    - /url: "#hnf--carousel__tabs-navigation-products-skip-btn"
  - button "Flat 15% off*"
  - button "Furniture"
  - button "Storage & organisation"
  - button "Sofas & armchairs"
  - button "Office furniture"
  - button "Tables & chairs"
  - button "Beds & mattresses"
  - button "Modular kitchens"
  - button "Home textiles"
  - button "Kitchenware & tableware"
  - button "Home Decor"
  - button "Outdoor products"
  - button "Lighting"
  - button "Bathroom products"
  - button "Baby & children"
  - button "Rugs and mats"
  - button "Laundry & cleaning"
  - button "Pots & plants"
  - button "Food & beverages"
  - button "Home improvement"
  - button "Smart home"
  - button "Home electronics"
  - button "Pet products"
  - button "Christmas Collections"
  - button "Small storage & organisers"
- button "Start Chat":
  - img
- main:
  - article:
    - heading "Welcome to IKEA India" [level=1]
    - heading "New beginnings offer!" [level=2]
    - paragraph
    - paragraph
    - link "Explore more":
      - /url: https://www.ikea.com/in/en/offers/
    - link:
      - /url: https://www.ikea.com/in/en/offers/
      - img
    - link:
      - /url: https://www.ikea.com/in/en/cat/wardrobes-19053/?filters=f-online-sellable%3Atrue#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/cat/sofas-fu003/?filters=f-online-sellable%3Atrue#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/cat/beds-bm003/?filters=f-online-sellable%3Atrue#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/cat/dining-furniture-700417/?filters=f-online-sellable%3Atrue#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/cat/bookcases-shelving-units-st002/?filters=f-online-sellable%3Atrue#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/search/?group=Flat%2015%25%20off*%20on%20furniture%20purchase%20of%20Rs.%2020000%20and%20above
      - img
    - link:
      - /url: https://www.ikea.com/in/en/cat/mattresses-bm002/?filters=f-online-sellable%3Atrue#product-list-skip
      - img
    - text: Offer applied at checkout.
    - heading "Explore more categories" [level=2]
    - link "Skip listing":
      - /url: "#pub__-carousel__9aed9bb0-1a7e-11f0-8ef9-11d381fa7392-skip-btn"
    - list:
      - listitem:
        - link "Shoe racks":
          - /url: https://www.ikea.com/in/en/cat/shoe-coat-hat-racks-10454/?filters=f-online-sellable%3Atrue#product-list-skip
          - img "Shoe racks"
    - list:
      - listitem:
        - link "Chest of drawers":
          - /url: https://www.ikea.com/in/en/cat/chests-of-drawers-10451/?filters=f-online-sellable%3Atrue#product-list-skip
          - img "Chest of drawers"
    - list:
      - listitem:
        - link "TV units":
          - /url: https://www.ikea.com/in/en/cat/tv-media-furniture-10475/?filters=f-online-sellable%3Atrue#product-list-skip
          - img "TV units"
    - list:
      - listitem:
        - link "Workspace":
          - /url: https://www.ikea.com/in/en/search/?group=Flat%2015%25%20off*%20on%20furniture%20purchase%20of%20Rs.%2020000%20and%20above
          - img "Workspace"
    - list:
      - listitem:
        - link "Bookcases":
          - /url: https://www.ikea.com/in/en/cat/bookcases-shelving-units-st002/?filters=f-online-sellable%3Atrue#product-list-skip
          - img "Bookcases"
    - list:
      - listitem:
        - link "Armchairs":
          - /url: https://www.ikea.com/in/en/cat/armchairs-chaise-longues-fu006/?filters=f-online-sellable%3Atrue#product-list-skip
          - img "Armchairs"
    - list:
      - listitem:
        - link "Cabinets":
          - /url: https://www.ikea.com/in/en/cat/cabinets-cupboards-st003/?filters=f-online-sellable%3Atrue#product-list-skip
          - img "Cabinets"
    - list:
      - listitem:
        - link "Day beds":
          - /url: https://www.ikea.com/in/en/cat/guest-beds-day-beds-19037/?filters=f-online-sellable%3Atrue#product-list-skip
          - img "Day beds"
    - list:
      - listitem:
        - link "Coffee table":
          - /url: https://www.ikea.com/in/en/cat/coffee-tables-10716/?filters=f-online-sellable%3Atrue#product-list-skip
          - img "Coffee table"
    - list:
      - listitem:
        - link "Mattresses":
          - /url: https://www.ikea.com/in/en/cat/beds-bm003/?filters=f-online-sellable%3Atrue#product-list-skip
          - img "Mattresses"
    - heading "Deals for IKEA Family members" [level=2]
    - link "Explore more":
      - /url: https://www.ikea.com/in/en/offers/family-offers/?sort=NEWEST&filters=f-online-sellable%3Atrue#product-list-skip
    - link "Skip listing":
      - /url: "#rec--carousel__ikea-family-skip-btn"
    - button "See next items"
    - group:
      - 'link "Bright yellow IKEA banner with the headline “New beginnings offer!” on the left. On the right, it states: “Shop and get a voucher* of Rs.1,000 on purchase of Rs.20,000 and above. Offer valid for IKEA Family members.”"':
        - /url: https://www.ikea.com/in/en/offers/
        - 'img "Bright yellow IKEA banner with the headline “New beginnings offer!” on the left. On the right, it states: “Shop and get a voucher* of Rs.1,000 on purchase of Rs.20,000 and above. Offer valid for IKEA Family members.”"'
    - heading "What's trending at IKEA" [level=2]
    - paragraph
    - paragraph
    - link "A dad baking with his daughter, labeled “Celebrate Father’s Day”":
      - /url: https://www.ikea.com/in/en/ideas/gift-ideas/fathers-day-gifts-puba9167f70/
      - img "A dad baking with his daughter, labeled “Celebrate Father’s Day”"
    - link "A cozy, modern wooden bedroom, labeled “Furniture trends of 2025”":
      - /url: https://www.ikea.com/in/en/ideas/5-furniture-trends-for-2025-pubb8dfac10/
      - img "A cozy, modern wooden bedroom, labeled “Furniture trends of 2025”"
    - link "Glass jars filled with pickles, labeled “Everyday essentials under Rs.199”":
      - /url: https://www.ikea.com/in/en/search/?group=Everyday%20essential%20under%20Rs.199
      - img "Glass jars filled with pickles, labeled “Everyday essentials under Rs.199”"
    - link "Potted plant hanging by a window, labeled “New Lower Price”":
      - /url: https://www.ikea.com/in/en/cat/lower-price/?filters=f-online-sellable%3Atrue#product-list-skip
      - img "Potted plant hanging by a window, labeled “New Lower Price”"
    - link "Stylish grey couch with floral cushions and a blanket, labeled “Designed for excellence”":
      - /url: https://www.ikea.com/in/en/rooms/living-room/beautifully-made-thoughtfully-designed-pub8cc39fa0/
      - img "Stylish grey couch with floral cushions and a blanket, labeled “Designed for excellence”"
    - link "Elegant table setting with floral accents, labeled “Everything wedding ready”":
      - /url: https://www.ikea.com/in/en/ideas/gift-ideas/wedding-gift-ideas-thatll-give-them-a-new-beginning-pubdd7263ac/
      - img "Elegant table setting with floral accents, labeled “Everything wedding ready”"
    - link "A beachside picnic with colorful drinkware, labeled “Summer essentials”":
      - /url: https://www.ikea.com/in/en/campaigns/lets-play/summer-essentials-pub67c47e70/
      - img "A beachside picnic with colorful drinkware, labeled “Summer essentials”"
    - link "Black and white daisy-print bedding with pillows, labeled “Refresh your home”":
      - /url: https://www.ikea.com/in/en/new/
      - img "Black and white daisy-print bedding with pillows, labeled “Refresh your home”"
    - link:
      - /url: https://www.ikea.com/in/en/customer-service/need-help-planning-a-kitchen-book-an-appointment-now-pub68c33a30/
      - img
    - heading "15% Off on Modular Kitchens Above ₹3,00,000 + METOD 25-Year Warranty" [level=2]
    - list:
      - listitem: 10% off on Modular kitchen purchases between ₹2,00,000 - ₹3,00,000
      - listitem: 50% off on installation for Kitchen purchases above ₹2,00,000
    - paragraph:
      - link "T&C":
        - /url: https://www.ikea.com/in/en/customer-service/terms-conditions/offers-terms-and-conditions-puba12a74a0/#aa97c8f0-1462-11f0-9d25-0d9afc5323b3
      - text: apply
    - link "Explore more":
      - /url: https://www.ikea.com/in/en/customer-service/need-help-planning-a-kitchen-book-an-appointment-now-pub68c33a30/
    - paragraph
    - paragraph
    - link:
      - /url: https://www.ikea.com/in/en/new/new-products/?filters=f-online-sellable%3Atrue#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/new/new-products/?filters=f-online-sellable%3Atrue%2Cf-subcategories%3A700417&sort=NAME_ASCENDING#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/new/new-products/?sort=MOST_POPULAR&filters=f-subcategories%3Ade001%2Cf-type%3APlant%20pot%7CArtificial%20potted%20plant%7CPotted%20plant%7CVase%7CArt ificial%20flower#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/new/new-products/?filters=f-subcategories%3Abm001%2Cf-type%3ACushion%20cover&sort=NEWEST&filters=f-online-sellable%3Atrue%2Cf-subcategories%3A10659#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/new/new-products/?%20?filters=f-subcategories%3Atl004&sort=MOST_POPULAR&filters=f-online-sellable%3Atrue%2Cf-subcategories%3Atl001#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/new/new-products/?filters=f-subcategories%3Ast007#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/new/new-products/?sort=MOST_POPULAR&filters=f-online-sellable%3Atrue%2Cf-subcategories%3A20489#product-list-skip
      - img
    - link:
      - /url: https://www.ikea.com/in/en/new/new-products/?sort=NEWEST&filters=f-online-sellable%3Atrue%2Cf-subcategories%3Abc001#product-list-skip
      - img
    - link "A bright living room with two beige STOCKHOLM 2025 2-seat sofas facing each other, with a pouffe on a rug between them.":
      - /url: https://www.ikea.com/in/en/cat/stockholm-collection-11989/?sort=NEWEST&filters=f-online-sellable%3Atrue
      - img "A bright living room with two beige STOCKHOLM 2025 2-seat sofas facing each other, with a pouffe on a rug between them."
    - heading "STOCKHOLM 2025- A collection today. Collectables tomorrow." [level=2]
    - paragraph: This collection blends durability and craftsmanship to create beautiful and timeless furniture and accessories
    - link "Explore STOCKHOLM collection":
      - /url: https://www.ikea.com/in/en/cat/stockholm-collection-11989/?sort=NEWEST&filters=f-online-sellable%3Atrue
    - heading "Popular picks" [level=2]
    - link "Skip listing":
      - /url: "#pub__-carousel__d49b46a0-2be0-11f0-991c-f78f8b8b637d-skip-btn"
    - list:
      - listitem:
        - link "Mirrors":
          - /url: https://www.ikea.com/in/en/cat/mirrors-20489/?filters=f-online-sellable%3Atrue
          - img "Mirrors"
    - list:
      - listitem:
        - link "Shoe racks":
          - /url: https://www.ikea.com/in/en/cat/shoe-coat-hat-racks-10454/?filters=f-online-sellable%3Atrue
          - img "Shoe racks"
    - list:
      - listitem:
        - link "Curtains":
          - /url: https://www.ikea.com/in/en/cat/curtains-blinds-tl002/?filters=f-online-sellable%3Atrue
          - img "Curtains"
    - list:
      - listitem:
        - link "Small storage":
          - /url: https://www.ikea.com/in/en/cat/storage-boxes-baskets-10550/?filters=f-online-sellable%3Atrue
          - img "Small storage"
    - list:
      - listitem:
        - link "Trolleys":
          - /url: https://www.ikea.com/in/en/cat/trolleys-fu005/?filters=f-online-sellable%3Atrue
          - img "Trolleys"
    - list:
      - listitem:
        - link "TV units":
          - /url: https://www.ikea.com/in/en/cat/tv-media-furniture-10475/?filters=f-online-sellable%3Atrue
          - img "TV units"
    - list:
      - listitem:
        - link "Lamps":
          - /url: https://www.ikea.com/in/en/cat/lamps-li002/?filters=f-online-sellable%3Atrue
          - img "Lamps"
    - list:
      - listitem:
        - link "Dinnerware":
          - /url: https://www.ikea.com/in/en/cat/dinnerware-18860/?filters=f-online-sellable%3Atrue
          - img "Dinnerware"
    - list:
      - listitem:
        - link "Toys & play":
          - /url: https://www.ikea.com/in/en/cat/toys-play-18734/?filters=f-online-sellable%3Atrue
          - img "Toys & play"
    - list:
      - listitem:
        - link "Rugs":
          - /url: https://www.ikea.com/in/en/cat/rugs-10653/?filters=f-online-sellable%3Atrue
          - img "Rugs"
    - heading "Get the look" [level=2]
    - paragraph: Ideas based on your recently viewed products
    - link "Skip listing":
      - /url: "#crec--carousel__carousel-imc-P0-0-skip-btn"
    - heading "More from IKEA India" [level=2]
    - link "Skip listing":
      - /url: "#pub__-carousel__f68fabe0-aad9-11ee-972e-7728bb6e9206-skip-btn"
    - list:
      - listitem:
        - link "IKEA for Business":
          - /url: https://www.ikea.com/in/en/ikea-business/
          - img "IKEA for Business"
    - list:
      - listitem:
        - link "IKEA App":
          - /url: https://www.ikea.com/in/en/customer-service/mobile-apps/
          - img "IKEA App"
    - list:
      - listitem:
        - link "IKEA gift card":
          - /url: https://www.ikea.com/in/en/customer-service/ikea-gift-cards-pub004138e1/
          - img "IKEA gift card"
    - list:
      - listitem:
        - link "Shop by phone":
          - /url: https://www.ikea.com/in/en/customer-service/we-can-help-you-shop-pub633bfb80/
          - img "Shop by phone"
    - list:
      - listitem:
        - link "IKEA Food":
          - /url: https://www.ikea.com/in/en/stores/restaurant/
          - img "IKEA Food"
    - list:
      - listitem:
        - link "Sustainability":
          - /url: https://www.ikea.com/in/en/this-is-ikea/sustainable-everyday/
          - img "Sustainability"
    - list:
      - listitem:
        - link "Join IKEA Family":
          - /url: https://www.ikea.com/in/en/ikea-family/about/
          - img "Join IKEA Family"
    - list:
      - listitem:
        - link "Product recall":
          - /url: https://www.ikea.com/in/en/customer-service/about-product-product-recall-pub4a713c1d/
          - img "Product recall"
    - heading "Discover our services" [level=2]
    - link "Skip listing":
      - /url: "#pub__-carousel__2d694db0-b1bb-11ed-9a59-071b69c16f36-skip-btn"
    - list:
      - listitem:
        - link "All services":
          - /url: https://www.ikea.com/in/en/customer-service/
    - list:
      - listitem:
        - link "Home Delivery":
          - /url: https://www.ikea.com/in/en/customer-service/delivery-service-pubd5889e60/
          - img "Home Delivery"
    - list:
      - listitem:
        - link "Click & collect":
          - /url: https://www.ikea.com/in/en/customer-service/services/click-and-collect-shopping-at-ikea-stores-pubada7dae3/
          - img "Click & collect"
    - list:
      - listitem:
        - link "Personal shopper":
          - /url: https://www.ikea.com/in/en/customer-service/services/personal-shopper-pubdc2b0ed0/
          - img "Personal shopper"
    - list:
      - listitem:
        - link "Interior design service":
          - /url: https://www.ikea.com/in/en/planners/interior-design-planning-pubd77b3be0/
          - img "Interior design service"
    - list:
      - listitem:
        - link "Measuring service":
          - /url: https://www.ikea.com/in/en/customer-service/measuring-service-pub2ecf8410/
          - img "Measuring service"
    - list:
      - listitem:
        - link "Kitchen planning":
          - /url: https://www.ikea.com/in/en/customer-service/need-help-planning-a-kitchen-book-an-appointment-now-pub68c33a30/
          - img "Kitchen planning"
    - list:
      - listitem:
        - link "Assembly":
          - /url: https://www.ikea.com/in/en/customer-service/services/assembly/
          - img "Assembly"
    - list:
      - listitem:
        - link "Installation":
          - /url: https://www.ikea.com/in/en/customer-service/installation-service-pub7f1a7a60/
          - img "Installation"
    - list:
      - listitem:
        - link "Design your room":
          - /url: https://www.ikea.com/in/en/planners/design-your-dream-home-pub66945dd9/
          - img "Design your room"
    - heading "More ideas and inspiration" [level=2]
    - paragraph
    - button "Loading…" [disabled]
    - heading "Explore our furniture & home furnishing range" [level=3]:
      - strong: Explore our furniture & home furnishing range
    - paragraph:
      - strong: IKEA is a global leader in life at home.
    - paragraph:
      - text: Whether you just moved into a new home or looking to revamp your current one, we at
      - link "IKEA":
        - /url: https://www.ikea.com/in/en/this-is-ikea/?itm_campaign=ikeaindia&itm_element=text&itm_content=thisisikea
      - text: are here to inspire you with affordable home furniture solutions, there is a piece of
      - link "furniture":
        - /url: https://www.ikea.com/in/en/cat/furniture-fu001/?itm_campaign=cat&itm_element=text&itm_content=furniture
      - text: to every corner of your home. Create a home that is perfect for you.
    - paragraph:
      - text: Shopping at IKEA is a bit different and exciting compared to your shopping at an everyday retail. It is about experiencing solutions first hand and getting to know
      - link "ideas":
        - /url: https://www.ikea.com/in/en/ideas/?itm_campaign=ideas&itm_element=text&itm_content=ideas
      - text: and inspirations that can fit perfectly into your home. That’s why, we offer more than 7500 products, solutions at our store along with home furnishing ideas and services for you to explore.
    - paragraph:
      - text: When you visit
      - link "IKEA store":
        - /url: https://www.ikea.com/in/en/stores/?itm_campaign=store&itm_element=text&itm_content=stores
      - text: ", make yourself at home in our many room settings in the store. Squeeze the upholsteries, feel the oriental rugs, try the"
      - link "sofa beds":
        - /url: https://www.ikea.com/in/en/cat/sofa-beds-10663/?itm_campaign=cat&itm_element=text&itm_content=sofabeds
      - text: and open the
      - link "cabinets":
        - /url: https://www.ikea.com/in/en/cat/cabinets-10409/?itm_campaign=cat&itm_element=text&itm_content=cabinets
      - text: to feel the quality. On the price tag, you’ll find all you need to know about a product, including where in the store you can pick it up.
    - paragraph: Since most IKEA furniture is flat-packed, they are quite easy to bring home when you buy from the store.
    - paragraph:
      - strong:
        - link "Sofas":
          - /url: https://www.ikea.com/in/en/cat/sofas-fu003/?itm_campaign=cat&itm_element=link&itm_content=sofasarmchairs
        - text: "|"
        - link "Beds":
          - /url: https://www.ikea.com/in/en/cat/beds-bm003/?itm_campaign=cat&itm_element=link&itm_content=beds
        - text: "|"
        - link "Dining":
          - /url: https://www.ikea.com/in/en/cat/dining-tables-21825/?itm_campaign=cat&itm_element=link&itm_content=diningtables
        - text: "|"
        - link "Tv units":
          - /url: https://www.ikea.com/in/en/cat/tv-media-furniture-10475/?itm_campaign=cat&itm_element=link&itm_content=tvunits
        - text: "|"
        - link "Mattresses":
          - /url: https://www.ikea.com/in/en/cat/mattresses-bm002/?itm_campaign=cat&itm_element=link&itm_content=mattresses
        - text: "|"
        - link "Seating":
          - /url: https://www.ikea.com/in/en/cat/tables-chairs-fu002/?itm_campaign=cat&itm_element=link&itm_content=seating
        - text: "|"
        - link "Coffee tables":
          - /url: https://www.ikea.com/in/en/cat/coffee-tables-10716/?itm_campaign=cat&itm_element=link&itm_content=coffeetable
        - text: "|"
        - link "Wardrobes":
          - /url: https://www.ikea.com/in/en/cat/wardrobes-19053/?itm_campaign=cat&itm_element=link&itm_content=wardrobes
        - text: "|"
        - link "Storage":
          - /url: https://www.ikea.com/in/en/cat/storage-organisation-st001/?itm_campaign=cat&itm_element=link&itm_content=storageorganisation
        - text: "|"
        - link "Bookshelves":
          - /url: https://www.ikea.com/in/en/cat/bookcases-shelving-units-st002/?itm_campaign=cat&itm_element=link&itm_content=bookcases
        - text: "| Shoe racks |"
        - link "Decor":
          - /url: https://www.ikea.com/in/en/cat/home-decor-de001/?itm_campaign=cat&itm_element=link&itm_content=decoration
        - text: "|"
        - link "Bathroom":
          - /url: https://www.ikea.com/in/en/cat/bathroom-products-ba001/?itm_campaign=cat&itm_element=link&itm_content=bathroom
        - text: "|"
        - link "Textiles":
          - /url: https://www.ikea.com/in/en/cat/textiles-tl001/?itm_campaign=cat&itm_element=link&itm_content=textiles
        - text: "|"
        - link "Pots & plants":
          - /url: https://www.ikea.com/in/en/cat/pots-plants-pp001/?itm_campaign=cat&itm_element=link&itm_content=potsandplants
        - text: "|"
        - link "Home electronics":
          - /url: https://www.ikea.com/in/en/cat/home-electronics-he001/?itm_campaign=cat&itm_element=link&itm_content=homeelectronics
        - text: "|"
        - link "Home improvement":
          - /url: https://www.ikea.com/in/en/cat/home-improvement-hi001/?itm_campaign=cat&itm_element=link&itm_content=homeimprovement
        - text: "|"
        - link "Lighting":
          - /url: https://www.ikea.com/in/en/cat/lighting-li001/?itm_campaign=cat&itm_element=link&itm_content=lighting
- contentinfo
- region "Cookie consent banner":
  - dialog "You are in control of your own cookies":
    - heading "You are in control of your own cookies" [level=2]
    - paragraph: "IKEA India and our digital partners use cookies on this site. Some are strictly necessary to run the site but below are the optional ones:"
    - list:
      - listitem: Used for measuring how the site is used
      - listitem: Enabling personalisation of the site
      - listitem: For advertising marketing and social media
    - link ", opens in a new tab":
      - /url: https://www.ikea.com/in/en/customer-service/cookie-policy-pubffc638db
      - text: Read more about these cookies
    - button "Ok"
    - button "Cookies Settings"
```

# Test source

```ts
   1 | import homepageLocators from '../locators/homepageLocators.js';
   2 | import { expect } from '@playwright/test';  
   3 |
   4 | class Homepage {
   5 |     constructor(page) {
   6 |         this.page = page;
   7 |     }
   8 |
   9 |     /**  **Utility Functions** **/
  10 |     async waitForTimeout(time = 2000) {
  11 |         await this.page.waitForTimeout(time);
  12 |     }
  13 |
  14 |     /**  **Element Highlighting** **/
  15 |     async highlightElement(selector) {
> 16 |         const elementHandle = await this.page.locator(selector).elementHandle();
     |                                                                 ^ Error: locator.elementHandle: Test timeout of 30000ms exceeded.
  17 |         expect(elementHandle).not.toBeNull();  
  18 |         
  19 |         await this.page.evaluate((element) => {
  20 |             element.style.border = '3px solid red';
  21 |             setTimeout(() => element.style.border = '', 3000);
  22 |         }, elementHandle);
  23 |     }
  24 |
  25 |     /**  **Set Pincode** **/
  26 |     async setPincode(pincode) {
  27 |         await expect(this.page.locator(homepageLocators.pincodeButton)).toBeVisible()
  28 |
  29 |         await this.highlightElement(homepageLocators.pincodeButton);
  30 |         await this.page.locator(homepageLocators.pincodeButton).click();
  31 |         await this.waitForTimeout();
  32 |
  33 |         await this.highlightElement(homepageLocators.pincodeInput);
  34 |         await this.page.locator(homepageLocators.pincodeInput).fill(pincode);
  35 |
  36 |         await expect(this.page.locator(homepageLocators.confirmPincode)).toBeVisible()
  37 |
  38 |         await this.page.locator(homepageLocators.confirmPincode).click();
  39 |     }
  40 |
  41 |     /**  **Search Product** **/
  42 |     async searchProduct(productName) {
  43 |
  44 |         await this.highlightElement(homepageLocators.searchInput);
  45 |         await this.page.locator(homepageLocators.searchInput).fill(productName);
  46 |         await this.waitForTimeout();
  47 |
  48 |         await expect(this.page.locator(homepageLocators.searchButton)).toBeVisible();  // Ensure search button is visible
  49 |
  50 |         await this.highlightElement(homepageLocators.searchButton);
  51 |         await this.page.locator(homepageLocators.searchButton).click();
  52 |     }
  53 | }
  54 |
  55 | export default Homepage;
  56 |
```