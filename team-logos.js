// Shared team-name -> logo-file lookup, used by attack/defense/setpiece (team ranking chart),
// game.html (score header) and compare.html (player picker cards). teamLogoSrc() returns null
// for any name not in this map and both call sites guard on that, so a team with no entry here
// just renders without an icon -- not an error. 110 of 114 teams have a crest; Newcastle Falcons
// and Newcastle Red Bulls share the same file (same club, different season name). The 29 teams
// added when NPC/International/Tour Match/EPCR Challenge Cup joined the dataset were sourced from
// Wikipedia (union/national-team crest where one exists; national flag as a fallback for a
// handful of minor rugby nations with no dedicated logo file on Wikipedia -- Belgium/Hong Kong
// remain flag fallbacks; Chile/Portugal/Tonga/USA were manually replaced with their real union
// crests afterward). 4 more teams added with Tour Match call-ups/development sides have no entry
// at all (Ireland A/England A/Japan XV/France A) -- no dedicated crest exists on Wikipedia, and
// the senior team's own crest would misleadingly imply they're the same team, so left blank
// rather than guessed.
const TEAM_LOGO = {
  "Bath Rugby":"bath.png","Union Bordeaux-Begles":"bordeaux-begles.svg","Bristol Bears":"bristol-bears.svg",
  "Bulls":"bulls.png","Cardiff Rugby":"cardiff.png","ASM Clermont Auvergne":"clermont.svg","Connacht Rugby":"connacht.svg",
  "Exeter Chiefs":"exeter-chiefs.png","Glasgow Warriors":"glasgow-warriors.svg","Gloucester Rugby":"gloucester.svg",
  "Stade Rochelais":"la-rochelle.svg","Leicester Tigers":"leicester-tigers.svg","Leinster Rugby":"leinster.svg",
  "Lions":"lions.png","Montpellier Herault Rugby":"montpellier.svg","Munster Rugby":"munster.svg",
  "Northampton Saints":"northampton.svg","Section Paloise":"pau.png","Racing 92":"racing92.svg",
  "Sale Sharks":"sale-sharks.svg","Saracens":"saracens.svg","Stade Francais Paris":"stade-francais.svg",
  "Stormers":"stormers.svg","Stade Toulousain":"toulouse.svg","Harlequins":"harlequins.svg",
  "Newcastle Falcons":"newcastle.png","Newcastle Red Bulls":"newcastle.png",
  "BlackRams Tokyo":"blackrams.png","Shizuoka BlueRevs":"blue-revs.svg","Toshiba Brave Lupus Tokyo":"brave-lupus.svg",
  "Urayasu D-Rocks":"d-rocks.png","Mitsubishi Sagamihara Dynaboars":"dynaboars.png","Yokohama Canon Eagles":"eagles.svg",
  "Mie Honda Heat":"honda-heat.png","Kobelco Kobe Steelers":"kobe-steelers.png","Kubota Spears":"spears.png",
  "Tokyo Sungoliath":"sungoliath.png","Toyota Verblitz":"verblitz.png","Saitama Wild Knights":"wild-knights.png",
  "Hanazono Kintetsu Liners":"liners.png",
  "Argentina":"argentina.png","Australia":"australia.svg","England":"england.svg","Fiji":"fiji.svg","France":"france.png",
  "Ireland":"ireland.svg","Italy":"italy.svg","Japan":"japan.svg","New Zealand":"new-zealand.svg","Scotland":"scotland.png",
  "South Africa":"south-africa.svg","Wales":"wales.svg",
  "Blues":"blues.png","ACT Brumbies":"brumbies.svg","Chiefs":"chiefs.png","Crusaders":"crusaders.png",
  "Fijian Drua":"fijian-drua.svg","Highlanders":"highlanders.svg","Hurricanes":"hurricanes.png",
  "Moana Pasifika":"moana-pasifika.png","Queensland Reds":"reds.svg","NSW Waratahs":"waratahs.svg","Western Force":"western-force.png",
  "Bayonne":"bayonne.svg","Castres Olympique":"castres.png","Lyon":"lyon.svg","US Montauban":"montauban.png","USAP":"perpignan.png","RC Toulon":"toulon.png",
  "Vannes":"vannes.svg",
  "Benetton Rugby":"benetton.svg","Dragons RFC":"dragons.png","Edinburgh Rugby":"edinburgh.svg","Ospreys":"ospreys.svg",
  "Scarlets":"scarlets.svg","Sharks":"sharks.png","Ulster Rugby":"ulster.svg","Zebre Parma":"zebre.png",
  "Auckland":"auckland.png","Bay Of Plenty":"bay-of-plenty.png","Canterbury":"canterbury.png",
  "Counties Manukau":"counties-manukau.png","Hawke's Bay":"hawkes-bay.svg","Manawatū":"manawatu.png",
  "North Harbour":"north-harbour.svg","Northland":"northland.png","Otago":"otago.jpg","Southland":"southland.png",
  "Taranaki":"taranaki.svg","Tasman":"tasman.png","Waikato":"waikato.png","Wellington":"wellington.png",
  "Belgium":"belgium.svg","Canada":"canada.png","Chile":"chile.png","Georgia":"georgia.png","Namibia":"namibia.svg",
  "Portugal":"portugal.png","Romania":"romania.png","Samoa":"samoa.png","Spain":"spain.svg","Tonga":"tonga.png",
  "USA":"usa.png","Uruguay":"uruguay.png",
  "Cheetahs":"cheetahs.svg","Black Lion":"black-lion.png","Hong Kong":"hong-kong.svg",
  "Argentina XV":"argentina-xv.png","Maori All Blacks":"maori-all-blacks.png","Barbarians":"barbarians.png"
};
function teamLogoSrc(name){ const f = TEAM_LOGO[name]; return f ? ('logos/' + f) : null; }
