# Test info

- Name: IKEA Automation Tests >> Search and Extract Available Sofas & Seating
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:41:10

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[aria-label="Close"]')

    at ProductPage.sortByMostPopular (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\productPage.js:54:67)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:47:13
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:46:9
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: "#hnf-content"
- banner:
  - button "Change language or country/region, current language is English": INEnglish
  - link "Flat 15% off on furniture shopping above Rs. 20,000. Shop now.":
    - /url: https://www.ikea.com/in/en/offers/
  - button "500001 - Enter postal code": "500001"
  - button "Hyderabad - Select store": Hyderabad
  - link "IKEA Home":
    - /url: https://www.ikea.com/in/en/
  - search:
    - combobox "Search for products, inspiration or new arrivals": Sofas & Seating
    - button "Clear the search input field"
    - button "Search"
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
  - paragraph: Showing results for "Sofas & Seating". We found 201 products and 299 content results.
  - paragraph:
    - link "Flat 15% OFF + a ₹1000 voucher on furniture purchases above INR 20,000":
      - /url: https://www.ikea.com/in/en/offers/
  - heading "Showing results for \"Sofas & Seating\"" [level=1]: "\"Sofas & Seating\""
  - link "199 products":
    - /url: "#product-list"
  - link "New lower price":
    - /url: "#pg-NEW_LOWER_PRICE_PRODUCTS"
  - link "299 content results":
    - /url: "#content-carousel"
  - heading "Sort and Filter" [level=2]
  - button "Sort"
  - button "Price"
  - button "Size"
  - button "Category"
  - button "Type"
  - button "Colour"
  - button "Material"
  - button "Number of seats"
  - button "All filters"
  - heading "Results list" [level=2]
  - link "GLOSTAD 2-seat sofa, Knisa medium blue GLOSTAD 2-seat sofa, Knisa medium blue":
    - /url: https://www.ikea.com/in/en/p/glostad-2-seat-sofa-knisa-medium-blue-00488821/
    - img "GLOSTAD 2-seat sofa, Knisa medium blue"
    - img "GLOSTAD 2-seat sofa, Knisa medium blue"
  - link "GLOSTAD 2-seat sofa, Knisa medium blue Price Rs. 9990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/glostad-2-seat-sofa-knisa-medium-blue-00488821/
    - heading "GLOSTAD 2-seat sofa, Knisa medium blue" [level=3]
    - emphasis: Price Rs. 9990
    - text: Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.5 out of 5 stars. Total reviews: (672)"':
    - 'img "Review: 4.5 out of 5 stars. Total reviews:"'
    - text: (672)
  - button "Add \"GLOSTAD 2-seat sofa\" to cart"
  - button "Save \"GLOSTAD 2-seat sofa\" to shopping list"
  - text: Available for delivery Back in Hyderabad in 1 week Firm
  - group "More options GLOSTAD":
    - text: More options GLOSTAD
    - 'radio "Option: GLOSTAD 2-seat sofa, Knisa medium blue" [checked]'
    - 'link "Option: GLOSTAD 2-seat sofa, Knisa medium blue"':
      - /url: https://www.ikea.com/in/en/p/glostad-2-seat-sofa-knisa-medium-blue-00488821/
    - 'radio "Option: GLOSTAD 2-seat sofa, Knisa dark grey"'
    - 'link "Option: GLOSTAD 2-seat sofa, Knisa dark grey"':
      - /url: https://www.ikea.com/in/en/p/glostad-2-seat-sofa-knisa-dark-grey-10489009/
  - link "NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-2-seat-modular-sofa-outdoor-light-brown-stained-s09579317/
    - img "NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained"
  - link "NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained Price Rs. 15000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-2-seat-modular-sofa-outdoor-light-brown-stained-s09579317/
    - heading "NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained" [level=3]
    - text: Price Rs. 15000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.6 out of 5 stars. Total reviews: (34)"':
    - 'img "Review: 4.6 out of 5 stars. Total reviews:"'
    - text: (34)
  - button "Add \"NÄMMARÖ 2-seat modular sofa, outdoor\" to cart"
  - button "Save \"NÄMMARÖ 2-seat modular sofa, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - group "More options NÄMMARÖ":
    - text: More options NÄMMARÖ
    - 'radio "Option: NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained" [checked]'
    - 'link "Option: NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained"':
      - /url: https://www.ikea.com/in/en/p/naemmaroe-2-seat-modular-sofa-outdoor-light-brown-stained-s09579317/
    - 'radio "Option: NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained/Frösön/Duvholmen beige"'
    - 'link "Option: NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained/Frösön/Duvholmen beige"':
      - /url: https://www.ikea.com/in/en/p/naemmaroe-2-seat-modular-sofa-outdoor-light-brown-stained-froesoen-duvholmen-beige-s99610238/
  - link "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm":
    - /url: https://www.ikea.com/in/en/p/jolpen-2-seat-sofa-outdoor-white-grey-20522739/
    - img "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm"
    - img "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm"
  - link "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm (39 3/8x23 1/4x26 3/8 \") Price Rs. 5990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/jolpen-2-seat-sofa-outdoor-white-grey-20522739/
    - heading "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm (39 3/8x23 1/4x26 3/8 \")" [level=3]
    - emphasis: Price Rs. 5990
    - text: Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.5 out of 5 stars. Total reviews: (105)"':
    - 'img "Review: 4.5 out of 5 stars. Total reviews:"'
    - text: (105)
  - button "Add \"JOLPEN 2-seat sofa, outdoor\" to cart"
  - button "Save \"JOLPEN 2-seat sofa, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - paragraph: Top seller
  - link "EKTORP 3-seat sofa, Kilanda dark blue EKTORP 3-seat sofa, Kilanda dark blue":
    - /url: https://www.ikea.com/in/en/p/ektorp-3-seat-sofa-kilanda-dark-blue-s09509008/
    - img "EKTORP 3-seat sofa, Kilanda dark blue"
    - img "EKTORP 3-seat sofa, Kilanda dark blue"
  - link "EKTORP 3-seat sofa, Kilanda dark blue Price Rs. 29990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/ektorp-3-seat-sofa-kilanda-dark-blue-s09509008/
    - heading "EKTORP 3-seat sofa, Kilanda dark blue" [level=3]
    - text: Price Rs. 29990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.5 out of 5 stars. Total reviews: (271)"':
    - 'img "Review: 4.5 out of 5 stars. Total reviews:"'
    - text: (271)
  - button "Add \"EKTORP 3-seat sofa\" to cart"
  - button "Save \"EKTORP 3-seat sofa\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Extra soft
  - group "More options EKTORP":
    - text: More options EKTORP
    - 'radio "Option: EKTORP 3-seat sofa, Kilanda dark blue" [checked]'
    - 'link "Option: EKTORP 3-seat sofa, Kilanda dark blue"':
      - /url: https://www.ikea.com/in/en/p/ektorp-3-seat-sofa-kilanda-dark-blue-s09509008/
    - 'radio "Option: EKTORP 3-seat sofa, Kilanda light beige"'
    - 'link "Option: EKTORP 3-seat sofa, Kilanda light beige"':
      - /url: https://www.ikea.com/in/en/p/ektorp-3-seat-sofa-kilanda-light-beige-s49509011/
    - 'radio "Option: EKTORP 3-seat sofa, Hakebo grey-green"'
    - 'link "Option: EKTORP 3-seat sofa, Hakebo grey-green"':
      - /url: https://www.ikea.com/in/en/p/ektorp-3-seat-sofa-hakebo-grey-green-s39509002/
    - 'radio "Option: EKTORP 3-seat sofa, Karlshov beige/multicolour"'
    - 'link "Option: EKTORP 3-seat sofa, Karlshov beige/multicolour"':
      - /url: https://www.ikea.com/in/en/p/ektorp-3-seat-sofa-karlshov-beige-multicolour-s69509005/
    - 'radio "Option: EKTORP 3-seat sofa, Hakebo dark grey"'
    - 'link "Option: EKTORP 3-seat sofa, Hakebo dark grey"':
      - /url: https://www.ikea.com/in/en/p/ektorp-3-seat-sofa-hakebo-dark-grey-s19508999/
  - link "NYHAMN 3-seat sofa-bed, with foam mattress/Knisa grey/beige NYHAMN 3-seat sofa-bed, with foam mattress/Knisa grey/beige":
    - /url: https://www.ikea.com/in/en/p/nyhamn-3-seat-sofa-bed-with-foam-mattress-knisa-grey-beige-s19306369/
    - img "NYHAMN 3-seat sofa-bed, with foam mattress/Knisa grey/beige"
    - img "NYHAMN 3-seat sofa-bed, with foam mattress/Knisa grey/beige"
  - link "NYHAMN 3-seat sofa-bed, with foam mattress/Knisa grey/beige Price Rs. 24990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/nyhamn-3-seat-sofa-bed-with-foam-mattress-knisa-grey-beige-s19306369/
    - heading "NYHAMN 3-seat sofa-bed, with foam mattress/Knisa grey/beige" [level=3]
    - text: Price Rs. 24990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 3.7 out of 5 stars. Total reviews: (200)"':
    - 'img "Review: 3.7 out of 5 stars. Total reviews:"'
    - text: (200)
  - button "Add \"NYHAMN 3-seat sofa-bed\" to cart"
  - button "Save \"NYHAMN 3-seat sofa-bed\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Firm
  - group "More options NYHAMN":
    - text: More options NYHAMN
    - 'radio "Option: NYHAMN 3-seat sofa-bed, with foam mattress/Knisa grey/beige" [checked]'
    - 'link "Option: NYHAMN 3-seat sofa-bed, with foam mattress/Knisa grey/beige"':
      - /url: https://www.ikea.com/in/en/p/nyhamn-3-seat-sofa-bed-with-foam-mattress-knisa-grey-beige-s19306369/
    - 'radio "Option: NYHAMN 3-seat sofa-bed, with pocket spring mattress/Skartofta black/light grey"'
    - 'link "Option: NYHAMN 3-seat sofa-bed, with pocket spring mattress/Skartofta black/light grey"':
      - /url: https://www.ikea.com/in/en/p/nyhamn-3-seat-sofa-bed-with-pocket-spring-mattress-skartofta-black-light-grey-s29494614/
    - 'radio "Option: NYHAMN 3-seat sofa-bed, with pocket spring mattress/Skartofta red/brown"'
    - 'link "Option: NYHAMN 3-seat sofa-bed, with pocket spring mattress/Skartofta red/brown"':
      - /url: https://www.ikea.com/in/en/p/nyhamn-3-seat-sofa-bed-with-pocket-spring-mattress-skartofta-red-brown-s89494630/
    - 'radio "Option: NYHAMN 3-seat sofa-bed, with foam mattress/Skartofta red/brown"'
    - 'link "Option: NYHAMN 3-seat sofa-bed, with foam mattress/Skartofta red/brown"':
      - /url: https://www.ikea.com/in/en/p/nyhamn-3-seat-sofa-bed-with-foam-mattress-skartofta-red-brown-s59499993/
    - 'radio "Option: NYHAMN 3-seat sofa-bed, with foam mattress/Skartofta black/light grey"'
    - 'link "Option: NYHAMN 3-seat sofa-bed, with foam mattress/Skartofta black/light grey"':
      - /url: https://www.ikea.com/in/en/p/nyhamn-3-seat-sofa-bed-with-foam-mattress-skartofta-black-light-grey-s09499981/
    - link "2 more options are available.":
      - /url: https://www.ikea.com/in/en/p/nyhamn-3-seat-sofa-bed-with-foam-mattress-knisa-grey-beige-s19306369/
      - text: "+2"
  - link "NÄMMARÖ Seat sec for modular sofa, outdoor, light brown stained NÄMMARÖ Seat sec for modular sofa, outdoor, light brown stained":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-seat-sec-for-modular-sofa-outdoor-light-brown-stained-00510351/
    - img "NÄMMARÖ Seat sec for modular sofa, outdoor, light brown stained"
    - img "NÄMMARÖ Seat sec for modular sofa, outdoor, light brown stained"
  - link "NÄMMARÖ Seat sec for modular sofa, outdoor, light brown stained Price Rs. 5500 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-seat-sec-for-modular-sofa-outdoor-light-brown-stained-00510351/
    - heading "NÄMMARÖ Seat sec for modular sofa, outdoor, light brown stained" [level=3]
    - text: Price Rs. 5500 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.8 out of 5 stars. Total reviews: (164)"':
    - 'img "Review: 4.8 out of 5 stars. Total reviews:"'
    - text: (164)
  - button "Add \"NÄMMARÖ Seat sec for modular sofa, outdoor\" to cart"
  - button "Save \"NÄMMARÖ Seat sec for modular sofa, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - link "LINANÄS 3-seat sofa, Vissle beige LINANÄS 3-seat sofa, Vissle beige":
    - /url: https://www.ikea.com/in/en/p/linanaes-3-seat-sofa-vissle-beige-90512237/
    - img "LINANÄS 3-seat sofa, Vissle beige"
    - img "LINANÄS 3-seat sofa, Vissle beige"
  - link "LINANÄS 3-seat sofa, Vissle beige Price Rs. 24990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/linanaes-3-seat-sofa-vissle-beige-90512237/
    - heading "LINANÄS 3-seat sofa, Vissle beige" [level=3]
    - text: Price Rs. 24990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 3.7 out of 5 stars. Total reviews: (169)"':
    - 'img "Review: 3.7 out of 5 stars. Total reviews:"'
    - text: (169)
  - button "Add \"LINANÄS 3-seat sofa\" to cart"
  - button "Save \"LINANÄS 3-seat sofa\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Firm
  - group "More options LINANÄS":
    - text: More options LINANÄS
    - 'radio "Option: LINANÄS 3-seat sofa, Vissle beige" [checked]'
    - 'link "Option: LINANÄS 3-seat sofa, Vissle beige"':
      - /url: https://www.ikea.com/in/en/p/linanaes-3-seat-sofa-vissle-beige-90512237/
    - 'radio "Option: LINANÄS 3-seat sofa, Vissle dark grey"'
    - 'link "Option: LINANÄS 3-seat sofa, Vissle dark grey"':
      - /url: https://www.ikea.com/in/en/p/linanaes-3-seat-sofa-vissle-dark-grey-20512250/
  - paragraph: Top seller
  - link "GAMMALBYN 3-seat sofa, grey GAMMALBYN 3-seat sofa, grey":
    - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-grey-70473251/
    - img "GAMMALBYN 3-seat sofa, grey"
    - img "GAMMALBYN 3-seat sofa, grey"
  - link "GAMMALBYN 3-seat sofa, grey Price Rs. 22990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-grey-70473251/
    - heading "GAMMALBYN 3-seat sofa, grey" [level=3]
    - text: Price Rs. 22990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4 out of 5 stars. Total reviews: (79)"':
    - 'img "Review: 4 out of 5 stars. Total reviews:"'
    - text: (79)
  - button "Add \"GAMMALBYN 3-seat sofa\" to cart"
  - button "Save \"GAMMALBYN 3-seat sofa\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - group "More options GAMMALBYN":
    - text: More options GAMMALBYN
    - 'radio "Option: GAMMALBYN 3-seat sofa, grey" [checked]'
    - 'link "Option: GAMMALBYN 3-seat sofa, grey"':
      - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-grey-70473251/
    - 'radio "Option: GAMMALBYN 3-seat sofa, blue"'
    - 'link "Option: GAMMALBYN 3-seat sofa, blue"':
      - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-blue-80473255/
    - 'radio "Option: GAMMALBYN 3-seat sofa, black"'
    - 'link "Option: GAMMALBYN 3-seat sofa, black"':
      - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-black-50473252/
    - 'radio "Option: GAMMALBYN 3-seat sofa, red"'
    - 'link "Option: GAMMALBYN 3-seat sofa, red"':
      - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-red-70473265/
    - 'radio "Option: GAMMALBYN 3-seat sofa, brown"'
    - 'link "Option: GAMMALBYN 3-seat sofa, brown"':
      - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-brown-60473256/
  - link "Room Give new life to your seating":
    - /url: https://www.ikea.com/in/en/rooms/dining/gallery/give-new-life-to-your-seating-pubd80ca412/
    - paragraph: Room
    - paragraph: Give new life to your seating
  - paragraph: Top seller
  - link "GAMMALBYN 3-seat sofa-bed, blue GAMMALBYN 3-seat sofa-bed, blue":
    - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-bed-blue-70558028/
    - img "GAMMALBYN 3-seat sofa-bed, blue"
    - img "GAMMALBYN 3-seat sofa-bed, blue"
  - link "GAMMALBYN 3-seat sofa-bed, blue Price Rs. 39990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-bed-blue-70558028/
    - heading "GAMMALBYN 3-seat sofa-bed, blue" [level=3]
    - text: Price Rs. 39990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.1 out of 5 stars. Total reviews: (9)"':
    - 'img "Review: 4.1 out of 5 stars. Total reviews:"'
    - text: (9)
  - button "Add \"GAMMALBYN 3-seat sofa-bed\" to cart"
  - button "Save \"GAMMALBYN 3-seat sofa-bed\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - group "More options GAMMALBYN":
    - text: More options GAMMALBYN
    - 'radio "Option: GAMMALBYN 3-seat sofa-bed, blue" [checked]'
    - 'link "Option: GAMMALBYN 3-seat sofa-bed, blue"':
      - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-bed-blue-70558028/
    - 'radio "Option: GAMMALBYN 3-seat sofa-bed, grey"'
    - 'link "Option: GAMMALBYN 3-seat sofa-bed, grey"':
      - /url: https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-bed-grey-70558009/
  - paragraph: Top seller
  - link "FRIDHULT Sofa-bed, Knisa light grey FRIDHULT Sofa-bed, Knisa light grey":
    - /url: https://www.ikea.com/in/en/p/fridhult-sofa-bed-knisa-light-grey-60355762/
    - img "FRIDHULT Sofa-bed, Knisa light grey"
    - img "FRIDHULT Sofa-bed, Knisa light grey"
  - link "FRIDHULT Sofa-bed, Knisa light grey Price Rs. 19990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/fridhult-sofa-bed-knisa-light-grey-60355762/
    - heading "FRIDHULT Sofa-bed, Knisa light grey" [level=3]
    - text: Price Rs. 19990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 3.3 out of 5 stars. Total reviews: (98)"':
    - 'img "Review: 3.3 out of 5 stars. Total reviews:"'
    - text: (98)
  - button "Add \"FRIDHULT Sofa-bed\" to cart"
  - button "Save \"FRIDHULT Sofa-bed\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - group "More options FRIDHULT":
    - text: More options FRIDHULT
    - 'radio "Option: FRIDHULT Sofa-bed, Knisa light grey" [checked]'
    - 'link "Option: FRIDHULT Sofa-bed, Knisa light grey"':
      - /url: https://www.ikea.com/in/en/p/fridhult-sofa-bed-knisa-light-grey-60355762/
    - 'radio "Option: FRIDHULT Sofa-bed, Skiftebo yellow"'
    - 'link "Option: FRIDHULT Sofa-bed, Skiftebo yellow"':
      - /url: https://www.ikea.com/in/en/p/fridhult-sofa-bed-skiftebo-yellow-20575450/
  - link "KIVIK 3-seat sofa, Tibbleby beige/grey KIVIK 3-seat sofa, Tibbleby beige/grey":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-tibbleby-beige-grey-s59440592/
    - img "KIVIK 3-seat sofa, Tibbleby beige/grey"
    - img "KIVIK 3-seat sofa, Tibbleby beige/grey"
  - link "New lower price KIVIK 3-seat sofa, Tibbleby beige/grey Price Rs. 35990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 41990":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-tibbleby-beige-grey-s59440592/
    - text: New lower price
    - heading "KIVIK 3-seat sofa, Tibbleby beige/grey" [level=3]
    - text: Price Rs. 35990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 41990
  - 'button "Review: 4.3 out of 5 stars. Total reviews: (327)"':
    - 'img "Review: 4.3 out of 5 stars. Total reviews:"'
    - text: (327)
  - button "Add \"KIVIK 3-seat sofa\" to cart"
  - button "Save \"KIVIK 3-seat sofa\" to shopping list"
  - text: Available for delivery Out of stock in Hyderabad Medium firm
  - group "More options KIVIK":
    - text: More options KIVIK
    - 'radio "Option: KIVIK 3-seat sofa, Tibbleby beige/grey" [checked]'
    - 'link "Option: KIVIK 3-seat sofa, Tibbleby beige/grey"':
      - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-tibbleby-beige-grey-s59440592/
    - 'radio "Option: KIVIK 3-seat sofa, Kelinge grey-turquoise"'
    - 'link "Option: KIVIK 3-seat sofa, Kelinge grey-turquoise"':
      - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-kelinge-grey-turquoise-s19443050/
    - 'radio "Option: KIVIK 3-seat sofa, Tresund light beige"'
    - 'link "Option: KIVIK 3-seat sofa, Tresund light beige"':
      - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-tresund-light-beige-s49482832/
  - link "ORMARYD 2-seat sofa, grey ORMARYD 2-seat sofa, grey":
    - /url: https://www.ikea.com/in/en/p/ormaryd-2-seat-sofa-grey-00477592/
    - img "ORMARYD 2-seat sofa, grey"
    - img "ORMARYD 2-seat sofa, grey"
  - link "ORMARYD 2-seat sofa, grey Price Rs. 17990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/ormaryd-2-seat-sofa-grey-00477592/
    - heading "ORMARYD 2-seat sofa, grey" [level=3]
    - text: Price Rs. 17990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.4 out of 5 stars. Total reviews: (12)"':
    - 'img "Review: 4.4 out of 5 stars. Total reviews:"'
    - text: (12)
  - button "Add \"ORMARYD 2-seat sofa\" to cart"
  - button "Save \"ORMARYD 2-seat sofa\" to shopping list"
  - text: Available for delivery Back in Hyderabad in 2 weeks
  - group "More options ORMARYD":
    - text: More options ORMARYD
    - 'radio "Option: ORMARYD 2-seat sofa, grey" [checked]'
    - 'link "Option: ORMARYD 2-seat sofa, grey"':
      - /url: https://www.ikea.com/in/en/p/ormaryd-2-seat-sofa-grey-00477592/
    - 'radio "Option: ORMARYD 2-seat sofa, dark blue"'
    - 'link "Option: ORMARYD 2-seat sofa, dark blue"':
      - /url: https://www.ikea.com/in/en/p/ormaryd-2-seat-sofa-dark-blue-20477591/
    - 'radio "Option: ORMARYD 2-seat sofa, beige"'
    - 'link "Option: ORMARYD 2-seat sofa, beige"':
      - /url: https://www.ikea.com/in/en/p/ormaryd-2-seat-sofa-beige-80477593/
    - 'radio "Option: ORMARYD 2-seat sofa, dark red"'
    - 'link "Option: ORMARYD 2-seat sofa, dark red"':
      - /url: https://www.ikea.com/in/en/p/ormaryd-2-seat-sofa-dark-red-40477590/
  - paragraph: Top seller
  - link "FRIHETEN Three-seat sofa-bed, Skiftebo dark grey FRIHETEN Three-seat sofa-bed, Skiftebo dark grey":
    - /url: https://www.ikea.com/in/en/p/friheten-three-seat-sofa-bed-skiftebo-dark-grey-30341149/
    - img "FRIHETEN Three-seat sofa-bed, Skiftebo dark grey"
    - img "FRIHETEN Three-seat sofa-bed, Skiftebo dark grey"
  - link "FRIHETEN Three-seat sofa-bed, Skiftebo dark grey Price Rs. 49990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/friheten-three-seat-sofa-bed-skiftebo-dark-grey-30341149/
    - heading "FRIHETEN Three-seat sofa-bed, Skiftebo dark grey" [level=3]
    - text: Price Rs. 49990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.2 out of 5 stars. Total reviews: (1100)"':
    - 'img "Review: 4.2 out of 5 stars. Total reviews:"'
    - text: (1100)
  - button "Add \"FRIHETEN Three-seat sofa-bed\" to cart"
  - button "Save \"FRIHETEN Three-seat sofa-bed\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Firm
  - group "More options FRIHETEN":
    - text: More options FRIHETEN
    - 'radio "Option: FRIHETEN Three-seat sofa-bed, Skiftebo dark grey" [checked]'
    - 'link "Option: FRIHETEN Three-seat sofa-bed, Skiftebo dark grey"':
      - /url: https://www.ikea.com/in/en/p/friheten-three-seat-sofa-bed-skiftebo-dark-grey-30341149/
    - 'radio "Option: FRIHETEN 3-seat sofa-bed, Faringe light grey"'
    - 'link "Option: FRIHETEN 3-seat sofa-bed, Faringe light grey"':
      - /url: https://www.ikea.com/in/en/p/friheten-3-seat-sofa-bed-faringe-light-grey-40551226/
    - 'radio "Option: FRIHETEN Three-seat sofa-bed, Bomstad black"'
    - 'link "Option: FRIHETEN Three-seat sofa-bed, Bomstad black"':
      - /url: https://www.ikea.com/in/en/p/friheten-three-seat-sofa-bed-bomstad-black-00341136/
    - 'radio "Option: FRIHETEN 3-seat sofa-bed, Faringe brown-orange"'
    - 'link "Option: FRIHETEN 3-seat sofa-bed, Faringe brown-orange"':
      - /url: https://www.ikea.com/in/en/p/friheten-3-seat-sofa-bed-faringe-brown-orange-80551229/
  - link "INGMARSÖ 2-seat sofa, in/outdoor, white green/beige, 118x69x69 cm INGMARSÖ 2-seat sofa, in/outdoor, white green/beige, 118x69x69 cm":
    - /url: https://www.ikea.com/in/en/p/ingmarsoe-2-seat-sofa-in-outdoor-white-green-beige-50463291/
    - img "INGMARSÖ 2-seat sofa, in/outdoor, white green/beige, 118x69x69 cm"
    - img "INGMARSÖ 2-seat sofa, in/outdoor, white green/beige, 118x69x69 cm"
  - link "INGMARSÖ 2-seat sofa, in/outdoor, white green/beige, 118x69x69 cm (46 1/2x27 1/8x27 1/8 \") Price Rs. 7990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/ingmarsoe-2-seat-sofa-in-outdoor-white-green-beige-50463291/
    - heading "INGMARSÖ 2-seat sofa, in/outdoor, white green/beige, 118x69x69 cm (46 1/2x27 1/8x27 1/8 \")" [level=3]
    - emphasis: Price Rs. 7990
    - text: Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.3 out of 5 stars. Total reviews: (6)"':
    - 'img "Review: 4.3 out of 5 stars. Total reviews:"'
    - text: (6)
  - button "Add \"INGMARSÖ 2-seat sofa, in/outdoor\" to cart"
  - button "Save \"INGMARSÖ 2-seat sofa, in/outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - link "NÄMMARÖ Easy chair, outdoor, light brown stained NÄMMARÖ Easy chair, outdoor, light brown stained":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-easy-chair-outdoor-light-brown-stained-s19529157/
    - img "NÄMMARÖ Easy chair, outdoor, light brown stained"
    - img "NÄMMARÖ Easy chair, outdoor, light brown stained"
  - link "NÄMMARÖ Easy chair, outdoor, light brown stained Price Rs. 7500 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-easy-chair-outdoor-light-brown-stained-s19529157/
    - heading "NÄMMARÖ Easy chair, outdoor, light brown stained" [level=3]
    - text: Price Rs. 7500 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 4.5 out of 5 stars. Total reviews: (110)"':
    - 'img "Review: 4.5 out of 5 stars. Total reviews:"'
    - text: (110)
  - button "Add \"NÄMMARÖ Easy chair, outdoor\" to cart"
  - button "Save \"NÄMMARÖ Easy chair, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - link "HOLMSUND 3-seat sofa bed, Borgunda beige HOLMSUND 3-seat sofa bed, Borgunda beige":
    - /url: https://www.ikea.com/in/en/p/holmsund-3-seat-sofa-bed-borgunda-beige-s89516934/
    - img "HOLMSUND 3-seat sofa bed, Borgunda beige"
    - img "HOLMSUND 3-seat sofa bed, Borgunda beige"
  - link "HOLMSUND 3-seat sofa bed, Borgunda beige Price Rs. 64990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/holmsund-3-seat-sofa-bed-borgunda-beige-s89516934/
    - heading "HOLMSUND 3-seat sofa bed, Borgunda beige" [level=3]
    - text: Price Rs. 64990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 3.8 out of 5 stars. Total reviews: (20)"':
    - 'img "Review: 3.8 out of 5 stars. Total reviews:"'
    - text: (20)
  - button "Add \"HOLMSUND 3-seat sofa bed\" to cart"
  - button "Save \"HOLMSUND 3-seat sofa bed\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - group "More options HOLMSUND":
    - text: More options HOLMSUND
    - 'radio "Option: HOLMSUND 3-seat sofa bed, Borgunda beige" [checked]'
    - 'link "Option: HOLMSUND 3-seat sofa bed, Borgunda beige"':
      - /url: https://www.ikea.com/in/en/p/holmsund-3-seat-sofa-bed-borgunda-beige-s89516934/
    - 'radio "Option: HOLMSUND 3-seat sofa bed, Borgunda dark grey"'
    - 'link "Option: HOLMSUND 3-seat sofa bed, Borgunda dark grey"':
      - /url: https://www.ikea.com/in/en/p/holmsund-3-seat-sofa-bed-borgunda-dark-grey-s79516939/
    - 'radio "Option: HOLMSUND 3-seat sofa bed, Kilanda dark blue"'
    - 'link "Option: HOLMSUND 3-seat sofa bed, Kilanda dark blue"':
      - /url: https://www.ikea.com/in/en/p/holmsund-3-seat-sofa-bed-kilanda-dark-blue-s39516922/
    - 'radio "Option: HOLMSUND 3-seat sofa bed, Kilanda grey-brown"'
    - 'link "Option: HOLMSUND 3-seat sofa bed, Kilanda grey-brown"':
      - /url: https://www.ikea.com/in/en/p/holmsund-3-seat-sofa-bed-kilanda-grey-brown-s19516923/
  - link "TALLSKÄR 2-seat sofa, outdoor, anthracite TALLSKÄR 2-seat sofa, outdoor, anthracite":
    - /url: https://www.ikea.com/in/en/p/tallskaer-2-seat-sofa-outdoor-anthracite-20575153/
    - img "TALLSKÄR 2-seat sofa, outdoor, anthracite"
    - img "TALLSKÄR 2-seat sofa, outdoor, anthracite"
  - link "New TALLSKÄR 2-seat sofa, outdoor, anthracite Price Rs. 16990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/tallskaer-2-seat-sofa-outdoor-anthracite-20575153/
    - text: New
    - heading "TALLSKÄR 2-seat sofa, outdoor, anthracite" [level=3]
    - text: Price Rs. 16990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - button "Add \"TALLSKÄR 2-seat sofa, outdoor\" to cart"
  - button "Save \"TALLSKÄR 2-seat sofa, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - link "NÄMMARÖ 3-seat modular sofa, outdoor, light brown stained":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-3-seat-modular-sofa-outdoor-light-brown-stained-s69579319/
    - img "NÄMMARÖ 3-seat modular sofa, outdoor, light brown stained"
  - link "NÄMMARÖ 3-seat modular sofa, outdoor, light brown stained Price Rs. 22500 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-3-seat-modular-sofa-outdoor-light-brown-stained-s69579319/
    - heading "NÄMMARÖ 3-seat modular sofa, outdoor, light brown stained" [level=3]
    - text: Price Rs. 22500 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - button "Add \"NÄMMARÖ 3-seat modular sofa, outdoor\" to cart"
  - button "Save \"NÄMMARÖ 3-seat modular sofa, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - group "More options NÄMMARÖ":
    - text: More options NÄMMARÖ
    - 'radio "Option: NÄMMARÖ 3-seat modular sofa, outdoor, light brown stained" [checked]'
    - 'link "Option: NÄMMARÖ 3-seat modular sofa, outdoor, light brown stained"':
      - /url: https://www.ikea.com/in/en/p/naemmaroe-3-seat-modular-sofa-outdoor-light-brown-stained-s69579319/
    - 'radio "Option: NÄMMARÖ 3-seat modular sofa, outdoor light brown stained/Frösön/Duvholmen beige"'
    - 'link "Option: NÄMMARÖ 3-seat modular sofa, outdoor light brown stained/Frösön/Duvholmen beige"':
      - /url: https://www.ikea.com/in/en/p/naemmaroe-3-seat-modular-sofa-outdoor-light-brown-stained-froesoen-duvholmen-beige-s19610242/
  - link "Category Sofas":
    - /url: https://www.ikea.com/in/en/cat/sofas-fu003/
    - paragraph: Category
    - paragraph: Sofas
  - link "NÄMMARÖ 2-seat modular sofa, outdoor, armrests light brown stained":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-2-seat-modular-sofa-outdoor-armrests-light-brown-stained-s89579318/
    - img "NÄMMARÖ 2-seat modular sofa, outdoor, armrests light brown stained"
  - link "NÄMMARÖ 2-seat modular sofa, outdoor, armrests light brown stained Price Rs. 19000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-2-seat-modular-sofa-outdoor-armrests-light-brown-stained-s89579318/
    - heading "NÄMMARÖ 2-seat modular sofa, outdoor, armrests light brown stained" [level=3]
    - text: Price Rs. 19000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - button "Add \"NÄMMARÖ 2-seat modular sofa, outdoor\" to cart"
  - button "Save \"NÄMMARÖ 2-seat modular sofa, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - group "More options NÄMMARÖ":
    - text: More options NÄMMARÖ
    - 'radio "Option: NÄMMARÖ 2-seat modular sofa, outdoor, armrests light brown stained" [checked]'
    - 'link "Option: NÄMMARÖ 2-seat modular sofa, outdoor, armrests light brown stained"':
      - /url: https://www.ikea.com/in/en/p/naemmaroe-2-seat-modular-sofa-outdoor-armrests-light-brown-stained-s89579318/
    - 'radio "Option: NÄMMARÖ 2-seat modular sofa, outdoor armrests/light brown stained Frösön/Duvholmen beige"'
    - 'link "Option: NÄMMARÖ 2-seat modular sofa, outdoor armrests/light brown stained Frösön/Duvholmen beige"':
      - /url: https://www.ikea.com/in/en/p/naemmaroe-2-seat-modular-sofa-outdoor-armrests-light-brown-stained-froesoen-duvholmen-beige-s29610246/
  - link "SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige":
    - /url: https://www.ikea.com/in/en/p/segeroen-2-seat-sofa-outdoor-white-beige-froesoen-duvholmen-beige-s69613525/
    - img "SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige"
    - img "SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige"
  - link "SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige Price Rs. 33000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/segeroen-2-seat-sofa-outdoor-white-beige-froesoen-duvholmen-beige-s69613525/
    - heading "SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige" [level=3]
    - text: Price Rs. 33000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 3.5 out of 5 stars. Total reviews: (4)"':
    - 'img "Review: 3.5 out of 5 stars. Total reviews:"'
    - text: (4)
  - button "Add \"SEGERÖN 2-seat sofa, outdoor\" to cart"
  - button "Save \"SEGERÖN 2-seat sofa, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - link "SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige":
    - /url: https://www.ikea.com/in/en/p/segeroen-2-seat-sofa-outdoor-white-beige-froesoen-duvholmen-beige-s89584857/
    - img "SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige"
    - img "SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige"
  - link "New SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige Price Rs. 26000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/segeroen-2-seat-sofa-outdoor-white-beige-froesoen-duvholmen-beige-s89584857/
    - text: New
    - heading "SEGERÖN 2-seat sofa, outdoor, white/beige/Frösön/Duvholmen beige" [level=3]
    - text: Price Rs. 26000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 3.3 out of 5 stars. Total reviews: (8)"':
    - 'img "Review: 3.3 out of 5 stars. Total reviews:"'
    - text: (8)
  - button "Add \"SEGERÖN 2-seat sofa, outdoor\" to cart"
  - button "Save \"SEGERÖN 2-seat sofa, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad
  - link "NÄMMARÖ 3-seat modular sofa, outdoor, with footstool light brown stained":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-3-seat-modular-sofa-outdoor-with-footstool-light-brown-stained-s29579321/
    - img "NÄMMARÖ 3-seat modular sofa, outdoor, with footstool light brown stained"
  - link "NÄMMARÖ 3-seat modular sofa, outdoor, with footstool light brown stained Price Rs. 32000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer":
    - /url: https://www.ikea.com/in/en/p/naemmaroe-3-seat-modular-sofa-outdoor-with-footstool-light-brown-stained-s29579321/
    - heading "NÄMMARÖ 3-seat modular sofa, outdoor, with footstool light brown stained" [level=3]
    - text: Price Rs. 32000 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer
  - 'button "Review: 2 out of 5 stars. Total reviews: (4)"':
    - 'img "Review: 2 out of 5 stars. Total reviews:"'
    - text: (4)
  - button "Add \"NÄMMARÖ 3-seat modular sofa, outdoor\" to cart"
  - button "Save \"NÄMMARÖ 3-seat modular sofa, outdoor\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Showing 24 of 201 results
  - progressbar
  - link "Show more products":
    - /url: https://www.ikea.com/in/en/search/?q=Sofas+%26+Seating&page=2#products-page-2
    - text: Show more
  - heading "New lower price" [level=2]
  - paragraph: We have lowered the prices on more everyday favourites
  - link "Skip listing":
    - /url: "#plp--carousel__product-group-carousel-skip-btn"
  - link "KIVIK 3-seat sofa with chaise longue, Kelinge grey-turquoise KIVIK 3-seat sofa with chaise longue, Kelinge grey-turquoise":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-with-chaise-longue-kelinge-grey-turquoise-s09443055/
    - img "KIVIK 3-seat sofa with chaise longue, Kelinge grey-turquoise"
    - img "KIVIK 3-seat sofa with chaise longue, Kelinge grey-turquoise"
  - link "New lower price KIVIK 3-seat sofa with chaise longue, Kelinge grey-turquoise Price Rs. 61990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 65990":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-with-chaise-longue-kelinge-grey-turquoise-s09443055/
    - text: New lower price
    - heading "KIVIK 3-seat sofa with chaise longue, Kelinge grey-turquoise" [level=3]
    - text: Price Rs. 61990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 65990
  - 'button "Review: 4.1 out of 5 stars. Total reviews: (212)"':
    - 'img "Review: 4.1 out of 5 stars. Total reviews:"'
    - text: (212)
  - button "Add \"KIVIK 3-seat sofa with chaise longue\" to cart"
  - button "Save \"KIVIK 3-seat sofa with chaise longue\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 4-seat sofa with chaise longue, Kelinge grey-turquoise KIVIK 4-seat sofa with chaise longue, Kelinge grey-turquoise":
    - /url: https://www.ikea.com/in/en/p/kivik-4-seat-sofa-with-chaise-longue-kelinge-grey-turquoise-s09443060/
    - img "KIVIK 4-seat sofa with chaise longue, Kelinge grey-turquoise"
    - img "KIVIK 4-seat sofa with chaise longue, Kelinge grey-turquoise"
  - link "New lower price KIVIK 4-seat sofa with chaise longue, Kelinge grey-turquoise Price Rs. 64990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 70990":
    - /url: https://www.ikea.com/in/en/p/kivik-4-seat-sofa-with-chaise-longue-kelinge-grey-turquoise-s09443060/
    - text: New lower price
    - heading "KIVIK 4-seat sofa with chaise longue, Kelinge grey-turquoise" [level=3]
    - text: Price Rs. 64990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 70990
  - 'button "Review: 4.1 out of 5 stars. Total reviews: (103)"':
    - 'img "Review: 4.1 out of 5 stars. Total reviews:"'
    - text: (103)
  - button "Add \"KIVIK 4-seat sofa with chaise longue\" to cart"
  - button "Save \"KIVIK 4-seat sofa with chaise longue\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 3-seat sofa with chaise longue, Tibbleby beige/grey KIVIK 3-seat sofa with chaise longue, Tibbleby beige/grey":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-with-chaise-longue-tibbleby-beige-grey-s19440589/
    - img "KIVIK 3-seat sofa with chaise longue, Tibbleby beige/grey"
    - img "KIVIK 3-seat sofa with chaise longue, Tibbleby beige/grey"
  - link "New lower price KIVIK 3-seat sofa with chaise longue, Tibbleby beige/grey Price Rs. 57990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 61990":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-with-chaise-longue-tibbleby-beige-grey-s19440589/
    - text: New lower price
    - heading "KIVIK 3-seat sofa with chaise longue, Tibbleby beige/grey" [level=3]
    - text: Price Rs. 57990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 61990
  - 'button "Review: 4.1 out of 5 stars. Total reviews: (212)"':
    - 'img "Review: 4.1 out of 5 stars. Total reviews:"'
    - text: (212)
  - button "Add \"KIVIK 3-seat sofa with chaise longue\" to cart"
  - button "Save \"KIVIK 3-seat sofa with chaise longue\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 2-seat sofa, Tibbleby beige/grey KIVIK 2-seat sofa, Tibbleby beige/grey":
    - /url: https://www.ikea.com/in/en/p/kivik-2-seat-sofa-tibbleby-beige-grey-s19440594/
    - img "KIVIK 2-seat sofa, Tibbleby beige/grey"
    - img "KIVIK 2-seat sofa, Tibbleby beige/grey"
  - link "New lower price KIVIK 2-seat sofa, Tibbleby beige/grey Price Rs. 32990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 36990":
    - /url: https://www.ikea.com/in/en/p/kivik-2-seat-sofa-tibbleby-beige-grey-s19440594/
    - text: New lower price
    - heading "KIVIK 2-seat sofa, Tibbleby beige/grey" [level=3]
    - text: Price Rs. 32990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 36990
  - 'button "Review: 4.5 out of 5 stars. Total reviews: (249)"':
    - 'img "Review: 4.5 out of 5 stars. Total reviews:"'
    - text: (249)
  - button "Add \"KIVIK 2-seat sofa\" to cart"
  - button "Save \"KIVIK 2-seat sofa\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 2-seat sofa, Kelinge grey-turquoise KIVIK 2-seat sofa, Kelinge grey-turquoise":
    - /url: https://www.ikea.com/in/en/p/kivik-2-seat-sofa-kelinge-grey-turquoise-s19443045/
    - img "KIVIK 2-seat sofa, Kelinge grey-turquoise"
    - img "KIVIK 2-seat sofa, Kelinge grey-turquoise"
  - link "New lower price KIVIK 2-seat sofa, Kelinge grey-turquoise Price Rs. 36990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 40990":
    - /url: https://www.ikea.com/in/en/p/kivik-2-seat-sofa-kelinge-grey-turquoise-s19443045/
    - text: New lower price
    - heading "KIVIK 2-seat sofa, Kelinge grey-turquoise" [level=3]
    - text: Price Rs. 36990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 40990
  - 'button "Review: 4.5 out of 5 stars. Total reviews: (249)"':
    - 'img "Review: 4.5 out of 5 stars. Total reviews:"'
    - text: (249)
  - button "Add \"KIVIK 2-seat sofa\" to cart"
  - button "Save \"KIVIK 2-seat sofa\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 3-seat sofa, Kelinge grey-turquoise KIVIK 3-seat sofa, Kelinge grey-turquoise":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-kelinge-grey-turquoise-s19443050/
    - img "KIVIK 3-seat sofa, Kelinge grey-turquoise"
    - img "KIVIK 3-seat sofa, Kelinge grey-turquoise"
  - link "New lower price KIVIK 3-seat sofa, Kelinge grey-turquoise Price Rs. 39990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 45990":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-kelinge-grey-turquoise-s19443050/
    - text: New lower price
    - heading "KIVIK 3-seat sofa, Kelinge grey-turquoise" [level=3]
    - text: Price Rs. 39990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 45990
  - 'button "Review: 4.3 out of 5 stars. Total reviews: (327)"':
    - 'img "Review: 4.3 out of 5 stars. Total reviews:"'
    - text: (327)
  - button "Add \"KIVIK 3-seat sofa\" to cart"
  - button "Save \"KIVIK 3-seat sofa\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 4-seat sofa with chaise longue, Tibbleby beige/grey KIVIK 4-seat sofa with chaise longue, Tibbleby beige/grey":
    - /url: https://www.ikea.com/in/en/p/kivik-4-seat-sofa-with-chaise-longue-tibbleby-beige-grey-s29440584/
    - img "KIVIK 4-seat sofa with chaise longue, Tibbleby beige/grey"
    - img "KIVIK 4-seat sofa with chaise longue, Tibbleby beige/grey"
  - link "New lower price KIVIK 4-seat sofa with chaise longue, Tibbleby beige/grey Price Rs. 60990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 66990":
    - /url: https://www.ikea.com/in/en/p/kivik-4-seat-sofa-with-chaise-longue-tibbleby-beige-grey-s29440584/
    - text: New lower price
    - heading "KIVIK 4-seat sofa with chaise longue, Tibbleby beige/grey" [level=3]
    - text: Price Rs. 60990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 66990
  - 'button "Review: 4.1 out of 5 stars. Total reviews: (103)"':
    - 'img "Review: 4.1 out of 5 stars. Total reviews:"'
    - text: (103)
  - button "Add \"KIVIK 4-seat sofa with chaise longue\" to cart"
  - button "Save \"KIVIK 4-seat sofa with chaise longue\" to shopping list"
  - text: Available for delivery Out of stock in Hyderabad Medium firm
  - link "KIVIK 3-seat sofa with chaise longue, Tresund anthracite KIVIK 3-seat sofa with chaise longue, Tresund anthracite":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-with-chaise-longue-tresund-anthracite-s39482842/
    - img "KIVIK 3-seat sofa with chaise longue, Tresund anthracite"
    - img "KIVIK 3-seat sofa with chaise longue, Tresund anthracite"
  - link "New lower price KIVIK 3-seat sofa with chaise longue, Tresund anthracite Price Rs. 65990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 69990":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-with-chaise-longue-tresund-anthracite-s39482842/
    - text: New lower price
    - heading "KIVIK 3-seat sofa with chaise longue, Tresund anthracite" [level=3]
    - text: Price Rs. 65990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 69990
  - 'button "Review: 4.1 out of 5 stars. Total reviews: (212)"':
    - 'img "Review: 4.1 out of 5 stars. Total reviews:"'
    - text: (212)
  - button "Add \"KIVIK 3-seat sofa with chaise longue\" to cart"
  - button "Save \"KIVIK 3-seat sofa with chaise longue\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 4-seat sofa with chaise longue, Tresund light beige KIVIK 4-seat sofa with chaise longue, Tresund light beige":
    - /url: https://www.ikea.com/in/en/p/kivik-4-seat-sofa-with-chaise-longue-tresund-light-beige-s39494388/
    - img "KIVIK 4-seat sofa with chaise longue, Tresund light beige"
    - img "KIVIK 4-seat sofa with chaise longue, Tresund light beige"
  - link "New lower price KIVIK 4-seat sofa with chaise longue, Tresund light beige Price Rs. 68990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 74990":
    - /url: https://www.ikea.com/in/en/p/kivik-4-seat-sofa-with-chaise-longue-tresund-light-beige-s39494388/
    - text: New lower price
    - heading "KIVIK 4-seat sofa with chaise longue, Tresund light beige" [level=3]
    - text: Price Rs. 68990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 74990
  - 'button "Review: 4.1 out of 5 stars. Total reviews: (103)"':
    - 'img "Review: 4.1 out of 5 stars. Total reviews:"'
    - text: (103)
  - button "Add \"KIVIK 4-seat sofa with chaise longue\" to cart"
  - button "Save \"KIVIK 4-seat sofa with chaise longue\" to shopping list"
  - text: Currently unavailable for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 3-seat sofa, Tresund light beige KIVIK 3-seat sofa, Tresund light beige":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-tresund-light-beige-s49482832/
    - img "KIVIK 3-seat sofa, Tresund light beige"
    - img "KIVIK 3-seat sofa, Tresund light beige"
  - link "New lower price KIVIK 3-seat sofa, Tresund light beige Price Rs. 43990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 49990":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-tresund-light-beige-s49482832/
    - text: New lower price
    - heading "KIVIK 3-seat sofa, Tresund light beige" [level=3]
    - text: Price Rs. 43990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 49990
  - 'button "Review: 4.3 out of 5 stars. Total reviews: (327)"':
    - 'img "Review: 4.3 out of 5 stars. Total reviews:"'
    - text: (327)
  - button "Add \"KIVIK 3-seat sofa\" to cart"
  - button "Save \"KIVIK 3-seat sofa\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 3-seat sofa, Tibbleby beige/grey KIVIK 3-seat sofa, Tibbleby beige/grey":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-tibbleby-beige-grey-s59440592/
    - img "KIVIK 3-seat sofa, Tibbleby beige/grey"
    - img "KIVIK 3-seat sofa, Tibbleby beige/grey"
  - link "New lower price KIVIK 3-seat sofa, Tibbleby beige/grey Price Rs. 35990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 41990":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-tibbleby-beige-grey-s59440592/
    - text: New lower price
    - heading "KIVIK 3-seat sofa, Tibbleby beige/grey" [level=3]
    - text: Price Rs. 35990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 41990
  - 'button "Review: 4.3 out of 5 stars. Total reviews: (327)"':
    - 'img "Review: 4.3 out of 5 stars. Total reviews:"'
    - text: (327)
  - button "Add \"KIVIK 3-seat sofa\" to cart"
  - button "Save \"KIVIK 3-seat sofa\" to shopping list"
  - text: Available for delivery Out of stock in Hyderabad Medium firm
  - link "KIVIK 2-seat sofa, Tresund light beige KIVIK 2-seat sofa, Tresund light beige":
    - /url: https://www.ikea.com/in/en/p/kivik-2-seat-sofa-tresund-light-beige-s59482822/
    - img "KIVIK 2-seat sofa, Tresund light beige"
    - img "KIVIK 2-seat sofa, Tresund light beige"
  - link "New lower price KIVIK 2-seat sofa, Tresund light beige Price Rs. 40990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 44990":
    - /url: https://www.ikea.com/in/en/p/kivik-2-seat-sofa-tresund-light-beige-s59482822/
    - text: New lower price
    - heading "KIVIK 2-seat sofa, Tresund light beige" [level=3]
    - text: Price Rs. 40990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 44990
  - 'button "Review: 4.5 out of 5 stars. Total reviews: (249)"':
    - 'img "Review: 4.5 out of 5 stars. Total reviews:"'
    - text: (249)
  - button "Add \"KIVIK 2-seat sofa\" to cart"
  - button "Save \"KIVIK 2-seat sofa\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 3-seat sofa with chaise longue, Tresund light beige KIVIK 3-seat sofa with chaise longue, Tresund light beige":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-with-chaise-longue-tresund-light-beige-s59482841/
    - img "KIVIK 3-seat sofa with chaise longue, Tresund light beige"
    - img "KIVIK 3-seat sofa with chaise longue, Tresund light beige"
  - link "New lower price KIVIK 3-seat sofa with chaise longue, Tresund light beige Price Rs. 65990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 69990":
    - /url: https://www.ikea.com/in/en/p/kivik-3-seat-sofa-with-chaise-longue-tresund-light-beige-s59482841/
    - text: New lower price
    - heading "KIVIK 3-seat sofa with chaise longue, Tresund light beige" [level=3]
    - text: Price Rs. 65990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 69990
  - 'button "Review: 4.1 out of 5 stars. Total reviews: (212)"':
    - 'img "Review: 4.1 out of 5 stars. Total reviews:"'
    - text: (212)
  - button "Add \"KIVIK 3-seat sofa with chaise longue\" to cart"
  - button "Save \"KIVIK 3-seat sofa with chaise longue\" to shopping list"
  - text: Currently unavailable for delivery In stock in Hyderabad Medium firm
  - link "KIVIK 2-seat sofa, Tresund anthracite KIVIK 2-seat sofa, Tresund anthracite":
    - /url: https://www.ikea.com/in/en/p/kivik-2-seat-sofa-tresund-anthracite-s79482821/
    - img "KIVIK 2-seat sofa, Tresund anthracite"
    - img "KIVIK 2-seat sofa, Tresund anthracite"
  - link "New lower price KIVIK 2-seat sofa, Tresund anthracite Price Rs. 40990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 44990":
    - /url: https://www.ikea.com/in/en/p/kivik-2-seat-sofa-tresund-anthracite-s79482821/
    - text: New lower price
    - heading "KIVIK 2-seat sofa, Tresund anthracite" [level=3]
    - text: Price Rs. 40990 Flat 15% off* above Rs.20,000. Applied at checkout Price valid from 17-04-2025 until 01-06-2025 Exclusive IKEA family offer Previous price Rs. 44990
  - 'button "Review: 4.5 out of 5 stars. Total reviews: (249)"':
    - 'img "Review: 4.5 out of 5 stars. Total reviews:"'
    - text: (249)
  - button "Add \"KIVIK 2-seat sofa\" to cart"
  - button "Save \"KIVIK 2-seat sofa\" to shopping list"
  - text: Available for delivery In stock in Hyderabad Medium firm
  - heading "Related Content" [level=2]
  - paragraph: 299 content results
  - link "Skip listing":
    - /url: "#plp--carousel__content-shelf-carousel-skip-btn"
  - link "Room Give new life to your seating":
    - /url: https://www.ikea.com/in/en/rooms/dining/gallery/give-new-life-to-your-seating-pubd80ca412/
    - paragraph: Room
    - paragraph: Give new life to your seating
  - link "Category Sofas":
    - /url: https://www.ikea.com/in/en/cat/sofas-fu003/
    - paragraph: Category
    - paragraph: Sofas
  - link "Category Sofas & armchairs":
    - /url: https://www.ikea.com/in/en/cat/sofas-armchairs-700640/
    - paragraph: Category
    - paragraph: Sofas & armchairs
  - link "Category Corner sofas":
    - /url: https://www.ikea.com/in/en/cat/corner-sofas-10671/
    - paragraph: Category
    - paragraph: Corner sofas
  - link "Category Outdoor Sofas":
    - /url: https://www.ikea.com/in/en/cat/outdoor-sofas-21959/
    - paragraph: Category
    - paragraph: Outdoor Sofas
  - link "Category Modular sofas":
    - /url: https://www.ikea.com/in/en/cat/sofa-modules-31786/
    - paragraph: Category
    - paragraph: Modular sofas
  - link "Category Three-seat sofa-beds":
    - /url: https://www.ikea.com/in/en/cat/three-seat-sofa-beds-700630/
    - paragraph: Category
    - paragraph: Three-seat sofa-beds
  - link "Page Modular sofas":
    - /url: https://www.ikea.com/in/en/campaigns/modular-sofas-pub563cdea0/
    - paragraph: Page
    - paragraph: Modular sofas
  - link "Category Three Seater Sofas":
    - /url: https://www.ikea.com/in/en/cat/three-seat-sofas-10670/
    - paragraph: Category
    - paragraph: Three Seater Sofas
  - link "Category Two Seater Sofas":
    - /url: https://www.ikea.com/in/en/cat/two-seat-sofas-10668/
    - paragraph: Category
    - paragraph: Two Seater Sofas
  - link "Page Sofas in Gurgoan":
    - /url: https://www.ikea.com/in/en/stores/delhi/sofas-in-gurgaon-pub5e322970/
    - paragraph: Page
    - paragraph: Sofas in Gurgoan
  - link "Page Sofas in Noida":
    - /url: https://www.ikea.com/in/en/stores/delhi/sofas-in-noida-pubb8662960/
    - paragraph: Page
    - paragraph: Sofas in Noida
  - heading "Go to category" [level=2]
  - link "Skip listing":
    - /url: "#plp--carousel__category-carousel-skip-btn"
  - link "Category Three-seat sofa-beds":
    - /url: https://www.ikea.com/in/en/cat/three-seat-sofa-beds-700630/
    - paragraph: Category
    - paragraph: Three-seat sofa-beds
  - link "Category Two-seat sofa-beds":
    - /url: https://www.ikea.com/in/en/cat/two-seat-sofa-beds-700629/
    - paragraph: Category
    - paragraph: Two-seat sofa-beds
- contentinfo
```

# Test source

```ts
   1 | import productLocators from '../locators/productpageLocators.js';
   2 | import cartLocators from '../locators/cartLocators.js';
   3 | import { expect } from '@playwright/test';
   4 |
   5 | class ProductPage {
   6 |     constructor(page) {
   7 |         this.page = page;
   8 |     }
   9 |
  10 |     /**  **Utility Functions** **/
  11 |     async waitForTimeout(ms = 2000) {
  12 |         await this.page.waitForTimeout(ms);
  13 |     }
  14 |
  15 |     /**  **Product Extraction** **/
  16 |     async getProductDetails() {
  17 |
  18 |         const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  19 |         const productPrices = await this.page.$$eval(productLocators.productPrice, elements => elements.map(el => el.innerText));
  20 |
  21 |         expect(productNames.length).toBeGreaterThan(0); // Ensure products exist
  22 |
  23 |         return productNames.map((name, i) => ({
  24 |             name,
  25 |             price: productPrices[i]
  26 |         }));
  27 |     }
  28 |
  29 |     /**  **Cart Operations** **/
  30 |     async addToCart(productIndex) {
  31 |         const products = await this.page.locator(productLocators.productCards);
  32 |         await products.click()
  33 |         // expect(products.length).toBeGreaterThanOrEqual(productIndex); // Ensure product index is valid
  34 |
  35 |         // await products[productIndex - 1].click();
  36 |         // expect(await this.page.locator(productLocators.addToCartButton).isVisible()).toBeTruthy(); // Ensure button is visible
  37 |
  38 |         await this.page.locator(productLocators.addToCartButton).click();
  39 |         console.log(`Added product ${productIndex} to cart`);
  40 |
  41 |         await this.waitForTimeout(2000);
  42 |
  43 |         // const cartCount = await this.page.locator(cartLocators.totalValue).innerText();
  44 |         // expect(Number(cartCount)).toBeGreaterThan(0); // Ensure cart count increases
  45 |     }
  46 |
  47 |     /**  **Sorting Operations** **/
  48 |     async sortByMostPopular() {
  49 |
  50 |         await this.page.locator(productLocators.sortButton).click();
  51 |         await this.page.locator(productLocators.mostPopularText).click();
  52 |         const visibility = this.page.locator('button[aria-label="Close"]').isVisible()
  53 |         if(visibility){
> 54 |             await this.page.locator('button[aria-label="Close"]').click()
     |                                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  55 |         }
  56 |         await this.page.locator(productLocators.sortButton).click();
  57 |         if(visibility){
  58 |             await this.page.locator('button[aria-label="Close"]').click()
  59 |         }
  60 |
  61 |         await this.waitForTimeout(2000);
  62 |
  63 |         const sortedProducts = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  64 |         expect(sortedProducts.length).toBeGreaterThan(0); // Ensure sorted products are displayed
  65 |     }
  66 |
  67 |     /**  **Filtering Operations** **/
  68 |     async extractWardrobes() {
  69 |         // expect(await this.page.locator(productLocators.categoryDropdown).isVisible()).toBeTruthy();
  70 |         // expect(await this.page.locator(productLocators.storageFilter).isVisible()).toBeTruthy();
  71 |         // expect(await this.page.locator(productLocators.materialFilter).isVisible()).toBeTruthy();
  72 |         // expect(await this.page.locator(productLocators.metalFilter).isVisible()).toBeTruthy();
  73 |
  74 |         await this.page.locator(productLocators.categoryDropdown).click();
  75 |         await this.page.waitForTimeout(2000)
  76 |         await this.page.locator(productLocators.storageFilter).click();
  77 |         await this.waitForTimeout(2000);
  78 |
  79 |         await this.page.locator(productLocators.materialFilter).click();
  80 |         await this.page.locator(productLocators.metalFilter).click();
  81 |         await this.waitForTimeout(2000);
  82 |
  83 |         const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  84 |
  85 |         expect(productNames.length).toBeGreaterThan(0); // Ensure wardrobes exist
  86 |
  87 |         let wardrobeData = [];
  88 |         for (let i = 0; i < productNames.length && i < 20; i++) {
  89 |             wardrobeData.push({
  90 |                 name: productNames[i]
  91 |             });
  92 |         }
  93 |
  94 |         return wardrobeData;
  95 |     }
  96 | }
  97 |
  98 | export default ProductPage;
  99 |
```