// Shared team-name -> logo-file lookup, used by attack/defense/setpiece (team ranking chart),
// game.html (score header) and compare.html (player picker cards). 75 of 78 teams have a crest;
// teams without one (Hanazono Kintetsu Liners, Vannes, Newcastle Red Bulls) just render no icon.
const TEAM_LOGO = {
  "Bath Rugby":"bath.png","Union Bordeaux-Begles":"bordeaux-begles.svg","Bristol Bears":"bristol-bears.svg",
  "Bulls":"bulls.png","Cardiff Rugby":"cardiff.png","ASM Clermont Auvergne":"clermont.svg","Connacht Rugby":"connacht.svg",
  "Exeter Chiefs":"exeter-chiefs.png","Glasgow Warriors":"glasgow-warriors.svg","Gloucester Rugby":"gloucester.svg",
  "Stade Rochelais":"la-rochelle.svg","Leicester Tigers":"leicester-tigers.svg","Leinster Rugby":"leinster.svg",
  "Lions":"lions.png","Montpellier Herault Rugby":"montpellier.svg","Munster Rugby":"munster.svg",
  "Northampton Saints":"northampton.svg","Section Paloise":"pau.png","Racing 92":"racing92.svg",
  "Sale Sharks":"sale-sharks.svg","Saracens":"saracens.svg","Stade Francais Paris":"stade-francais.svg",
  "Stormers":"stormers.svg","Stade Toulousain":"toulouse.svg","Harlequins":"harlequins.svg","Newcastle Falcons":"newcastle.png",
  "BlackRams Tokyo":"blackrams.png","Shizuoka BlueRevs":"blue-revs.svg","Toshiba Brave Lupus Tokyo":"brave-lupus.svg",
  "Urayasu D-Rocks":"d-rocks.png","Mitsubishi Sagamihara Dynaboars":"dynaboars.png","Yokohama Canon Eagles":"eagles.svg",
  "Mie Honda Heat":"honda-heat.png","Kobelco Kobe Steelers":"kobe-steelers.png","Kubota Spears":"spears.png",
  "Tokyo Sungoliath":"sungoliath.png","Toyota Verblitz":"verblitz.png","Saitama Wild Knights":"wild-knights.png",
  "Argentina":"argentina.png","Australia":"australia.svg","England":"england.svg","Fiji":"fiji.svg","France":"france.png",
  "Ireland":"ireland.svg","Italy":"italy.svg","Japan":"japan.svg","New Zealand":"new-zealand.svg","Scotland":"scotland.png",
  "South Africa":"south-africa.svg","Wales":"wales.svg",
  "Blues":"blues.png","ACT Brumbies":"brumbies.svg","Chiefs":"chiefs.png","Crusaders":"crusaders.png",
  "Fijian Drua":"fijian-drua.svg","Highlanders":"highlanders.svg","Hurricanes":"hurricanes.png",
  "Moana Pasifika":"moana-pasifika.png","Queensland Reds":"reds.svg","NSW Waratahs":"waratahs.svg","Western Force":"western-force.png",
  "Bayonne":"bayonne.svg","Castres Olympique":"castres.png","Lyon":"lyon.svg","US Montauban":"montauban.png","USAP":"perpignan.png","RC Toulon":"toulon.png",
  "Benetton Rugby":"benetton.svg","Dragons RFC":"dragons.png","Edinburgh Rugby":"edinburgh.svg","Ospreys":"ospreys.svg",
  "Scarlets":"scarlets.svg","Sharks":"sharks.png","Ulster Rugby":"ulster.svg","Zebre Parma":"zebre.png"
};
function teamLogoSrc(name){ const f = TEAM_LOGO[name]; return f ? ('logos/' + f) : null; }
