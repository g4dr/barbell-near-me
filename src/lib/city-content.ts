export interface CityContent {
  title: string;
  neighborhoods: string[];
  gyms: string[];
  description: string;
}

export const cityContent: Record<string, CityContent> = {
  "albuquerque": {
    title: "Albuquerque",
    neighborhoods: ["Old Town", "Downtown", "Nob Hill", "Northeast Heights"],
    gyms: ["Strong Style Gym", "CrossFit ABQ", "Iron Temple"],
    description: "Albuquerque's fitness scene thrives with dedicated barbell enthusiasts throughout the Duke City. From the historic Old Town to modern Downtown, quality gyms serve the community with expert coaching for powerlifting and strength training."
  },
  "anchorage": {
    title: "Anchorage",
    neighborhoods: ["Midtown", "South Anchorage", "Eagle River"],
    gyms: ["CrossFit Anchorage", "Alaska Strength", "Iron House"],
    description: "Anchorage's fitness community thrives despite Alaska's challenging climate. The barbell culture here benefits from year-round indoor training with specialized equipment for cold-weather performance."
  },
  "annapolis": {
    title: "Annapolis",
    neighborhoods: ["Downtown", "Eastport", "West Annapolis"],
    gyms: ["CrossFit Annapolis", "Annapolis Fitness Center"],
    description: "Annapolis combines small-town charm with a robust fitness scene. The Naval Academy presence brings high-level athletic facilities benefiting the broader community of fitness enthusiasts."
  },
  "atlanta": {
    title: "Atlanta",
    neighborhoods: ["Midtown", "Buckhead", "Virginia-Highland", "Inman Park"],
    gyms: ["Diesel Fitness", "CrossFit Atlanta", "Atlanta Strength"],
    description: "Atlanta's fitness scene is one of the most diverse in the Southeast. The city has become a destination for serious lifters, with nationally-recognized powerlifting competitions hosted annually."
  },
  "austin": {
    title: "Austin",
    neighborhoods: ["East Austin", "Downtown", "South Congress", "The Domain"],
    gyms: ["Barbell Brigade", "CrossFit Austin", "Iron Works Gym"],
    description: "Austin's legendary fitness culture reflects the city's ethos of creativity and active living. The Texas capital has become a national destination for fitness enthusiasts and competitive athletes."
  },
  "baltimore": {
    title: "Baltimore",
    neighborhoods: ["Federal Hill", "Canton", "Fells Point", "Hampden"],
    gyms: ["CrossFit Baltimore", "The Power Plant Gym", "Baltimore Barbell"],
    description: "Baltimore's fitness community reflects the city's blue-collar roots while embracing modern training. The barbell culture emphasizes functional strength and practical fitness for Charm City residents."
  },
  "baton-rouge": {
    title: "Baton Rouge",
    neighborhoods: ["Mid City", "Perkins Road", "College Hill"],
    gyms: ["CrossFit Baton Rouge", "Red Stick Barbell"],
    description: "Baton Rouge's fitness community punches above its weight class. LSU brings top-tier athletic facilities and a constant influx of fitness-conscious students to Louisiana's capital."
  },
  "birmingham": {
    title: "Birmingham",
    neighborhoods: ["Downtown", "Five Points South", "Lakeview", "Crestwood"],
    gyms: ["CrossFit Birmingham", "Birmingham Barbell Club", "Iron Tribe Fitness"],
    description: "Birmingham has transformed into one of the South's emerging fitness destinations. The Magic City offers diverse training options from warehouse gyms to boutique studios."
  },
  "boise": {
    title: "Boise",
    neighborhoods: ["Downtown Boise", "North End", "The Bench", "Eagle"],
    gyms: ["CrossFit Boise", "Iron House Boise", "Boise Barbell Club"],
    description: "Boise has emerged as a surprising fitness destination in the Pacific Northwest. The City of Trees attracts health-conscious residents with excellent quality of life and outdoor training opportunities."
  },
  "boston": {
    title: "Boston",
    neighborhoods: ["Back Bay", "South Boston", "Cambridge", "Somerville"],
    gyms: ["CrossFit Boston", "Cambridge Barbell", "SweatBox Fitness"],
    description: "Boston's sophisticated fitness scene benefits from world-class universities and research institutions. The barbell culture here emphasizes technique and scientific training principles."
  },
  "buffalo": {
    title: "Buffalo",
    neighborhoods: ["Elmwood Village", "North Buffalo", "Allentown"],
    gyms: ["CrossFit Buffalo", "Iron Palace", "Buffalo Strength"],
    description: "Buffalo's fitness community embodies the city's blue-collar work ethic and passionate sports culture. The Queen City offers diverse training options from historic gyms to modern facilities."
  },
  "charlotte": {
    title: "Charlotte",
    neighborhoods: ["Uptown", "South End", "NoDa", "Plaza Midwood"],
    gyms: ["CrossFit Charlotte", "Charlotte Barbell", "Iron Tribe Fitness"],
    description: "Charlotte has rapidly become the Southeast's premier fitness destination. The Queen City offers incredible diversity of gyms from warehouse facilities to luxury fitness clubs in Uptown."
  },
  "chicago": {
    title: "Chicago",
    neighborhoods: ["Wicker Park", "Lincoln Park", "West Loop", "Bucktown"],
    gyms: ["CrossFit Chicago", "Iron Gate Gym", "Chicago Barbell Club"],
    description: "Chicago's fitness scene is among the most diverse in the country. The Windy City offers everything from historic bodybuilding gyms to cutting-edge facilities in the Loop and River North."
  },
  "cincinnati": {
    title: "Cincinnati",
    neighborhoods: ["Over-the-Rhine", "Downtown", "Clifton"],
    gyms: ["CrossFit Cincinnati", "Queen City Barbell"],
    description: "Cincinnati's fitness community reflects the city's proud industrial heritage. Over-the-Rhine has emerged as a fitness hotspot with diverse training options in one of the country's largest historic districts."
  },
  "cleveland": {
    title: "Cleveland",
    neighborhoods: ["Ohio City", "Tremont", "Downtown Cleveland"],
    gyms: ["CrossFit Cleveland", "Cleveland Barbell Club", "Iron Tribe Ohio City"],
    description: "Cleveland's fitness community embodies the city's resilient spirit. The Forest City offers diverse training options from historic iron palaces to modern fitness centers in revitalized downtown."
  },
  "colorado-springs": {
    title: "Colorado Springs",
    neighborhoods: ["Downtown Colorado Springs", "Manitou Springs", "North End"],
    gyms: ["CrossFit Colorado Springs", "Colorado Springs Barbell"],
    description: "Colorado Springs offers a fitness paradise with Rocky Mountain backdrop. The Olympic City hosts the US Olympic Training Center, bringing world-class coaching and facilities to the community."
  },
  "columbus": {
    title: "Columbus",
    neighborhoods: ["Short North", "Italian Village", "Clintonville"],
    gyms: ["CrossFit Columbus", "Columbus Barbell Club", "Iron Tribe Short North"],
    description: "Columbus has emerged as a Midwest fitness destination. The Short North and Italian Village have become fitness hotspots with innovative studios and community-driven gyms."
  },
  "dallas": {
    title: "Dallas",
    neighborhoods: ["Deep Ellum", "Uptown", "Design District", "Oak Cliff"],
    gyms: ["CrossFit Dallas", "Dallas Barbell Club", "Iron Tribe Fitness"],
    description: "Dallas boasts one of Texas' most impressive fitness scenes. The Big D offers exceptional diversity from Deep Ellum warehouse gyms to Uptown luxury fitness centers."
  },
  "denver": {
    title: "Denver",
    neighborhoods: ["RiNo", "LoDo", "LoHi", "Capitol Hill"],
    gyms: ["CrossFit Denver", "Denver Barbell Club", "Iron Tribe RiNo"],
    description: "Denver's legendary fitness scene combines world-class indoor facilities with immediate mountain access. The Mile High City emphasizes outdoor integration and athletic performance."
  },
  "detroit": {
    title: "Detroit",
    neighborhoods: ["Corktown", "Midtown", "Greektown"],
    gyms: ["CrossFit Detroit", "Motor City Barbell", "Iron Palace Corktown"],
    description: "Detroit's fitness community reflects the city's resilient spirit. Corktown and Midtown have emerged as fitness hotspots with innovative studios in the revitalized Motor City."
  },
  "el-paso": {
    title: "El Paso",
    neighborhoods: ["Northeast El Paso", "West Side", "Downtown"],
    gyms: ["CrossFit El Paso", "Sun City Barbell"],
    description: "El Paso's unique border culture creates a vibrant fitness scene. The Franklin Mountains provide dramatic backdrop for outdoor training in the Sun City."
  },
  "fort-worth": {
    title: "Fort Worth",
    neighborhoods: ["Near Southside", "Magnolia", "Downtown Fort Worth"],
    gyms: ["CrossFit Fort Worth", "Cowtown Barbell"],
    description: "Fort Worth offers a distinctly Texan fitness experience blending Western heritage with modern facilities. The Cowtown provides diverse training options in the Stockyards district."
  },
  "fresno": {
    title: "Fresno",
    neighborhoods: ["Tower District", "Woodward Park", "North Fresno"],
    gyms: ["CrossFit Fresno", "Central Valley Barbell"],
    description: "Fresno serves as Central Valley's fitness hub with affordable options compared to coastal California. The Tower District and Woodward Park are emerging fitness hotspots."
  },
  "hartford": {
    title: "Hartford",
    neighborhoods: ["West Hartford", "Parkville", "Downtown Hartford"],
    gyms: ["CrossFit Hartford", "Capital Region Barbell"],
    description: "Hartford serves Connecticut's capital with diverse training options. West Hartford has emerged as a fitness hotspot with innovative studios and community-focused gyms."
  },
  "houston": {
    title: "Houston",
    neighborhoods: ["Montrose", "The Heights", "EaDo", "Galleria"],
    gyms: ["CrossFit Houston", "Houston Barbell Club", "Iron Tribe Montrose"],
    description: "Houston boasts Texas' most diverse fitness scene. From Deep Ellum warehouses to luxury centers, the Energy Capital offers world-class facilities for serious athletes."
  },
  "indianapolis": {
    title: "Indianapolis",
    neighborhoods: ["Fountain Square", "Broad Ripple", "Mass Ave"],
    gyms: ["CrossFit Indianapolis", "Circle City Barbell"],
    description: "Indianapolis has earned its reputation as a fitness-friendly city. Fountain Square and Broad Ripple have become fitness hotspots with unique character and dedicated communities."
  },
  "jacksonville": {
    title: "Jacksonville",
    neighborhoods: ["Riverside", "Avondale", "Jacksonville Beach"],
    gyms: ["CrossFit Jacksonville", "River City Barbell"],
    description: "Jacksonville thrives as Florida's largest city by land area. Riverside, Avondale and beach towns offer distinct personalities with year-round outdoor training on the Atlantic."
  },
  "kansas-city": {
    title: "Kansas City",
    neighborhoods: ["Crossroads District", "Country Club Plaza", "Westport"],
    gyms: ["CrossFit Kansas City", "KC Barbell Club"],
    description: "Kansas City's fitness community blends Midwestern friendliness with serious training. The Crossroads District and Plaza have emerged as fitness hotspots."
  },
  "knoxville": {
    title: "Knoxville",
    neighborhoods: ["Downtown Knoxville", "Old City", "North Knoxville"],
    gyms: ["CrossFit Knoxville", "Knoxville Barbell"],
    description: "Knoxville benefits from Southern charm and outdoor adventure culture. Proximity to the Great Smoky Mountains provides unparalleled training opportunities."
  },
  "las-vegas": {
    title: "Las Vegas",
    neighborhoods: ["The Strip", "Summerlin", "Henderson", "Downtown Las Vegas"],
    gyms: ["CrossFit Las Vegas", "Sin City Barbell", "Iron House Vegas"],
    description: "Las Vegas offers 24/7 fitness culture matching the city's non-stop energy. Beyond the casinos, Summerlin and Henderson host world-class training facilities for serious athletes."
  },
  "los-angeles": {
    title: "Los Angeles",
    neighborhoods: ["Venice", "Santa Monica", "Hollywood", "Downtown LA"],
    gyms: ["Gold's Gym Venice", "CrossFit LA", "Barbell Brigade"],
    description: "Los Angeles is the birthplace of modern fitness culture. Venice Beach's Muscle Beach and Gold's Gym created the blueprint for barbell training that influenced the world."
  },
  "louisville": {
    title: "Louisville",
    neighborhoods: ["Highlands", "Nulu", "Downtown Louisville"],
    gyms: ["CrossFit Louisville", "Derby City Barbell"],
    description: "Louisville combines Southern hospitality with serious athletic dedication. The Highlands and Nulu have emerged as fitness hotspots in Kentucky's largest city."
  },
  "memphis": {
    title: "Memphis",
    neighborhoods: ["Midtown Memphis", "Cooper-Young", "Downtown Memphis"],
    gyms: ["CrossFit Memphis", "Bluff City Barbell"],
    description: "Memphis honors its musical heritage with a growing fitness culture. Midtown and Cooper-Young offer community-focused gyms serving the Home of the Blues."
  },
  "mesa": {
    title: "Mesa",
    neighborhoods: ["Downtown Mesa", "East Mesa", "West Mesa"],
    gyms: ["CrossFit Mesa", "Desert Barbell Club"],
    description: "Mesa's fitness community thrives in Arizona's third-largest city. The warm climate allows year-round outdoor training in this Phoenix suburb."
  },
  "miami": {
    title: "Miami",
    neighborhoods: ["South Beach", "Brickell", "Wynwood", "Coconut Grove"],
    gyms: ["CrossFit Miami Beach", "305 Barbell", "Iron Tribe Wynwood"],
    description: "Miami's fitness scene is as vibrant as its nightlife. South Beach bodybuilding culture meets modern functional training in this tropical paradise for athletes."
  },
  "milwaukee": {
    title: "Milwaukee",
    neighborhoods: ["Third Ward", "East Side", "Bay View"],
    gyms: ["CrossFit Milwaukee", "Cream City Barbell"],
    description: "Milwaukee's fitness community embraces the city's blue-collar heritage. The Third Ward and East Side offer diverse training options on the shores of Lake Michigan."
  },
  "minneapolis": {
    title: "Minneapolis",
    neighborhoods: ["Uptown Minneapolis", "Northeast", "Dinkytown"],
    gyms: ["CrossFit Minneapolis", "Twin Cities Barbell"],
    description: "Minneapolis maintains an active fitness culture despite harsh winters. The Chain of Lakes provides beautiful outdoor training venues during pleasant months."
  },
  "nashville": {
    title: "Nashville",
    neighborhoods: ["The Gulch", "East Nashville", "Midtown Nashville"],
    gyms: ["CrossFit Nashville", "Music City Barbell"],
    description: "Nashville's fitness scene harmonizes with the city's musical energy. The Gulch and East Nashville have become fitness hotspots in Music City."
  },
  "new-orleans": {
    title: "New Orleans",
    neighborhoods: ["French Quarter", "Garden District", "Uptown New Orleans"],
    gyms: ["CrossFit New Orleans", "Big Easy Barbell"],
    description: "New Orleans maintains an active fitness culture alongside its culinary traditions. The Garden District and Uptown offer quality training options in the Big Easy."
  },
  "new-york": {
    title: "New York",
    neighborhoods: ["Manhattan", "Brooklyn", "Queens", "The Bronx"],
    gyms: ["CrossFit NYC", "Barbell Brigade NY", "Iron House NYC"],
    description: "New York City's fitness scene is unmatched in diversity and intensity. From Manhattan luxury gyms to Brooklyn warehouses, NYC offers every training style imaginable."
  },
  "newark": {
    title: "Newark",
    neighborhoods: ["Downtown Newark", "Ironbound", "University Heights"],
    gyms: ["CrossFit Newark", "Brick City Barbell"],
    description: "Newark's fitness community reflects the city's revitalization. Downtown and the Ironbound district offer growing training options in New Jersey's largest city."
  },
  "oakland": {
    title: "Oakland",
    neighborhoods: ["Uptown Oakland", "Temescal", "Rockridge"],
    gyms: ["CrossFit Oakland", "Town Barbell"],
    description: "Oakland's fitness community matches the city's progressive spirit. Uptown and Temescal have become fitness hotspots in the East Bay."
  },
  "oklahoma-city": {
    title: "Oklahoma City",
    neighborhoods: ["Midtown OKC", "Bricktown", "Paseo Arts District"],
    gyms: ["CrossFit OKC", "OKC Barbell"],
    description: "Oklahoma City's fitness community reflects the city's growth and revitalization. Midtown and Bricktown offer diverse training options in the heartland."
  },
  "omaha": {
    title: "Omaha",
    neighborhoods: ["Downtown Omaha", "Old Market", "Dundee"],
    gyms: ["CrossFit Omaha", "Cornhusker Barbell"],
    description: "Omaha's fitness community benefits from the city's strong work ethic. The Old Market and Dundee neighborhoods offer quality training options on the Missouri River."
  },
  "orlando": {
    title: "Orlando",
    neighborhoods: ["Downtown Orlando", "Winter Park", "Lake Nona"],
    gyms: ["CrossFit Orlando", "Theme Park Barbell"],
    description: "Orlando's fitness scene extends beyond the theme parks. Downtown and Winter Park host serious training facilities for Central Florida's active population."
  },
  "philadelphia": {
    title: "Philadelphia",
    neighborhoods: ["Center City", "Fishtown", "South Philly", "University City"],
    gyms: ["CrossFit Philadelphia", "Philly Barbell", "Iron Tribe Fishtown"],
    description: "Philadelphia's gritty fitness culture matches the city's blue-collar heritage. From Center City luxury gyms to Fishtown warehouses, Philly offers serious training for dedicated athletes."
  },
  "phoenix": {
    title: "Phoenix",
    neighborhoods: ["Downtown Phoenix", "Scottsdale", "Tempe", "Arcadia"],
    gyms: ["CrossFit Phoenix", "Valley Barbell", "Iron Tribe Scottsdale"],
    description: "Phoenix dominates desert fitness with year-round training opportunities. Scottsdale and Tempe join Downtown in offering world-class facilities for Arizona athletes."
  },
  "pittsburgh": {
    title: "Pittsburgh",
    neighborhoods: ["Downtown Pittsburgh", "Lawrenceville", "Strip District"],
    gyms: ["CrossFit Pittsburgh", "Steel City Barbell"],
    description: "Pittsburgh's fitness community reflects the city's steel heritage. Lawrenceville and the Strip District have emerged as fitness hotspots in the Steel City."
  },
  "portland": {
    title: "Portland",
    neighborhoods: ["Pearl District", "Alberta Arts District", "Southeast Portland"],
    gyms: ["CrossFit Portland", "Rose City Barbell"],
    description: "Portland's fitness culture embraces the city's quirky, outdoorsy spirit. The Pearl District and Alberta offer innovative training options in the Pacific Northwest."
  },
  "providence": {
    title: "Providence",
    neighborhoods: ["Downtown Providence", "College Hill", "Federal Hill"],
    gyms: ["CrossFit Providence", "Ocean State Barbell"],
    description: "Providence's fitness community benefits from the city's college presence. Downtown and College Hill offer quality training options in Rhode Island's capital."
  },
  "raleigh": {
    title: "Raleigh",
    neighborhoods: ["Downtown Raleigh", "Glenwood South", "North Hills"],
    gyms: ["CrossFit Raleigh", "Oak City Barbell"],
    description: "Raleigh has emerged as a Southeast fitness destination. Glenwood South and North Hills offer diverse training options in North Carolina's capital."
  },
  "richmond": {
    title: "Richmond",
    neighborhoods: ["The Fan", "Carytown", "Shockoe Bottom"],
    gyms: ["CrossFit Richmond", "RVA Barbell"],
    description: "Richmond combines historic charm with a growing fitness scene. The Fan and Carytown have become fitness hotspots in Virginia's capital."
  },
  "sacramento": {
    title: "Sacramento",
    neighborhoods: ["Midtown Sacramento", "East Sacramento", "Natomas"],
    gyms: ["CrossFit Sacramento", "Capital City Barbell"],
    description: "Sacramento serves as California's capital of fitness with diverse training options. Midtown and East Sacramento offer quality facilities in the Central Valley."
  },
  "san-antonio": {
    title: "San Antonio",
    neighborhoods: ["Downtown San Antonio", "Pearl District", "Stone Oak"],
    gyms: ["CrossFit San Antonio", "Alamo City Barbell"],
    description: "San Antonio's fitness community reflects the city's blend of history and modern growth. The Pearl District offers innovative training options in the Alamo City."
  },
  "san-diego": {
    title: "San Diego",
    neighborhoods: ["Pacific Beach", "Downtown San Diego", "La Jolla"],
    gyms: ["CrossFit San Diego", "Sunny Side Barbell"],
    description: "San Diego offers America's finest fitness climate with year-round outdoor training. Pacific Beach and La Jolla host world-class facilities for Southern California athletes."
  },
  "san-francisco": {
    title: "San Francisco",
    neighborhoods: ["SoMa", "Mission District", "Marina", "Hayes Valley"],
    gyms: ["CrossFit San Francisco", "SF Barbell", "Iron Tribe SoMa"],
    description: "San Francisco's fitness scene matches the city's innovative spirit. SoMa and the Mission District host diverse training options for Bay Area athletes."
  },
  "san-jose": {
    title: "San Jose",
    neighborhoods: ["Downtown San Jose", "Willow Glen", "Santana Row"],
    gyms: ["CrossFit San Jose", "Silicon Valley Barbell"],
    description: "San Jose's tech-savvy fitness community embraces data-driven training. Downtown and Willow Glen offer quality options in the heart of Silicon Valley."
  },
  "seattle": {
    title: "Seattle",
    neighborhoods: ["Capitol Hill", "Ballard", "Fremont", "South Lake Union"],
    gyms: ["CrossFit Seattle", "Emerald City Barbell"],
    description: "Seattle's fitness culture thrives despite the rainy reputation. Capitol Hill and Ballard have become fitness hotspots in the Emerald City."
  },
  "st-louis": {
    title: "St. Louis",
    neighborhoods: ["Downtown St. Louis", "Central West End", "Soulard"],
    gyms: ["CrossFit St. Louis", "Gateway City Barbell"],
    description: "St. Louis honors its Gateway heritage with a growing fitness community. Central West End and Soulard offer diverse training options on the Mississippi."
  },
  "tampa": {
    title: "Tampa",
    neighborhoods: ["Downtown Tampa", "Ybor City", "Hyde Park"],
    gyms: ["CrossFit Tampa", "Bay Area Barbell"],
    description: "Tampa's fitness scene benefits from year-round beautiful weather. Downtown and Ybor City offer training options along Florida's Gulf Coast."
  },
  "tucson": {
    title: "Tucson",
    neighborhoods: ["Downtown Tucson", "University District", "Sam Hughes"],
    gyms: ["CrossFit Tucson", "Desert City Barbell"],
    description: "Tucson offers unique desert fitness with stunning mountain backdrops. The University District brings athletic energy to this Arizona city."
  },
  "tulsa": {
    title: "Tulsa",
    neighborhoods: ["Downtown Tulsa", "Brookside", "Cherry Street"],
    gyms: ["CrossFit Tulsa", "Green Country Barbell"],
    description: "Tulsa's fitness community reflects Oklahoma's hardworking spirit. Brookside and Cherry Street have emerged as fitness destinations in Green Country."
  },
  "virginia-beach": {
    title: "Virginia Beach",
    neighborhoods: ["Oceanfront", "Town Center", "Hilltop"],
    gyms: ["CrossFit Virginia Beach", "Coastal Barbell"],
    description: "Virginia Beach combines coastal lifestyle with active fitness culture. The Oceanfront offers training with Atlantic views in this resort city."
  },
  "washington-dc": {
    title: "Washington DC",
    neighborhoods: ["Capitol Hill", "Georgetown", "Adams Morgan", "Dupont Circle"],
    gyms: ["CrossFit DC", "District Barbell", "Iron Tribe Capitol Hill"],
    description: "Washington DC's fitness scene matches the city's ambitious energy. Capitol Hill and Georgetown host diverse training options for the nation's capital professionals."
  }
};
