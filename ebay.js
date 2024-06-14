Axios = require('axios');

const theAnswer = ""

function getDefaults(brand){
    switch(brand.toLowerCase()){
        
        case 'caline':
        return 30;
        break;
        
        case 'chellee':
        return 80;
        break;
        
        case 'cmatmods':
        return 80;
        break;
        
        case 'dod':
        case 'd.o.d.':
        return 40;
        break;
        
        case 'donner':
        return 30;
        break; 
        
        case 'dr. j':
        case 'dr j':
        case 'doctor j':
        return 50;
        break;
        
        case 'ernie ball':
        return 60;
        break;
        
        case 'guyatone':
        return 60;
        break;
        
        case 'hao':
        return 80;
        break;
        
        case 'hotone':
        return 40;
        break;
        
        case 'joyo':
        return 20;
        break;
        
        case 'kmise':
        return 20;
        break;
        
        case 'kokko':
        return 25;
        break;
        
        case 'make sounds loudly':
        return 130;
        break;
        
        case 'mi audio':
        return 75;
        break;
        
        case 'mooer':
        return 40;
        break;
        
        case 'mosky audio':
        case 'mosky':
        return 30;
        break;
        
        case 'nordvang':
        return 450;
        break;
        
        case 'outlaw':
        case 'outlaw effects':
        return 30;
        break;
        
        case 'tomsline':
        return 30;
        break;
        
        case 'tone city':
        return 35;
        break;
        
        case 'tortuga':
        return 125;
        break;
        
        case 'valeton':
        return 30;
        break;
        
        case 'vanamps':
        case 'van amps':
        return 300;
        break;
        
        default:
        return 0
        break;
    }
}


function getModels(brand,model){
    var models = []
    switch(brand.toLowerCase()){
        
        case '1981 inventions':
        case '1981':
        models = [275,'DRV']
        break;
        
        case '3leaf audio':
        case '3leaf':
        models = [160,'Proton',275,'Octabvre']
        break;
        
        case '65 amps':
        case '65amps':
        case '65':
        models = [200,'Colour-Bender','Color-Bender',175,'Colour','Color']
        break;
        
        case '68 pedals':
        case '68 pedals':
        models = [150,'King of Clone','Eye']
        break;
        
        case 'abominable electronics':
        case 'abominable':
        models = [140,'Hail Satan Mini','Mini Hail Satan','Cult','Cat Dirt',200,'Throne',150,'Shred','Toke',160,'Dsom',235,'Deluxe Hail Satan','Hail Satan Deluxe',150,'Santa','Pools',325,'Wicked',175,'Evil Ned']
        break;
        
        case 'abracadabra audio':
        case 'abracadabra':
        models = [750,'Ayahuasca']
        break;
        
        case 'a/da':
        models = [140,'PBF Flanger','Flanger PBF',200,'Flanger']
        break;
        
        case 'addrock':
        models = [200,'Boost-master','Smile']
        break;
        
        case 'adventure audio':
        case 'adventure':
        models = [250,'Demogorgon',200,'Fuzz Peaks',130,'Lunge',90,'Thaw']
        break;
        
        case 'aguilar':
        models = [175,'Tone-Hammer',80,'Octamizer',150,'Filter Twin',100,'Agro','Fuzzistor',125,'TLC',130,'Grape',150,'Chorus']
        break;
        
        case 'akai':
        models = [550,'Impact','SB-1',40,'Drive-3',50,'Intelliphase']
        break;
        
        case 'alairex':
        models = [80,'Halo J',200,'HALO','H.A.L.O.']
        break;
        
        case 'alesis':
        models = [50,'Faze',90,'Philtre',140,'Bitrman',70,'Ampliton',60,'Smashup',40,'Phlngr']
        break;
        
        case 'alexander pedals':
        case 'alexander':
        models = [90,'Litho',155,'Oblivion',180,'Wave-length','Reverse-Radical','Equilibrium DLX','Equilibrium Deluxe',160,'Syntax','Chesapeake','Radical Delay DX','Radical Delay Deluxe','Defender',125,'Sky-Fi','Amnesia','Radical Delay II Plus','Radical Delay 2 Plus','Radical Delay II-+','Radical Delay 2-+','Radical Delay',100,'Equilibrium',140,'History','SpaceXpander',150,'Jubilee','Colour','Color','Quadrant','Sky-5000','F.13',165,'Super-ball',175,'Space-Race',170,'Marshmallow','Marshmellow','Super Radical Delay',120,'Riff']
        break;
        
        case 'ampeg':
        models = [80,'SBO Scrambler',175,'Scrambler','SCR-DI',250,'Phazzer',80,'Liqu']
        break;
        
        case 'amplified nation':
        case 'amp nation':
        models = [325,'Big Bloom']
        break;
        
        case 'amptweaker':
        case 'amp tweaker':
        models = [150,'Pressurizer',95,'Tight Drive Jr.',245,'Tight-Fuzz Pro',225,'Big-Rock Pro',125,'Bass Tight Rock Jr.',140,'Tight-Metal',125,'Fat-Rock',180,'Tight-Drive Pro']
        break;
        
        case 'analog alien':
        models = [300,'Rumble-Seat',120,'Alien Twister',275,'Alien Bass Station','ABS',150,'Fuzz Bubble','Fuzzbubble',120,'Bucket-Seat',225,'Double','Walsh']
        break;
        
        case 'analogue solutions':
        models = [205,'Strangelove']
        break;
        
        case 'anasounds':
        models = [200,'Ages']
        break;
        
        case 'analogman':
        case 'analog man':
        models = [800,'King of Tone','KOT',450,'Sun-lion',325,'Sun-bender MKIV','Sun-bender MK IV',170,'Juicer',250,'Bi-Chorus',350,'ARDX-20',250,'Prince of Tone','POT',200,'Mini Bi-Comp','Bi-Comp Mini','Comprossor','Comprosser','Beano','Chorus','Peppermint',80,'Buffer',165,'Astro-tone',300,'Foot-Chorus',225,'Sun-face']
        break;
        
        case 'aphex':
        models = [60,'Exciter']
        break;
        
        case 'arc effects':
        case 'arc':
        models = [170,'Soothsayer',120,'Big Green',180,'Klone',190,'Shepherd']
        break;
        
        case 'arkham':
        models = [500,'Oracle']
        break;
        
        case 'atomic amplifiers':
        case 'atomic':
        models = [300,'Bass-Box']
        break;
        
        case 'audible disease':
        models = [175,'Trouble']
        break;
        
        case 'audio kitchen':
        models = [400,'Small Trees',450,'Trees']
        break;
        
        case 'audio sprockets':
        case 'audiosprockets':
        models = [350,'Tone-Dexter']
        break;
        
        case 'balls':
        models = [150,'Pink']
        break;
        
        case 'bananana effects':
        case 'bananana':
        models = [150,'Abracadabra',170,'Matr']
        break;
        
        case 'barber electronics':
        case 'barber':
        case 'clark barber':
        case 'clark':
        models = [400,'Gainster',100,'Dirty','Compact Tone Press','Tone Press Compact','Custom Cool','Cool Custom',90,'Tone Press','Ltd',150,'Edge Hog',150,'Direct Drive Compact','Compact Direct Drive',140,'Small Fry',110,'Super Sport Direct Drive','Direct Drive Super Sport','Direct Drive SS','SS Direct Drive','Gain-Changer',150,'Direct Drive',130,'Launch-pad']
        break;
        
        case 'basic audio':
        case 'basic':
        models = [140,'Zippy',130,'Overtdrive','Future-man',110,'Myth',170,'Scarab Deluxe',155,'Super-Fuzz',120,'Throbby',150,'Ram']
        break;
        
        case 'bearfoot fx':
        case 'bearfootfx':
        case 'bearfoot':
        models = [150,'Blue-berry','Uber-bee','Emerald','Emrald','Beest','Mint Green',140,'Polar','Arctic',90,'Dyna-red',100,'Pale Green','Model','Sparkling',120,'Silver Bee','Bone-Bender','Honey-Bee','Candy Apple','Candiru',110,'Pink','Sea-Blue',130,'Burgundy',160,'Goldilocks']
        break;
        
        case 'beautiful noise':
        models = [235,'Explodes',225,'Sleeper']
        break;
        
        case 'beetronics':
        models = [160,'Fat-bee',200,'Swarm',235,'Royal Jelly',180,'Octahive',165,'Overhive',110,'Buzzter',155,'Whoctahell']
        break;
        
        case 'behringer':
        models = [100,'Vintage Time','VM-1']
        break;
        
        case 'benson amps':
        case 'benson':
        models = [200,'Preamp',300,'Germ']
        break;
        
        case 'berkos fx':
        case 'berkosfx':
        case 'berkos':
        models = [375,'Third Stone','3rd Stone']
        break;
        
        case 'bigfoot fx':
        case 'bigfoot':
        models = [140,'Octo-Puss Prime',100,'Trouble',150,'Magnavibe','King',125,'Octo-Puss']
        break;
        
        case 'big joe stomp box company':
        case 'big joe stompbox company':
        case 'big joe':
        models = [155,'Empire']
        break;
        
        case 'big knob pedals':
        case 'big knob':
        models = [60,'Wah-Fix']
        break;
        
        case 'bixonic':
        models = [350,'2000-R',160,'Expandora']
        break;
        
        case 'black arts toneworks':
        case 'black arts':
        models = [170,'Pharaoh Supreme',140,'Black Sheep',260,'Coven',85,'Fnord',250,'Sarcophagus',100,'LSTR','Revelation',110,'Oath',130,'Pharaoh',80,'Ritual',120,'Destroyer','Forest','Witch',130,'Quantum',140,'Crown',100,'Tres']
        break;
        
        case 'black cat':
        models = [100,'Mona','Mini Trem','Freddie','Monster',120,'N Fuzz','D&S',175,'Bee-Buzz',150,'OD-Fuzz','OD - Fuzz',200,'Super Fuzz',145,'Wee']
        break;
        
        case 'blackhawk':
        case 'blackhawk amplifiers':
        models = [175,'Asgard']
        break;
        
        case 'blackout effectors':
        case 'blackout effecters':
        case 'blackout':
        models = [170,'Whetstone',130,'Blunderbuss','Fix']
        break;
        
        case 'blackstar':
        models = [130,'HT-Dist']
        break;
        
        case 'blackstone appliances':
        case 'blackstone':
        models = [180,'Mosfet']
        
        case 'blackstrap electrik':
        case 'blackstrap electrik co.':
        case 'blackstrap elektrik co':
        case 'blackstrap electric':
        models = [350,'Red Sam','Lonely Hunter','Herzog','Tone-Bender']
        break;
        
        case 'bogner':
        models = [190,'Lyndhurst','Lynhurst',110,'Oxford','Uberschall',160,'La-Grange',145,'Wessex',130,'Harlow','Burnley','Burnly']
        break;
        
        case 'bondi effects':
        case 'bondi':
        models = [210,'Sick-As','2026',200,'Breakers',350,'Del-Mar']
        break;
        
        case 'boomerang':
        models = [200,'E-155',250,'+',415,'iii']
        break;
        
        case 'boss':
        case 'roland':
        models = [250,'BF-1','SY-200',225,'PC-2','FB-2',50,'SD-1',300,'ES-5',225,'RC-10R',300,'JS-10',100,'EQ-20',800,'SY-1000',165,'PQ-4',275,'MS-3',40,'MD-2',170,'CE-2W','ME-70','SY-1',90,'TE-2','CE-2B','PS-6','GP-20',135,'CE-2','VE-1',125,'DM-4',115,'GE-20XL','GE-20 XL','DD-20',250,'RV-500',125,'RCE-10',500,'CE-1','DM-1',475,'ES-8',215,'FRV-1',60,'Bass Big Muff','ODB-3','TR-2','LM-2B','ST-2','MT-2',400,'RC-505','Beebaa',80,'LM-2',175,'ME-50B','ME-80','VO-1',50,'OS-2','VB-2W','TU-2','NS-2','LMB-3',125,'ME-50',90,'XT-2','SD-1W','MO-2','BF-2B',120,'RV-3','DM-2W','FBM-1','PH-1R','GT-1B',200,'GP-100','PN-2','MD-200','MD-500','VE-20','EQ-200','OD-200','DD-200','DC-2W','RE-20','Space Echo','VE-8',225,'FZ-2',400,'RC-300','SG-1','Slow Gear',210,'RC-30','DM-2',150,'GT-8','FDR-1','OC-2','JB-2','Angry Driver',80,'GE-7B','PS-5','MZ-2','DD-6','OC-3','RC-1',285,'RC-50',225,'DD-500','GT-10',110,'DM-2W','BD-2W','DD-7',180,'SL-20',85,'SYB-5',450,'SY-300',70,'BD-2','HR-2','DS-2','CEB-3',75,'PH-3',70,'SYB-3','BF-2',200,'HM-2',160,'CE-2W','GT-001',85,'RV-5','PH-2',50,'CS-3','CE-5',65,'CH-1','CE-3',75,'DD-3',100,'HF-2','ME-25','CS-2','CE-20','DSD-2','RV-6','DS-1X','WP-20G','GT-3',115,'TU-3W',55,'GEB-7',60,'GE-7','TU-3',155,'RT-20',230,'RC-202',250,'DC-2',130,'DA-2','RC-3','GT-1','DD-2','DD-8',140,'BC-1X',120,'RC-20',35,'DS-1',75,'RC-2',170,'RC-5']
        break;
        
        case 'broughton audio':
        case 'broughton':
        models = [300,'Studio One','Studio-1','Messenger',180,'Apex','Synth Voice',190,'Helion','Silver Deluxe','Flip-top','SV-Pre']
        break;
        
        case 'browne':
        case 'browne amplification':
        models = [260,'Protein',150,'T-4']
        break;
        
        case 'browntone':
        case 'brown tone':
        models = [200,'Hoochee-Mama','Macho-Man']
        break;
        
        case 'brunetti':
        case 'brunetti amplification':
        case 'brunetti tube amplification':
        models = [175,'Mercury',100,'Burning']
        break;
        
        case 'budda':
        models = [200,'Phatman']
        break;
        
        case 'buffalo fx':
        case 'buffalofx':
        case 'buffalo':
        models = [175,'TD-X','Evolution','M-1',200,'Power Booster',165,'RH-X',160,'Carrera','Patriot']
        break;
        
        case 'carl martin':
        models = [350,'Quattro','Quatro',160,'Plexi-tone Du','Delayla XL',70,'Boost Kick',275,'Octa-Switch mkiii','Octa-Switch mk3','Octa-Switch III','Octa-Switch mk 3','Octa-Switch mk iii',175,'Echo-tone',90,'Compressor Limiter','Noise','Delayla','xii','Two-Faze',130,'Parametric',140,'Fuzz',100,'Plexi-Tone','Injection',200,'Octa-Switch','Lick-Box',215,'Head-room',80,'Surf-Trem',110,'Rock-Bug',190,'Timmons',150,'AC-Tone','Panama','Bass Chorus']
        break;
        
        case 'caroline':
        case 'caroline guitar company':
        case 'caroline guitar co.':
        case 'caroline guitar co':
        models = [110,'Wave Cannon',140,'Hawaiian Pizza',250,'American Pizza',100,'Icarus',165,'Meteore','Somersault','Parabola',160,'Shigeharu',155,'Kilo-byte',200,'Mega-byte',140,'Hay-maker',125,'Olympia',225,'Cannonball']
        break;
        
        case 'carvin':
        models = [150,'Mach-100']
        break;
        
        case 'castledine':
        models = [300,'Wizard',400,'Olympic','Supra-Vibe',350,'Oltretomba',250,'7120','V-2']
        break;
        
        case 'catalinbread':
        case 'catalinbread effects':
        models = [120,'Katzenkonig','Karma-Suture','Galileo','Viper','Skewer',275,'Belle Epoch Deluxe',130,'Octapussy','Octopussy','Sabbra-Cadabra','Bicycle','Topanga','SFT','RAH','5F6',140,'Callisto',170,'Echorec','Giygas',100,'Valcoder','Perseus','Super-Charged','Heliotrope',160,'Nicompressor','Csidman','Talisman','Polara','Belle Epoch','Coriolis',130,'Antichthon',110,'Callisto','Semaphore','Dirty Little Secret','DLS',135,'55',110,'5',200,'Epoch Pre',150,'Wiio']
        break;
        
        case 'celestial effects':
        case 'celestial':
        models = [100,'Capricorn',70,'Aries']
        break;
        
        case 'ceriatone':
        models = [180,'Klein-ulator',225,'Centura',200,'Horse-breaker']
        break;
        
        case 'champion leccy':
        models = [225,'Woozy']
        break;
        
        case 'chandler':
        case 'chandler ltd.':
        case 'chandler limited':
        models = [240,'Tube-Driver',225,'Little Devil',250,'Limited Germanium']
        break;
        
        case 'chase bliss audio':
        case 'chase bliss':
        models = [245,'Gravitas',300,'Warped Vinyl mk-ii','Warped Vinyl mk-2','Wombtone mk-ii','Wombtone mk-2',575,'Thermae',500,'Tonal Recall v-2','Tonal Recall mk-ii','Tonal Recall mk-2',500,'Blooper',350,'Mood',325,'Dark World','Warped Vinyl',55,'Faves',300,'Tonal Recall','Brothers','Condor',750,'Automatone',250,'Wombtone']
        break;
        
        case 'chase bliss audio / cooper fx':
        case 'chase bliss audio/cooper fx':
        models = [750,'Generation Loss']
        break;
        
        case 'chase bliss & zvex':
        case 'chase bliss and zvex':
        models = [500,'Bliss Factory']
        break;
            
        case 'chase tone':
        models = [165,'Golden Secret','Secret Pre-amp',140,'Velvet',150,'Roadster',120,'Fuzz-Fella',425,'Tonal Recall V2',285,'Tonal Recall']
        break;
        
        case 'chicago iron works':
        case 'chicago iron':
        models = [300,'Octavian Plus','Octavian-+',275,'Octavia',250,'Parachute']
        break;
        
        case 'chunk systems':
        case 'chunk':
        models = [180,'Agent']
        break;
        
        case 'cmatmods':
        models = [50,'Signa']
        break;
        
        case 'colorsound':
        models = [500,'Supa Tone-bender',300,'Phazex']
        break;
        
        case 'cooper fx':
        case 'cooper':
        models = [285,'Arcades',500,'Generation Loss',250,'Outward']
        break;
        
        case 'coppersound pedals':
        case 'coppersound':
        case 'copper sound pedals':
        case 'coppersound pedals':
        models = [140,'Daedalus',160,'Fox-catcher',130,'Polaris',145,'Loma']
        break;
        
        case 'cornerstone':
        case 'corner stone':
        models = [250,'Gladio-SC',375,'Gladio',150,'Zefiro']
        break;
        
        case 'crazy tube circuits':
        case 'crazy tube':
        models = [175,'Time',150,'Planet B','Deranged','Limelight',160,'Splash mk-iii','Splash mk-3','Falcon','Killer',120,'Splash mk-ii','Splash mk-2',250,'Whale']
        break;
        
        case 'crowther':
        models = [275,'Double Hot-cake',175,'Prunes',160,'Hot-Cake']
        break;
        
        case 'cusack music':
        case 'cusack':
        models = [115,'Tap-a-Whirl',100,'Reverb SME',110,'Orthrus','Tap-a-Fuzz',190,'Resound','Tap-a-Delay Deluxe',110,'Tap-a-Delay',120,'Tremolo AME','Tremolo A.M.E.',70,'Scruzz',95,'Screamer',180,'Cracker',135,'Tap-a-Phase',160,'Meta-Plexi']
        break;
        
        case 'custom tones':
        models = [325,'Ethos Clean II',500,'Ethos Overdrive','Clean-Fusion II','Clean-Fusion 2',200,'TWE-1','Ethos Clean','Pre-amp']
        break;
        
        case 'd*a*m':
        case 'dam':
        case 'differential audio manifestationz':
        case 'differential audio manifestations':
        models = [290,'Super-Bee',275,'Meat-Head','Sonic Titan',300,'Red Rooster','Dragonfly',450,'Fuzz Sound',400,'Grease']
        break;
        
        case 'dan armstrong':
        models = [325,'Orange Squeezer','Orange Squeeze','Green Ringer',200,'Blue Clipper','Yellow Humper']
        break;
        
        case 'danelectro':
        models = [175,'Back Talk','Backtalk',50,'DJ-7','Milkshake',60,'Cool Cat',40,'Wasabi',90,'Breakdown',100,'Eisenhower',130,'3699 Fuzz']
        break;
        
        case 'daredevil':
        models = [125,'Cool',150,'Drive-Bi','Double Atomic',110,'Silver Solo',70,'Hype','Creeper',100,'Almighty','Wolf','Premium',140,'Cocked',120,'Mystery','Gold Leader','Fuzz Boss',130,'Atomic','Daisho','Slick',90,'Yorba','LSD','Logan',80,'Fearless','Nova','Duster']
        break;
        
        case 'darkglass':
        case 'darkglass electronics':
        models = [300,'B7K Ultra',340,'Microtubes X Ultra',200,'Super Symmetry','Hyper Luminal',325,'Alpha Omega Ultra',250,'Alpha-Omega','Alpha/Omega',130,'B3K',150,'Alpha-Omicron','Alpha/Omicron','Microtubes X',120,'Duality',210,'Vintage Deluxe',225,'B7K','X-7','Element',160,'Harmonic Boost',425,'Adam']
        break;
        
        case 'david allen':
        models = [135,'Bazooka']
        break;
        
        case 'dawner prince electronics':
        case 'dawner prince':
        models = [250,'Boonar',275,'Pulse',180,'Red-Rox']
        break;
        
        case 'dcw':
        models = [80,"Jam-Ray"]
        break;
        
        case 'death by audio':
        case 'd.b.a.':
        case 'dba':
        models = [350,'Rooms',200,'Robot','Supersonic Fuzz-Gun','Interstellar Overdriver Deluxe','Exit Index','Apocalypse',400,'Scream',215,'Echo Dream Delay 2','Echo Dream 2',250,'Waveform',130,'Interstellar Overdrive',100,'Total Sonic Annihilation',140,'Micro Harmonic Transformer','Absolute Destruction','Fuzz War',180,'Machine','Animation',120,'Soundwave',300,'Pinned']
        break;
        
        case 'decibel 11':
        case 'decibel eleven':
        models = [80,'Clod']
        break;
        
        case 'deep trip land':
        case 'deep trip':
        case 'deeptrip':
        case 'deeptrip land':
        case 'deeptripland':
        models = [150,'Hell-bender',200,'BOG','B.O.G']
        break;
        
        case 'demedash':
        models = [360,'T-120',185,'112']
        break;
        
        case 'demeter':
        case 'demeter amplification':
        models = [90,'Over-driveulator',150,'Tremulator','TRM-1',100,'Opto-Compulator',350,'Reverbulator','RVB-1']
        break;
        
        case 'devi ever':
        case 'deviever':
        models = [200,'Godzilla']
        break;
        
        case 'diamond':
        models = [285,'Memory Lane DLX','Memory Lane Deluxe',130,'Compressor','-1R-1','Comp Jr.','Quantum Leap',100,'Boost','BEQ-1',150,'Tremolo','Memory Lane Jr.','Counter-Point','Phase','PHS-1',300,'Memory Lane']
        break;
        
        case 'diaz':
        case 'cesar diaz':
        case 'caesar diaz':
        models = [800,'Tremodillo','Texas Tremodillo',1000,'Square-Face','Texas Square-Face',1000,'Texas Ranger']
        break;
        
        case 'diezel':
        case 'deizel':
        models = [475,'Zerrer',200,'VH-4']
        break;
        
        case 'digdugdiy':
        models = [375,'Super Ends',200,'Metropolis',150,'Purple-Rain',225,'Mystery',275,'Paradise',350,'Ends',375,'Super-Waifu',275,'Balance']
        break;
        
        case 'digitech':
        case 'digi tech':
        case 'hardwire':
        models = [70,'CM-2',90,'SC-2',300,'Brian May',350,'2120','Artist',235,'Trio-Plus','Trio-+',110,'Ricochet',250,'Vocalist Live Harmony',100,'TR-7','Jimi Hendrix Experience','BP-8','Nautila','Mosaic','Vocal 300',80,'Trio','Luxe','Whammy-IV','Whammy-4',220,'Whammy-DT',50,'Digi-Delay',40,'Grunge',700,'Talker',225,'Whammy-II','Whammy-2','WH2',400,'Whammy-1','Whammy-I','WH-1',90,'Weapon','Obscura',70,'Cabdryvr','Cab Dry Vr',130,'Drop',125,'Robot',120,'Freq-Out',150,'Bass Whammy','Whammy Bass','Time-Bender',200,'Supernatural',70,'Jam-man Express',175,'Jam-man Delay',145,'XP-200',120,'EX-7',65,'Digiverb',40,'RP-70',95,'RP-7',45,'Blues',175,'Whammy',150,'Jam-man Stereo',50,'Monkey',110,'Jam-Man Solo XT',60,'Crossroads']
        break;
        
        case 'dirge electronics':
        case 'dirge':
        models = [175,'Melting']
        break;
        
        case 'divided by 13':
        case 'divided by thirteen':
        models = [125,'Joy-ride',200,'Switchazel','Switch-Hazel',100,'High-ball','Lift']
        break;
        
        case 'dls effects':
        case 'dls':
        models = [160,'Roto-SIM','Roto-SPIN',140,'Versa-Vibe',90,'Echo-tap',80,'Reckless']
        break;
        
        case 'dmb':
        case 'd.m.b.':
        models = [200,'Lunar-Echo']
        break;
        
        case 'doc lloyd':
        models = [210,'Photon']
        break;
        
        case 'dod':
        case 'd.o.d.':
        models = [140,'Meat-box',120,'Gonkulator',275,'Buzz-box',140,'Rubber-neck',100,'Looking-glass',80,'Vibro-thang','Vibro-thing','YJM','Yngwie',65,'Carcosa',200,'680']
        break;
        
        case 'dr. no':
        case 'dr no':
        case 'dr. no effects':
        case 'dr no effects':
        models = [250,'Holy Wahcamoly',200,'Turd',325,'Road-runner',190,'Octofuzz',150,'Madfly',120,'Power Driver',140,'Drive-o-Matic',300,'Skull Fuzz',350,'Moon']
        break;
        
        case 'dr. scientist':
        case 'dr scientist':
        models = [300,'Atmosphere',200,'Bit-quest',135,'Frazz-Dazzler','Fraz-Dazzler',175,'Spectrum Analyzer','Dusk',225,'Cosmichorus','Heisenberg',160,'Tremolessence',180,'Sunny Day',150,'Elements',140,'Reverberator']
        break;
        
        case 'dreadbox':
        modesls = [250,'Omikron',450,'Hypnosis',240,'Kappa',310,'Typhon']
        break;
        
        case 'drolo':
        models = [240,'Twin Peaks',550,'Stretch']
        break;
        
        case 'drybell':
        case 'dry bell':
        models = [250,'Engine',275,'Vibe',225,'Unit']
        break;
        
        case 'dsm noisemaker':
        case 'dsm noise maker':
        case 'dsm':
        case 'dsm & humboldt electronics':
        models = [200,'Omnicabsim-Deluxe',155,'Drive-Maker',120,'Mini-Omnicabsim','Omnicabsim-Mini',280,'Simplifier D',225,'Simplifier',150,'Loopster',120,'Sub-atomic',50,'Phoenix','Love']
        break;
        
        case 'dunlop':
        models = [100,'JHW-2','Psych',80,'Cry-Baby From Hell','DB-01','Dime-bag',135,'JP-95','Petrucci',225,'EVH 35th Anniversary Van Halen Wah',180,'Johnson',120,'Santos','Uni-Vibe',200,'Octavio','JD-4S','Rotovibe','JH-4S','UV-1',130,'McCoy Cry','CM-95',150,'EP-103','Echoplex Delay',170,'JH-2',90,'Tremolo','TS-1','535-Q','Gypsys','Hendrix Fuzz-Face Mini','Mini Hendrix Fuzz-Face','EVH','Fuzz-Face Germanium','Germanium Fuzz-Face',75,'DVP-4','Volume X Mini','Volume Mini',110,'Q-Zone','Bonamassa Fuzz-Face Mini','ZW-45','Wylde Signature Cry','Wylde Cry','Wylde Wah','Wylde Signature Wah',75,'Mr. Cry-Baby','Mister Cry-Baby','95-Q','Silicon Fuzz-Face Mini','Mini Silicon Fuzz-Face','Hendrix Wah','Hendrix Signature Wah','JH-1',100,'British','EP-101','Hammett','KH-95','JB-95','Bonamassa Signature Cry','Bonamassa Signature Wah','Bonamassa Cry','Bonamassa Wah','Slash','SW-95',60,'DC-Brick',120,'MC-404','CAE','JC-95','Cantrell','Stereo Chorus','Bonamassa Fuzz-Face','Fuzz-Face Bonamassa','Buddy',165,'JH-F1','Hendrix Fuzz','Face Hendrix',50,'DVP-1','JHB-1','Hendrix Cry',140,'Hendrix 70th Anniversary']
        break;
        
        case 'dunwich':
        models = [350,'Op-Amp']
        break;
        
        case 'durham electronics':
        case 'durham':
        models = [90,'Mucho',135,'Reddverb','Redverb',110,'Zia',200,'Crazy',150,'Sex']
        break;
        
        case 'dwarfcraft':
        case 'dwarf craft':
        case 'dwarfcraft devices':
        case 'dwarf-craft devices':
        models = [150,'Wizard of Pitch','Brain','Stags',100,'Total Spack Vibes',200,'Eau Claire Thunder','Eau Clare Thunder',275,'Super-Wizard',175,'Happiness',225,'ARF','Attack Release Filter',235,'Pitch-Grinder',140,'Baby Thundaa',120,'Great Destroyer',160,'Hair',130,'Treeverb','Necromancer','Romance',180,'Gears']
        break;
        
        case 'earthquaker':
        case 'earthquaker devices':
        models = [190,'Hoof Reaper',180,'Astral',245,'Disaster Transport Sr',145,'Pitch-Bay',80,'Arrows',170,'Interstellar',175,'Data Corrupter','Data Corruptor','Ages','Palisades',130,'Westwood',150,'Rainbow Machine',140,'Dream-Crusher',160,'Spires','EQDARP2','Arpanoid','Afterneath','Transmisser',130,'Space-Spiral','Cloven','Depths',100,'Grand Orbiter','Disaster Transport Jr.','Sea Machine','Acapulco',200,'White Light',110,'Hoof','Monarch','Organizer','Dream Crusher','Bit-Commander',200,'Avalanche','Pyramids','Terminal',175,'Bows',150,'Aqueduct','Aquaduct','Spatial','Channel','Talons','Warden',90,'Tone Job','Speaker Cranker','Bellows','Night Wire',80,'Plumes',190,'Swiss',95,'Erupt',400,'Sunn','Life',125,'Park','Reaper',120,'Dispatch','Dunes']
        break;
        
        case 'earthquaker devices & death by audio':
        case 'earthquaker devices and death by audio':
        models = [350,'Time']
        break;
        
        case 'ebs':
        models = [185,'Ultimate',140,'Sheehan',350,'Clarke Acoustic Preamp','Clarke Preamp',225,'Clarke Signature Wah','Clarke Wah']
        break;
        
        case 'echopark':
        case 'echo park':
        models = [200,'F-2','Dual Fuzz']
        break;
        
        case 'effectrode':
        models = [350,'Phaseomatic','Deluxe Vacuum',349,'Tube-Vibe',380,'Blackbird','Tube Drive',275,'Mercury','PC-2A',400,'LA-1A',200,'Fire-Bottle','Glass',410,'Delta-Trem',600,'Helios',300,'Blue-Bottle']
        break;
        
        case 'egnater':
        case 'egnator':
        models = [120,'Goldsmith']
        break;
        
        case 'electro faustus':
        case 'electrofaustus':
        models = [125,'Drone']
        break;
        
        case 'electrofoods ultd':
        case 'electrofoods ultd.':
        case 'electrofoods':
        models = [140,'Colon',175,'Germ',150,'Pig']
        break;
        
        case 'electro-harmonix':
        case 'electro harmonix':
        models = [275,'1100-TT',50,'Neo Mistress','Little Big Muff','Silencer',80,'Eddy','Octavix',110,'Mod 11','Mod Eleven',40,'Dr. Q Nano','Doctor Q Nano','Nano Dr. Q','Nano Doctor Q',410,'95000',170,'550-TT','Ravish',180,'Super-Ego Plus','Super-Ego +','Super-Ego+','1440','Soul-POG',75,'Holy Grail Nano','Nano Holy Grail','Nano Battalion','Nano Battalion',110,'720','Platform','Sovtek Deluxe Big Muff','Battalion','Deluxe Big Muff Sovtek','Deluxe Big Muff',135,'Q-Balls','Q:-Balls',70,'Bass Soul Food','Stereo Electric Mistress','CE-3',200,'Oceans 12',"Ocean's 12",'Deluxe Memory Man','Grand Canyon',240,'POG-2',90,'Deluxe Bass Big',100,'Cock Fight Plus','Attack Delay','Canyon','English Muff\'n','English Muff \'n','Good-Vibes','English Muffn','English Muffin','Graphic Fuzz','Doctor Q','Dr. Q','Hum Debugger',350,'DRM-15',80,'Germanium-4','Cock-Fight','Clone Theory','Holy Stain','Mini Q-Tron','Q-Tron Mini',110,'Oceans 11','Ocean\'s 11','Oceans Eleven',150,'Nano-POG','POG Nano','C-9','Tube-EQ','Mainframe',160,'Lester-G','Tube-Zipper','V-256','Super-Pulsar','Talking','Thing',50,'Hog-2 Foot','Hog-2 Controller',375,'Hog-2',180,'Hog',130,'Super-ego','Hoax','Tone Tattoo','Black-Finger','Hazarai',210,'Bass Micro-synth',60,'Big Muff','Memory Toy','Nano Small Stone','Small Stone Nano',225,'22500',295,'2880',300,'Super-Switcher',140,'B9','Voice-Box',450,'16-Second',250,'Deluxe Big Muff',160,'Synth-9',130,'Key-9',110,'Micro-POG',160,'Cathedral','Q-Tron Plus','Q-Tron +','Q-Tron+',55,'Neo-Clone',130,"Pitch-Fork",90,"Freeze",'HM-3',95,'White Finger',350,'45000',120,'JHS','Lester-K','Holier Grail',150,'Mel-9',175,'Bass-9',300,'POG']
        break;
        
        case 'electronic audio experiments':
        case 'eae':
        models = [200,'Model FET','Halberd',225,'Long-sword',300,'Hyper-sleep',150,'Surveyor',325,'Limelight']
        break;
        
        case 'electronic orange':
        models = [225,'Pig Hoof',275,'Moon-vibe']
        break;
        
        case 'elektron':
        models = [160,'Analog Drive']
        break;
        
        case 'emanating fist':
        models = [250,'Lucifer']
        break;
        
        case 'emerson':
        models = [85,'EM-Drive',110,'Golden-face']
        break;
        
        case 'emma':
        case 'emma electronic':
        case 'emma electronics':
        models = [80,'Transmorgifier']
        break;
        
        case 'empress':
        models = [300,'Para-EQ',200,'Nebulus','Compressor','Vintage Modified','Super-delay','Multi-drive',450,'Zoia',180,'Tape Delay',100,'Buffer-+','Germ',150,'Tremolo-2',375,'Reverb','Echo-system',225,'Phaser',125,'Tremolo']
        break;
        
        case 'endangered audio research':
        case 'endangered audio':
        models = [375,'AD4096','Delay',250,'Spectravibe']
        break;
        
        case 'engl':
        models = [100,'RS-10',200,'Cabloader']
        break;
        
        case 'epicenter audio':
        case 'epicenter':
        models = [160,'Valve-boy']
        break;
        
        case 'erica synths':
        models = [300,'Plasma',500,'Zen']
        break;
        
        case 'ernie ball':
        models = [75,'Ambient Delay']
        break;
        
        case 'eventide':
        models = [200,'Time-factor',170,'Power-max',140,'Evenmidi',225,'Mod-factor',360,'Space',335,'Pitch-Factor',250,'Rose',240,'Mixing-Link',110,'Power-factor 2',250,'H9 Core',500,'H9 Max',350,'Space',240,'Micro-pitch']
        break;
        
        case 'expresso fx':
        case 'expresso':
        models = [225,'Germ']
        break;
        
        case 'ezhi & aka':
        case 'ezhi&aka':
        case 'ezhi and aka':
        models = [250,'Tape T','Moomindrone',130,'BROMDIHYDROCHLORPHENYLBENZODIAZEPINE','Brom','Brom.']
        break;
        
        case 'faceless fx':
        case 'faceless':
        models = [200,"Ripken's Bat",240,'De-Sade']
        break;
        
        case 'fairfield circuitry':
        case 'fairfield':
        models = [185,'Unpleasant Surprise','Unpleasant Suprise',250,'Eyes','Meet','Randy',160,'Accountant',110,'Operator',150,'Barber',120,'Modele',175,'Hors','900',275,'Shallow']
        break;
        
        case 'fea labs':
        case 'fea':
        models = [215,'Photon Fuzz II','Photon Fuzz 2']
        break;
        
        case 'fender':
        models = [90,'Bends',70,'Engager',75,'Pugilist',200,'Tre-Verb','Downtown','Dual Marine','Duel Marine',130,'MTG','Trapper',190,'Pinwheel',120,'Moon','Marine',110,'Pour','Lost','Bubbler','Smolder',100,'Mirror',95,'Pelt',230,'Pool']
        break;
        
        case 'fire-eye':
        case 'fire eye':
        models = [150,'Red-eye']
        break;
        
        case 'firstman':
        models = [300,'Rotary','RT-3']
        break;
        
        case 'fishman':
        models = [260,'Aura Spectrum',210,'Tone-Deq',175,'Fission Bass',100,'Dreadnought','Dreadnaught','Dreadnaut',50,'Bass Preamp']
        break;
        
        case 'fortin amplification':
        case 'fortin':
        models = [140,'Mini-Zuul','Zuul Mini',200,'Zuul',175,'Grind','33',225,'White-chapel',100,'Fuzz',160,'Hex',80,'Roach',150,'Spliff']
        break;
        
        case 'foxpedal':
        models = [220,'Wave',150,'Kingdom Combo','Magnifica Deluxe',105,'Wrath','Magnifica-Plus','Magnifica-+','Refinery',165,'City',100,'Kingdom',115,'Defector',85,'Magnifica']
        break;
        
        case 'foxrox':
        case 'foxrox electronics':
        models = [170,'Zim',600,'Captain-Coconut',240,'Octron-2',325,'TZF-2',215,'Aqua-Vibe',145,'Hybrid','Octron',600,'TZF',100,'Hot Silicon']
        break;
        
        case 'foxx':
        models = [300,'Tone Machine',125,'Gemini']
        break;
        
        case 'fractal audio':
        case 'fractal':
        models = [450,'MFC-101 Mark 1','MFC-101 Mark I','MFC-101 mk-1','MFC-101 mk-i',500,'MFC-101',1000,'AX-8',1100,'Axe FX II',700,'FX-8',1050,"FM-3"]
        break;
        
        case 'frantone':
        models = [220,'Vibutron',190,'Brooklyn','Bassweet',160,'Sweet','Hep-Cat',250,'Cream']
        break;
        
        case 'frederic effects':
        case 'frederic':
        models = [100,'Deeply']
        break;
        
        case 'free the tone':
        models = [250,'TA-1H','MS-2V',225,'SOV-2','Silky',270,'FT-1Y','FT-Y1',300,'PA-1QG','SS-1V','String Slinger',275,'PA-1QB','AS-1R','Ambi-Space',210,'HB-2',350,'FT-2Y','FT-Y2',125,'Iron',160,'Boson',300,'Vehicle']
        break;
        
        case 'friday club':
        models = [90,'PD-100']
        break;
        
        case 'friedman':
        models = [300,'1525',400,'1530',150,'Power-Grid 10','Power-Grid Ten',115,'Buffer-Bay 6',210,'BE-OD Deluxe',130,'BE-OD','Dirty',120,'Pearl','Buxom',175,'Motor',105,'Sir-Compre',130,'Wah',170,'Small-Box']
        break;
        
        case 'frost giant electronics':
        case 'frost giant':
        models = [130,'Soma']
        break;
        
        case 'frostwave':
        case 'frost wave':
        models = [300,'Resonator','Funk','Space-Beam','Filter',350,'Blue Ringer',450,'Sonic',200,'RF-20',525,'Fat Controller']
        break;
        
        case 'fryette':
        models = [170,'S.A.S.','SAS']
        break;
        
        case 'fuchs':
        modes = [80,'Pure Gain',90,'Noxious',200,'Replay Jr.',150,'Valve','Straight',180,'Good',120,'Plush-Drive',100,'Royal Plush','Trem',50,'Cerberus',275,'Replay']
        break;
        
        case 'fulltone':
        models = [170,'CS-MDV-1','MDV-3',75,"Full-Drive 2",'GT-500',160,'Supa-Tre 2',150,'OCD-GE','O.C.D.-GE',"Mini Deja-Vibe",'Deja-Vibe 2','ABY-HT',140,'70 v1','70 Big Box',90,'70','Freq',95,'Plimsoul','Supa-Trem','Mas Malo',120,'Robin Trower',160,'Choral-Flange',175,'Ultimate Octave',100,'OCD','O.C.D',65,'2B','Fat-Boost',140,'Soul-Bender v1',110,'Octafuzz','69',70,'Catalyst']
        break;
        
        case 'function f(x)':
        models = [180,'Cannon',125,'Accufunkture',170,'Cluster']
        break;
        
        case 'fuzzhugger':
        case 'fuzz hugger':
        models = [100,'Arc Flash',120,'Doom']
        break;
        
        case 'fuzzlord':
        models = [180,'FET-120']
        break;
        
        case 'fuzzrocious':
        models = [150,'420','Heliotropic',140,'Cat-Tail','Demon King','Jawn',80,'Baby Furnace',125,'Ram','Driving','Furnace',130,'Mantis','Demon',120,'Croak','Stache','Feed','Lunar',135,'After-life',100,'Bax','Anolamlies']
        break;
        
        case 'gamechanger audio':
        case 'gamechanger':
        case 'game changer audio':
        case 'game changer':
        models = [250,'Plasma',275,'Plus',300,'Light']
        break;
        
        case 'gamechanger audio / erica synths':
        models = [300,'Plasma']
        break;
        
        case 'gaspedals':
        models = [200,'Carb']
        break;
        
        case 'gfi system':
        case 'gfi systems':
        models = [215,'Specular Reverb',160,'Cabzeus Mono',225,'Cabzeus',350,'Synesthesia',175,'Orca','Skylar']
        break;
        
        case 'gigrig':
        models = [400,'Pro 14']
        break;
        
        case 'god city instruments':
        case 'godcity instruments':
        case 'god city':
        case 'godcity':
        models = [100,'Murdock','Hannibal',140,'Riff-child','Unofuzz',300,'Ape Eye',120,'Brutalist Jr.','Brutalist Junior',160,'Face']
        break;
        
        case 'gojira fx':
        case 'gojirafx':
        case 'gojira':
        models = [275,'Sparkle']
        break;
        
        case 'greenchild':
        models = [250,'Tribus',100,'Mr. Boost']
        break;
        
        case 'greenhouse effects':
        case 'greenhouse':
        models = [80,'Middle-man']
        break;
        
        case 'greer amps':
        case 'greer':
        models = [100,'Ghetto-Stomp','Special Request',130,'Tomahawk','Moon-Shot','390',90,'Pork',160,'Light-speed','Lamplighter',140,'South-Land','Gorilla Warfare',175,'Super-Hornet',80,'Black-Fuzz',150,'Black Tiger']
        break;
        
        case 'grobert effects':
        case 'grobert':
        models = [200,'One']
        break;
        
        case 'gtown':
        models = [250,'Dual',175,'Holy']
        break;
        
        case 'guild':
        models = [600,'Foxey Lady','Foxy Lady',]
        break;
        
        case 'gurus':
        models = [260,'Double Decker',225,'Echosex-2',300,'Echosex-3',160,'Sexydrive','Sexy Drive']
        break;
        
        case 'guyatone':
        models = [125,'MDM5',40,'ND-2',80,'MO-2',60,'ST-2','CR-2','MC-3','Pre-amp','BL-2','PS-3','EX-2','HR-2','SD-2','SV-2','MD-3','FL-3','OD-2','VT-3','Hot-Drive','ME-2','TZ-2','Shaper',90,'MO-3',120,'Salas','Funky',125,'MR-2','WR-2',50,'MT-3','MM-2','HD-2',100,'PS-2','MD-3',75,'MD-2',325,'Ultron']
        break;
        
        case 'hammond':
        models = [260,'Leslie']
        break;
        
        case 'hamstead':
        models = [300,'Zenith',175,'Ascent','Odyssey',215,'Signature',275,'Subspace']
        break;
        
        case 'hardwire':
        models = [70,'CM-2']
        break;
        
        case 'hartman':
        models = [300,'Flanger',125,'Crystal Valve','BC-108','LM-308','SFZ',180,'Envelope Filter',145,'Bolin']
        break;
        
        case 'haz':
        models = [400,'Mu-Tron']
        break;
        
        case 'headrush':
        case 'head rush':
        models = [450,'Gig-board']
        break;
        
        case 'heavy electronics':
        case 'heavy':
        models = [70,'Descend']
        break;
        
        case 'henretta engineering':
        case 'henretta':
        models = [120,'H-Bomb','Planetarium',140,'Tremble-Tank',80,'Orange-Whip','Crimson','Prince',70,'Golden Years']
        break;
        
        case 'hexe':
        models = [300,'Bitcrusher',350,'Revolver',450,'Sound Cartridge']
        break;
        
        case 'hilbish design':
        case 'hilbish':
        models = [250,'Invictus',200,'Pessimiser']
        break;
        
        case 'hologram electronics':
        case 'hologram':
        models = [300,'Dream-Sequence','Infinite-Jets',400,'Microcosm']
        break;
        
        case 'homebrew electronics':
        case 'home brew electronics':
        case 'hbe':
        case 'h.b.e.':
        models = [110,'Power Screamer']
        break;
        
        case 'horizon devices':
        case 'horizon':
        models = [180,'Precision Drive',280,'Apex',120,'Nano',175,'Flux']
        break;
        
        case 'hot chili tube company':
        case 'hot chili':
        models = [300,'Tubester']
        break;
        
        case 'hotone':
        models = [350,'TMP-100',250,'Ampero',90,'Binary-IR']
        break;
        
        case 'hovercraft amps':
        case 'hovercraft':
        models = [160,'Laguna']
        
        case 'hudson electronics':
        case 'hudson':
        models = [200,'Sidecar',250,'Broadcast']
        break;
        
        case 'hughes & kettner':
        case 'hughes&kettner':
        case 'hughes & ketner':
        case 'hughes&ketner':
        case 'hughes and kettner':
        models = [180,'Tube-man',220,'Replex',400,'Rotosphere II',275,'Rotosphere',160,'Tube-Factor',100,'Warp-Factor']
        break;
        
        case 'hungry robot':
        case 'hungryrobot':
        models = [180,'Wash','Star-gazer',160,'Moby',120,'Little Gazer',175,'Borderland',320,'Wardenclyffe Deluxe']
        break;
        
        case 'ibanez':
        models = [300,'JL-70','Jetlyzer',190,'AD-80',200,'PQ-401',80,'TS9DX',90,'TS9-B',100,'AD-99',135,'Airplane',250,'TS-808HW','TS-808 HW','TS-808-HW','Jemini',110,'PH-99','Classic Phase','FL-9',180,'TS-808DX',200,'TS-808 Keeley','Tube Screamer Keeley','Keeley',60,'Tube Screamer Mini','Mini Tube','TS-808 Mini','Mini TS-808','TS-9','CF-7',110,'TS-808','ES-2','PT-9',275,'TS-10',1000,'TSV-808',125,'Nu Tube',110,'AD-9','CS-9',215,'Flying Pan',80,'CSMini','Mini Chorus','Chorus Mini',50,'SM-7']
        break;
        
        case 'idiotbox effects':
        case 'idiotbox':
        case 'idiot box':
        models = [100,'Dungeon-Master','Mad Doctor','Han-Taun','Whores',120,'Orange Cycle',95,'Cool Buzz',150,'Moon']
        break;
        
        case 'industrialectric':
        models = [175,'Actuator','OD-187',275,'Echo','RM-1N',750,'Incinerator Deluxe',200,'Tremolo','Generator','7446',500,'4046-M',175,'Incinerator']
        break;
        
        case 'iron ether':
        models = [200,'Frantabit','Subterranea','Xerograph Deluxe',175,'Oxide',190,'Divaricator']
        break;
        
        case 'isp technologies':
        case 'isp':
        models = [160,"G-String",80,"Decimator-II","Decimator-2",80,"Decimator X","Deci-Mate",65,"Decimator",800,'Theta-Pro',250,'Beta','Theta']
        break;
        
        case 'jackson audio':
        case 'jackson':
        case 'jackson amp works':
        case 'jackson ampworks':
        models = [175,'Prism',275,'Guapo',200,'Arrow',140,'Blossom',250,'Modular Fuzz','Asabi',140,'Belle',235,'Bloom',240,'Golden',110,'Amp Mode']
        break;
        
        case 'jacques':
        models = [100,'Trinity']
        break;
        
        case 'jam pedals':
        case 'jam':
        models = [140,'Ripple',275,'Ripply Fall',200,'Lucy-dreamer Supreme','Double-dreamer',300,'Llama-Xtreme',180,'Big Chill',150,'Chill','Tube-Dreamer','Eureka',200,'Waterfall',180,'Llama','Lucy-dreamer',175,'Rattler',225,'Monk',900,'Flow']
        break;
        
        case 'janglebox':
        case 'jangle box':
        models = [170,'J-Gate',150,'Compress','JB-Nano','J-Boost',200,'Byrds',225,'JB-3']
        break;
        
        case 'jerms':
        models = [275,'Super Jets']
        break;
        
        case 'jetter':
        models = [160,'Train-drive',130,'Red Shift',170,'Altair','Dharma',110,'Helium','Gain Stage Blue',120,'GS-124','Gain Stage Red','Gain Stage Purple','Monster',140,'Gold Standard',150,'Red Square','Red-2','Jet-Drive','Zap','45/100',130,'Grissom','Vibe','BR-1200',100,'Indigo','GS-103','GS-68','Tritium']
        break;
        
        case 'jext telez':
        models = [200,'Range Lord','Drone',170,'Jext-Face 2',180,'Canyon',425,'White',150,'Uni-Drive',250,'Dizzy']
        break;
        
        case 'jhs':
        models = [140,'Timmons','@','Spring-Tank','Kodiak',230,'Sweet Tea v3','Ruby','Butch',80,'3 Series',160,'Muffuletta','Bonsai','Bansai','Banzai','Morning Glory','Panther Cub','Kilt',100,'Alpine','Pollinator','Moonshine','Tidewater',180,'VCR','Pink-Panther','Sweet Tea v2',175,'Unicorn',150,'Emperor','mk-iii','Bender',110,"Haunting Mids",'Super-Bolt','Twin Twelve','Twin 12',300,'Colour-Box','Color-Box',200,'Calhoun','Double-Barrel',160,'Sweet Tea v1','Gilbert','PG-14','Space',130,'Angry Charlie',135,'Milk-man',80,'Foot','Prestige',120,'Charlie Brown',250,'State-line','Steak',145,'Cheese',100,'Whitey',155,'Lucky',250,'Panther']
        break;
        
        case 'joe gore':
        case 'gore':
        models = [215,'Filth',130,'Duh']
        break;
        
        case 'joyo':
        models = [125,'PXL',65,'Atmosphere']
        break;
        
        case 'jptr fx':
        case 'jptr':
        models = [175,'Super Weirdo',130,'Wolf',150,'Fernweh']
        break;
        
        case 'kartakou':
        case 'kartakou amplification':
        models = 275,'Beast'
        break;
        
        case 'keeley':
        case 'robert keeley':
        case 'keely':
        case 'robert keely':
        models = [140,'Retro','Katana Blues','Blues Drive Katana',180,'D&M','Tesla',250,'Mesmer',115,'Memphis',120,'GC-2','El-Rey','Dorado','White Sands','Neutrino','Stahlhammer','1962',60,'Mini Katana','Katana Mini',250,'Fuzz-Head 44','Fuzzhead-44',125,'Oxblood','DDR',225,'Tone Work-station','Dark-Side','Super-Mod','GEX2',190,'Eccos',210,'Framptone',215,'Monterey','Monterrey',80,'Compressor',110,'Abbey','Filaments','Dyno My Roto','Hooke','Dyna-Trem','Sea-foam','Fuzz-Bender','DS-9',80,'Red Dirt Mini',300,'Katana',90,'Fuzz-Head','Nova-Wah','Recino',100,'Magnetic Echo','Mag-echo','Psi','Verb','Phat','Rotten Apple','Sfocato',130,'Bubble-tron','Caverns','30-ms','Synth-1',150,'KE-808','Echoes','Aria',180,'Java','Delay Work-Station',110,'Red Dirt','DS-9','Vibe-o-verb'];
        break;
        
        case 'keith mcmillen instruments':
        case 'keith mcmillen':
        case 'keith mcmillan instruments':
        case 'keith mcmillan':
        models = [275,'Softstep-2']
        break;
        
        case 'kendrick':
        models = [215,'Buffalo']
        break;
        
        case 'khdk':
        case 'khdk electronics':
        models = [115,'Ghoul Jr','Ghoul Jr.','Ghoul Screamer Jr',400,'Ascendancy',100,'No.-1','#1',200,'Unicorn Blood II','Unicorn Blood 2',500,'Unicorn Blood',130,'Ghoul Screamer',500,'Sargent D','Sgt-D','Sgt.-D'];
        break;
        
        case 'king tone':
        case 'king tone guitar':
        models = [300,'Octaland','Duellist','Duelist',325,'Vintage Fuzz',250,'Mini-fuzz',290,'Blues-power',200,'Soloist','Rise',475,'Vibe','1968']
        break;
        
        case 'kingsley':
        models = [475,'Jester',600,'Constable',450,'Minstrel','Page','Squire',400,'Harlot','Bard',400,'Serf',550,'Maiden','Jouster',125,'Lift',525,'Juggler',350,'Peasant']
        break;
        
        case 'klirrtron':
        models = [225,'Goat']
        break;
        
        case 'klon':
        models = [700,'KTR']
        break;
        
        case 'kma audio machines':
        case 'kma':
        models = [175,'Logan','Astrospurt','Bear','Wurm','Moai','Cirrus','Stag','Strokkur',200,'Tyler',130,'Queequeg',250,'Horizont','Horizon',160,'Minos',90,'Belfry','Buffer',70,'Sam']
        break;
        
        case 'koll':
        models = [150,'High-Rise']
        break;
        
        case 'korg':
        models = [400,'SDD-3000',450,'Miku',350,'Nuvibe',550,'X-911',110,'AX3A',40,'Pitch-black',80,'PX-4D',50,'PX-4',250,'G-5']
        break;
        
        case 'kr musical products':
        case 'kr':
        models = [600,'Mega-vibe',450,'Fuzzoid',325,'Fuzz']
        break;
        
        case 'landmine':
        case 'land mine':
        models = [160,'Distortion'];
        break;
        
        case 'laney':
        case 'laney black country customs':
        models = [160,'Iron-heart','Iommi','Secret',130,'Steel','Monolith',175,'Iron-Heart']
        break;
        
        case 'lao wiz':
        models = [300,'Shit Data']
        break;
        
        case 'lastgasp art laboratories':
        case 'lastgasp':
        models = [200,'Transroom','Toxic Plant','Sooper','Tone Axe','Sick Pitch King Jr.',160,'Sand-storm',225,'Cave',140,'Flik','Octavella',130,'Angel']
        break;
        
        case 'lehle':
        models = [100,'Sunday Driver',160,'D-Loop','D.Loop',150,'Dual','Duel','Parallel','Julian','Basswitch',350,'Acouswitch',175,'1at3','3at1','1@3','3@1','Sgos',100,'P-Split',70,'Little Lehle']
        break;
        
        case 'line 6':
        case 'line6':
        models = [110,'MM-4',90,'Bass Pod',130,'POD X-T Live',825,'Helix LT',475,'HX-Stomp','Helix Stomp',450,'POD GO',400,'HX',225,'M-13','FM-4','Firehawk FX',100,'M5','Liqua-Flange','AM-4',85,'POD XT',140,'DL-4',150,'HD-500X','HD500-X','HD 500-X','FX-100',180,'M9',150,'JM-4',1100,'Helix',200,'Filter Pro',60,'Verbzilla']
        break;
        
        case 'lone wolf audio':
        case 'lone wolf':
        models = [140,'Iron Fist',250,'Left-Hand Wrath Deluxe','Full-Nelson',175,'Left-Hand Wrath','Necronomicon',190,'Blockade',180,'Djerkoff','Short-Circuit',110,'Outsider',120,'Insider',100,'Dictator','Back-hand','Slam-Pig',90,'Bulldozer',160,'Overdose','Troll-Slayer','VHS','Caveman',150,'Plague-Rat','Upside','Grim Reaper','Nirvana','LWA',135,'Good Night Alt-Right',200,'Black Goat','Black Shakes','LWA-120',225,'Hypnotic',140,'Black Mesa',125,'Cyber-demon',200,'Door-Stop']
        break;
        
        case 'longamp':
        models = [200,'Roxanne',150,'Catalyst',375,'Kloxanne']
        break;
        
        case 'lovepedal':
        case 'hermida':
        case 'hermida audio':
        case 'alfonso hermida':
        models = [140,'China',100,'Echophonic','Woodrow','Gen-5','Gen Five','Beard',125,'Black Magik Zendrive','Zendrive Black Magik','Black Magic Zendrive','Zendrive Black Magik',180,'COT/Eternity','Stack',275,'Dover',125,'Amp-11','Amp Eleven',120,'Bone-Tender','Monkey Fist',175,'SRV','Stevie','Purple Plexi Plus Boost','Purple Plexi + Boost','Purple Plexi+Boost','Purple Plexi Plus','Purple Plexi +','White Dragon','Eternity Handwired','Eternity Burst Handwired','Handwired Eternity',180,'Purple Plexi',150,'Organic',140,'Vintage-Modern',120,'Eternity Burst',110,'COT-50','Kanji','Mississippi Tchula','Rotary Reverb','Chicken',50,'Elephant',70,'Valve',215,'Tchula',150,'Believe','Octave Planet',175,'Englishman','Englishwoman','200',250,'Zen Zen','Zen Squared','Box of Awesome','Reverb-Deluxe',140,'Les-Lius','Les-Luis',90,'DL-1','Delay','Blue Wave','EPH-3',130,'Bull-nose','Jubilee Plus','Jubilee-+',100,'Zendrive','Pickle',120,'Death of',85,'OD-11','OD-Eleven']
        break;
        
        case 'lovetone':
        case 'love tone':
        models = [550,'Doppelganger','Doppleganger',600,'Meat-Ball',1200,'Cheese Source',650,'Big Cheese',600,'Brown Source']
        break;
        
        case 'l.r. baggs':
        case 'lr baggs':
        case 'lrbaggs':
        case 'lr. baggs':
        models = [210,'Venue',150,'Stadium Bass',140,'Align Session','Session Align',175,'Session',115,'Align Active','Align D.I.','Align DI','Align Eq',125,'Align Reverb',130,'Align Delay',100,'Para Acoustic']
        break;
        
        case 'lunastone':
        models = [75,'Red Fuzz',80,'True Overdrive','Blue Drive',130,'Big Fella',100,'Wise Guy','Smooth Drive']
        break;
        
        case 'mad professor':
        models = [240,'Snow White Bass',150,'Snow White Auto-Wah',110,'Royal Blue',100,'Sweet Honey','1','Ruby Red',80,'Blueberry Bass',90,'Stone Grey','Stone Gray','Golden Cello','Mighty Red',120,'Simble',185,'Loud',165,'Twimble','Kosmos',200,'Supreme',130,'Amber',225,'Double-Moon',100,'Little Green',130,'Silver Spring',180,'Super-Black']
        break;
        
        case 'magnetic effects':
        models = [100,'Zola',130,'Solar-Bender']
        break;
        
        case 'maestro':
        models = [200,'BG-2','Boomerang',275,'SS-2','Phaser','Phasor',350,'MPF-1','Parametric Filter','FZ-1A',400,'Fuzz Phazzer','Fuzz Phazer']
        break;
        
        case 'magnetic effects':
        case 'magnetic':
        models = [120,'Midphoria']
        break;
        
        case 'make sounds loudly':
        models = [120,'Phasor','MSLP',130,'Parallel Bass','Super-bass']
        break;
        
        case 'maestro':
        models = [1600,'EP-2','Echoplex',250,'SS-2','Sustainer',200,'Boomerang','FZ-1A Reissue',250,'Stage Phaser','MP-1',290,'MPF-1',300,'FZ-1A','PS-1B']
        
        case 'malekko':
		models = [190,'B:-Assmaster','B-assmaster',140,'Omicron Vibrato','Vibrato Omicron']
		break;
		
		case 'mantic effects':
		case 'mantic':
		models = [200,'Beef']
		break;
		
		case 'markbass':
		models = [150,'Compressore']
		break;
		
		case 'marshall':
		models = [750,'Bluesbreaker mk-1','Blues Breaker mk-1',60,'EH-1',130,'Drive-Master']
		break;
		
		case 'masf pedals':
		case 'masf':
		models = [120,'Paranoid']
		break;
		
		case 'masotti':
		case 'masotti guitar devices':
		models = [160,'OD']
		break;
		
		case 'mastro valvola':
		case 'mastro':
		models = [175,'Smog']
		break;
		
		case 'matthews effects':
		case 'matthews':
		models = [50,'Transmutation','Splitter',100,'Ghoul',135,'Architect',150,'Cosmonaut','Chemist',120,'Whaler',110,'Conductor',100,'Harbinger',90,'Pocket',160,'Astronomer','Engineer',120,'Cartographer']
		break;
		
		case 'mattoverse electronics':
		case 'mattoverse':
		models = [90,'Drive',120,'Swell Delay',140,'Swell Echo']
		break;
		
		case 'maxon':
		models = [100,'OD-808',190,'AD-80',80,'OD-9 Pro Plus','OD-9 Pro+',130,'CS-9',110,'SD-9',275,'Apex 808',95,'FL-301',190,'AD-9',225,'TOD-9']
		break;
		
		case 'mccaffrey audio':
		case 'mccaffrey':
		models = [150,'Rabbit']
		break;
		
		case 'mcspunkle effects':
		case 'mcspunkle':
		models = [265,'Gnomeratron','Gnometron']
		break;
		
		case 'menatone':
		models = [175,'King of the Britains','King of the Brittons','KOTB','Pig',110,'Thundering','Mini Red','Snapper Mini',150,'Blue Collar','King',120,'Law-Bender','Law',135,'Pork-Bender','Dumb',100,'J.A.C.','JAC','Das Boost',180,'Working-mans','Working-man\'s','Top-Boost',275,'Howie',200,'Fish','Snapper',120,'Mail-Bomb','Foxy',130,'Menawatt','Wreck']
        break;
        
        case 'meris':
        models = [250,'Enzo',270,'Mercury-7',260,'Polymoon','Ottobit','Hedra']
        break;
        
        case 'mesa boogie':
        case 'mesaboogie':
        models = [110,'Tone-Burst','High-Wire',100,'Grid',250,'Subway','Throttle-Box EQ',150,'Throttle','Five-Band',175,'Gold-mine',300,'V-Twin',250,'Rosette','Flux-Five','Flux-5',200,'Switch-Track',80,'Stow-away',100,'Flux']
        break;
        
        case 'metasonix':
        models = [700,'TM-1 SE','TM-1SE']
        break;
        
        case 'mfos':
        case 'music from outer space':
        models = [225,'Weird','WSG']
        break;
        
        case 'mi audio':
        case 'mi effects':
        models = [150,'Tube-Zone',50,'Buff',85,'Crunch',80,'Blue-Boy Deluxe']
        break;
        
        case 'midnight amplification':
        case 'midnight':
        models = [150,'Holy Mountain']
        break;
        
        case 'milkman':
        models = [220,'F-Stop']
        break;
        
        case 'mission engineering':
        case 'mission':
        models = [110,'SP-1']
        break;
        
        case 'mjm':
        case 'mjm guitar fx':
        case 'mjm guitarfx':
        case 'mjm guitar':
        models = [300,'Vibe']
        break;
        
        case 'mojo hand':
        case 'mojohand':
        case 'mojo hand fx':
        case 'mojohand fx':
        models = [110,'Iron-Bell','Colossus',150,'Wonder-Filter',90,'Nebula Redux','Mule','Mirror',95,'Recoil','Cross-town',80,'Nebula-IV',135,'Buzzaround','Rook Royale',100,'Magpie','Rook',85,'Socrates',130,'Pompeii','Villanova',120,'Magistrate',115,'Speakeasy']
        break;
        
        case 'montreal assembly':
        models = [300,'Count to 5','Count to Five','Ct5',300,'Purpll','856',110,"You're and Your","Your and You're","You're & Your","Your & You're"]
        break;
        
        case 'mooer':
        models = [180,'Truck',215,'Ocean',65,'Tone Capture',90,'Radar',250,'GE-200',60,'Tender Octaver mk-ii','Tender Octaver mk-2','Drummer']
        break;
        
        case 'moog':
        models = [450,'MIDI MURF','MF-105M',225,'MF Trem','Minifooger Trem','MF Ring','Minifooger Ring',250,'MF Drive','Minifooger Drive',400,'MURF','Freqbox','Freq Box','MF-107','MF-105B',190,'MF Flange','Minifooger Flange',90,'MF Boost','Minifooger Boost',350,'MF Delay','Minifooger Delay',300,'Ring Modulator','MF-102',350,'Low-Pass Filter','MF-101',800,'MF-108M','Cluster-flux','MF-104Z',1350,'MF-104M',250,'MF Chorus','Minifooger Chorus',500,'CP-251','MF-103','12-Stage Phaser']
        break;
        
        case 'morgan amplification':
        case 'morgan':
        models = [140,'NKT-275']
        break;
        
        case 'morley':
        models = [80,'Bad Horsie',100,'20/20']
        break;
        
        case 'mosrite':
        models = [400,'Fuzz-rite']
        break;
        
        case 'mr black':
		case 'mr. black':
		models = [80,'Mini Tremolo','Mini-Trem','BB-74x',150,'Tunnel-worm',170,'Blood & Chrome','Blood&Chrome','Blood and Chrome',100,'Eterna','Vintage Chorus',120,'Ambience','Deluxe-Plus',140,'Electronic Instrument Pre-Amp',"Shepard's End","Shepherd's End",'Shepards End','Shepherds End',110,'Downward Spiral','JDS-50',85,'Big Payback',200,'ma-Trem','Tapex','Supermoon Eclipse','Vintage Ensemble','Twin',130,'Super-moon','Fwonk-beta',150,'Gilamonodo','Blood-moon']
		break;
		
		case 'mu-tron':
		case 'mutron':
		case 'mu tron':
		case 'musitronics':
		models = [500,'Bi-Phase II','Bi-Phase 2','Bi-Phase Reissue',1700,'Bi-Phase',400,'Octave Divider','Micro-Tron III','Micro-Tron 3',160,'Tubetron',1500,'Flanger',300,'Micro V','Phasor','Phaser',275,'Octavider',225,'Boostron II',250,'Micro-tron IV','Micro-tron 4',400,'Phasor II','Phasor 2']
		break;
		
		case 'multivox':
		case 'big jam':
		case 'multivox big jam':
		case 'firstman':
		models = [200,'Bi-phase',100,'SE-3','Compressor',120,'Tonelab-ST',300,'Stereo Rotary Effect',140,'Valvenergy']
		break;
		
		case 'mxr':
		models = [150,'Carbon Copy Deluxe','Dookie',60,'Noise Clamp',130,'M83','Bass Chorus Deluxe',70,'M60','M234','Analog Chorus',60,'Full-bore Metal','M-116',120,'Copy Mini','Mini Carbon','117-R',40,'Prime',140,'Talk-Box',90,'Carbon Copy','Uni-Vibe','M-238','Fuzz-Face','Bass Octave','Diavolo','Octavio',150,'5150 Overdrive',70,'Raijin','GT-OD',30,'Badass',80,'Band','Sugar','Gate','Dawg',60,'Brick',50,'Blue-Box','Micro-Amp','Distortion','Double-Double','M-102','Dyna-Comp',150,'EVH Flanger',60,'Analog Chorus','Phase 90',70,'Micro Chorus','Micro Flanger',130,'M-300','Reverb','Flanger',70,'Phase 95','Dyna Comp Mini','Mini Dyna','Custom Comp Deluxe','CSP-204',100,'Bass Envelope Filter','Brown Acid','Thump','Timmy','Slash','Octave Fuzz',110,'Bass Envelope','Studio Compressor','Bass Preamp','Clone','Sub-Machine','La-Machine',50,'M-104','Distortion']
		break;
		
		case 'mythos':
		case 'mythos pedals':
		models = [70,'Cestus',100,'Argonaut',140,'Chupacabra','Herculean','Mjolnir','Argo',200,'Olympus','Lark',100,'Fleece',250,'SusMaryOsep']
		break;
		
		case 'native audio':
		case 'native':
		models = [160,'Ghost']
		break;
        
        case 'neo instruments':
        case 'neo':
        models = [300,'Mini Ventilator II','Mini Ventilator 2','Mini Vent II','Mini Vent 2',325,'Ventilator II','Ventilator 2']
        break;
    
    
        case 'neunaber':
        case 'neunaber audio':
        models = [150,'Wet','Immerse','Seraphim','Iconoclast','Echelon',375,'Illumine',160,'Chroma',175,'Inspire',180,'Slate',200,'Neuron']
        break;
        
        case 'nobels':
        models = [60,'ODR-1 Mini','Mini ODR-1',90,'ODR-1',70,'Pre']
        break;
        
        case 'nocturne':
        case 'nocturne pedals':
        models = [200,'Atomic Brain','Ubangi','Jr. Barnyard',190,'Brain Seltzer',150,'Detroit Casket','Bass-Brain',175,'Dyno-Brain',225,'Pescadoro']
        break;
        
        case 'noel':
        models = [300,'Cornet']
        break;
        
        case 'noise diet':
        case 'noisediet':
        models = [225,'Bit-Grinder']
        break;
            
        case 'noisemaker effects':
        case 'noisemaker':
        models = [90,'Nebula']
        break;
        
        case 'nux':
        models = [60,'Time-Core',200,'Cerebus']
        break;
        
        case 'oddfellow':
        case 'odd fellow':
        models = [100,'Caveman']
        break;
        
        case 'old blood noise endeavors':
        case 'old blood':
        case 'obne':
        models = [140,'Reflector',155,'Black Fountain',160,'Visitor','Dark Star','Excess',85,'Head-phone',200,'Minim',135,'Procession','Fault',100,'Blender',170,'Dweller','Sunlight',260,'Rever',250,'Maw']
        break;
        
        case 'one control':
        models = [400,'Crocodile Tail',130,'Mosquite','Mosquito','Iguana',120,'Blender',90,'Purple Plexifier',80,'Lemon',180,'Chamaeleo',150,'Basilisk']
        break;
        
        case 'oohlala':
        models = [275,'Disaster']
        break;
        
        case 'orange':
        models = [250,'Bangeetar','Bax',155,'Terror',120,'Coat']
        break;
        
        case 'origin effects':
        case 'origin':
        case 'cali 76':
        models = [275,'SlideRIG Compact Deluxe Mk-2','SlideRIG Compact Deluxe Mk-ii',200,'SlideRIG Compact Compressor',250,'SlideRIG Compact Deluxe',425,'SlideRIG Compressor',195,'Cali-76 Compact Compressor',325,'Revival-Drive Compact',275,'Compact Deluxe Compressor','Compact Bass Compressor',700,'Limiting Amplifier','Cali76-TX-L','Cali76-STD',500,'Cali76-TX FET',1000,'Cali76-G','Cali76-TX-P',525,'Revival-Drive Custom',450,'Revival-Drive',350,'Revival-Trem']
        break;
        
        case 'ortega':
        case 'ortega guitars':
        models = [160,'Horse-Kick Pro',100,'Horse-Kick']
        break;
        
        case 'oto machines':
        case 'oto':
        models = [500,'Boum',475,'BIM']
        break;
        
        case 'panda audio':
        models = [400,'Future Impact']
        break;
        
        case 'paul cochrane':
        case 'p. cochrane':
        case 'p cochrane':
        case 'cochrane':
        case 'paul c.':
        case 'paul c':
        case 'paul c. audio':
        case 'paul c audio':
        models = [250,'Timmy',350,'Tim']
        break;
        
        case 'paul trombetta':
        case 'trombetta':
        models = [600,'Rotobone',700,'1.8',450,'Mini-bone']
        break;
        
        case 'pedal pawn':
        models = [225,'Fuzz','Texas',500,'Gypsy']
        break;
        
        case 'pedalpalfx':
        case 'pedalpal fx':
        case 'pedalpal':
        case 'pedal pal':
        models = [150,'959',300,'800',180,'034']
        break;
        
        case 'pefftronics':
        models = [750,'Rand']
        break;
        
        case 'pete cornish':
        case 'cornish':
        models = [350,'LD-3',600,'CC-1','ABC',500,'P-2','ST-2','SS-3','SS-2',400,'TB-83',450,'OC-1','NB-3',550,'G-2']
        break;
        
        case 'peterson':
        models = [100,'VS-II','VS-2']
        break;
        
        case 'pettyjohn':
        case 'petty john':
        case 'pettyjohn electronics':
        case 'petty john electronics':
        models = [225,'Chime v2','Chime mkii',145,'Edge',190,'Shift',125,'Gold',170,'Deluxe',200,'Pre-Drive',250,'Crush','Iron & Chime','Iron&Chime','Iron and Chime',175,'Petty-Drive',130,'Chime',140,'Iron',150,'Fuze','Fuse','Lift','Rail',160,'Filter','ROUS']
        break;
        
        case 'pigdog pedals':
        case 'pigdog':
        case 'pig dog pedals':
        case 'pig dog':
        models = [400,'Vulture']
        break;
        
        case 'pigtronix':
        models = [140,'Tremvelope',150,'Real Deal','Ringmaster','Philosopher King','Fat Philosopher','Infinity 2','Infinity Looper 2',175,'Key-Master',60,'Poly-Saturator','Disnortion',80,'Philosopher Bass','Octava',85,"Philosopher's Tone",160,'Echolution-2 Deluxe','Deluxe Echolution','Echolution Deluxe',100,'Echolution-2',180,"D'Angelico",'Rototron',160,'Mother-ship 2','Mother-ship2',225,'Mothership',90,'Octavia Micro',170,'Envelope Phaser','EP-2',300,'Infinity',125,'Resotron',120,'Space-Rip']
        break;
                
        case 'pladask elektrisk':
        case 'pladask':
        models = [400,'Fabrikat','Bakfram',300,'Tåken','Taken','Baklengs',250,'Romferd',350,'Matrisse','Draume',140,'Kniv']
        break;
        
        case 'plum crazy fx':
        case 'plum crazy':
        models = [125,'Si-Clops','Fuzzy Lady','Boar',140,'HMFIC','H.M.F.I.C.',200,'Squawk',150,'KHNUM','K.H.N.U.M.']
        break;
        
        case 'poly effects':
        case 'poly':
        models = [375,'Digit']
        break;
        
        case 'port city':
        models = [90,'Salem','Sahana']
        break;
        
        case 'positive grid':
        case 'positivegrid':
        models = [170,'Distortion Pro','Pro Distortion',160,'Modulation Pro','Pro Modulation','Mod Pro','Pro Mod',600,'Bias Rack']
        break;
        
        case 'prescription electronics':
        case 'prescription':
        case 'perscription electronics':
        case 'perscription':
        models = [200,'C.O.B.','COB','Clean Octave Blend',300,'Experience',180,'Germ',200,'Yard-box',325,'Vibe-Unit',160,'Dual-Tone',225,'Over-driver']
        break;
        
        case 'proanalog devices':
        case 'proanalog':
        case 'pro analog devices':
        case 'pro analog':
        models = [140,'Manticore']
        break;
        
        case 'proco':
        case 'pro co':
        models = [150,'Deucetone-Rat',200,'Juggernaut',60,'Lil-Rat']
        break;
        
        case 'pro tone pedals':
        case 'protone pedals':
        case 'pro tone':
        case 'protone':
        models = [140,'Misha',120,'Civil',140,'PE Delay+',125,'Phase Shift',100,'Dead']
        break;
        
        case 'providence':
        models = [250,'SOV-1',200,'Chrono',100,'SOV-2','Velvet','VLC-1',150,'Silky','Anadime',75,'P-4TB','Final Booster','FBT-1',80,'SDR-5',110,'Phase','PHF-1','Red Rock','ROD-1',180,'Dual Bass','Duel Bass',130,'Stampede DT','SDT-2',160,'Brick','BT-1','BTI-1',400,'Delay 80',90,'Heat',140,'Flame',100,'Bass Boot','BTC-1']
        break;
        
        case 'quiet theory':
        models = [275,'Prelude']
        break;
        
        case 'quinnamp':
        case 'quinn amp':
        case 'quinnamps':
        case 'quinn amps':
        models = [185,'Hot Buttered Scotch']
        break;
        
        case 'radial':
        models = [80,'JX-2','Switch-bond','London',100,'Bass-bone',50,'Big-shot','Tone-bone Classic',175,'Head-bone VT',120,'PZ-Deluxe','Deluxe-PZ',140,'Plexi-tube']
        break;
        
        case 'ramble fx':
        case 'ramblefx':
        models = [100,'Marvel']
        break;
        
        case 'real mccoy':
        case 'mccoy':
        models = [175,'RMC-6','RMC-4',180,'Wizard']
        break;
        
        case 'recovery effects':
        case 'recovery':
        models = [125,'Phantom',135,'Comrade',160,'Destruction','Cutting','Olympus',100,'Grizzled']
        break;
        
        case 'red panda':
        case 'redpanda':
        models = [185,'Bit-crusher',230,'Tensor',250,'Particle 2',215,'Particle',160,'Context',200,'Raster']
        break;
        
        case 'red sun fx':
        case 'red sun':
        case 'redsun':
        models = [160,'White Fuzz']
        break;
        
        case 'red witch':
        case 'redwitch':
        models = [150,'Medusa',125,'Moon Phaser',140,'Deluxe Moon','Empress',110,'Pentavocal',120,'Fuzz-God','Titan',175,'Synthotron',90,'Famulus',190,'Factotum','Zeus',180,'Binary']
        break;
        
        case 'retroman':
        case 'retro man':
        models = [200,'Sybil']
        break;
        
        case 'retro mechanical labs':
        case 'rml':
        models = [200,'Electron']
        break;
        
        case 'retrospec':
        models = [400,'Squeeze']
        break;
        
        case 'revv':
        models = [150,'G-2',175,'G-3',190,'G-4']
        break;
        
        case 'rick gram studios':
        case 'rick gram':
        models = [125,'Woman']
        break;
        
        case 'rimrock effects':
        case 'rimrock':
        models = [140,'Mythical']
        break;
        
        case 'rivera':
        models = [150,'Acoustic-Shaman','Blues-Shaman',175,'Double-Shaman','Sustain-Shaman','Chorus',300,'RM-1','Routemeister']
        break;
        
        case 'rjm':
        case 'rjm effects':
        models = [850,'Mastermind PBC-10','Master-Mind PBC 10','Master-Mind PBC-10',100,'Green Vodka',150,'Mastermind MIDI',525,'Effect Gizmo']
        
        case 'rml':
        models = [180,'Electron']
        break;
        
        case 'rockbox':
        case 'rock box':
        models = [120,'Matador',100,'Red Dog',125,'Boiling']
        break;
        
        case 'rockett':
        case 'j. rockett':
        case 'j rockett':
        case 'rocket':
        case 'j. rocket':
        case 'j rocket':
        models = [160,'Rockaway',400,'Afterburner',140,'Ikon',110,'Archer','Alien','Broverdrive',135,'Trapp','GTO',150,'Led Boots',130,'Dude','WTF','Melody',100,'Smith','Flex',90,'Boing','Lemon',140,'I.Q.',170,'Pierce',125,'Sampson','High-top','.45','Lenny','Animal',120,'Blue Note','Tranquilizer',190,'Holdsworth']
        break;
        
        case 'rocktron':
        models = [50,'Tsunami']
        break;
        
        case 'rodenberg':
        case 'rodenberg amplification':
        case 'rodenberg custom amplification':
        models = [170,'GAS-808B',350,'GAS-789B',225,'Commander','GAS-707B',200,'728B',275,'GAS-828',185,'TB Drive','Shakedown',160,'LDP']
        break;
        
        case 'roger mayer':
        models = [150,'Voodoo-1 TC',200,'Mongoose Rocket','Rocket Mongoose',150,'Mongoose TC','TC Mongoose']
        break;
        
        case 'ross':
        models = [150,'Flanger',200,'Phaser Distortion','Phase Distortion',175,'D/P']
        break;
        
        case 'rothwell':
        models = [110,'Squeeze']
        break;
        
        case 'ryra':
        case 'rock your repaired amp':
        models = [150,'Klone']
        break;
        
        case 's&k':
        case 's & k':
        models = [300,'Intronaut']
        break;
        
        case 'sadowsky':
        models = [190,'SBP-1','Pre-amp',140,'SBP-2']
        break;
        
        case 'sarno':
        models = [160,'Earth',200,'Black Box',170,'Solar']
        break;
        
        case 'seamoon':
        models = [160,'Funk Machine']
        break;
        
        case 'selah':
        models = [160,'Quartz']
        break;
        
        case 'seppuku fx':
        case 'seppuku':
        models = [250,'Memory Loss',400,'Water',275,'Kassette','Kassete',350,'Mind-Warp']
        break;
        
        case 'seymour duncan':
        models = [160,'Vapor-Trail Deluxe',120,'Vapor-Trail','Studio Bass',300,'Power-stage 170',100,'Vise',225,'Silver Lake',180,'Diamondhead','Polaron',115,'Forza',110,'Twin Tube Classic','805',175,'Palladium','Andromeda',135,'Catalina',40,'Tweak',90,'Killing Floor',70,'Shape-Shifter',275,'Dark Sun',60,'Double-Back',65,'Dirty Deed',75,'Twin Tube Mayhem',95,'Deja','Rica',60,'Power-Grid',200,'Mama Bear']
        break;
        
        case 'shift line':
        case 'shiftline':
        models = [120,'Astronaut',160,'Buzz',335,'Olympic MKIIIS']
        break;
        
        case 'shin-ei':
        case 'shin ei':
        models = [450,'Vibe 2',2300,'Uni-Vibe',750,'Vibe-Bro Honey',900,'Vibe-Bro']
        break;
        
        case "shin's music":
        models = [215,'Platinum']
        break;
        
        case 'sib':
        case 'sib electronics':
        models = [110,'Nick Nitro']
        break;
        
        case 'singular sound':
        models = [475,'Aeros',120,'Beat-buddy Mini 2',90,'Beat-buddy Mini',225,'Beat-buddy']
        break;
        
        case 'skreddy':
        case 'skreddy pedals':
        models = [300,'Mayonaise','Mayonnaise','Giant Meat Pie',130,'Top Fuel','Major',125,'Dynamic Mids',275,'Pink Flesh','Screw Driver Deluxe','Screwdriver Deluxe',150,'Hybrid','Cephalopod 2','Cephalopod II','Lunar',215,'Echo',180,'Pig Mine','Ernie',160,'General Pig','P-19','Lunar Module Mini Deluxe',100,'Rover',115,'Screwdriver','Screw Driver',275,'Mayo',140,'Lunar Module',175,'Little Miss Sunshine','Swirl',200,'1971']
        break;
        
        case 'smallsound/bigsound':
        case 'smallsound / bigsound':
        case 'small sound/big sound':
        case 'small sound / big sound':
        case 'ss/bs':
        models = [800,'Pretty Years',140,'Mini',160,'Team Awesome','Fuck','F*ck','F-ck',225,'Heck',200,'Buzz','4545',250,'Blargg']
        break;
        
        case 'snarling dogs':
        models = [350,'Spore',90,'Moan',140,'Bootzilla',100,'Bawl Buster']
        break;
        
        case 'snazzy fx':
        case 'snazzyfx':
        case 'snazzy':
        models = [250,'Flutter',275,'Mini-Ark',350,'Tracer']
        break;
        
        case 'solidgoldfx':
        case 'solidgold fx':
        case 'solid gold fx':
        case 'solidgold':
        case 'solid gold':
        models = [220,'NU-33','Vinyl',160,'Funkzilla',140,'Surf Rider III',135,'Zeta DLX',185,'Communication',130,'Rosie',125,'Sasori',240,'76-Plus','76-+',170,'Electro-Man mkii','Electro-man mk2','Apollo II','Apollo 2',180,'Spanish Castle','Beta-DLX',80,'Stutter',100,'Imperial','If 6','If Six','76',110,'Zeta','Electro-Man',200,'Oblivion',150,'Counter-Current','Athena','Funk-Like',90,'Nitro',110,'Beta']
        break;
        
        case 'solodallas':
        case 'solo dallas':
        models = [300,'TSR']
        break;
        
        case 'source audio':
        case 'source':
        models = [325,'Ventris',180,'True Spring','Reflex',100,'Programmable','Gemini',200,'EQ-2','C-4','Ultra-Wave',220,'Nemesis',125,'Soundblox Pro Multiwave Bass','Soundblox Pro Bass',140,'Soundblox Pro Multiwave Distortion',150,'Soundblox Pro Poly-Mod',80,'Soundblox Bass Multiwave',275,'Collider',160,'Spectrum',170,'Sole-man',110,'Mercury',120,'Vertigo']
        break;
        
        case 'southampton':
        models = [120,'Gear',175,'Utility']
        break;
        
        case 'spaceman effects':
        case 'spaceman':
        models = [250,'Sputnik-III','Sputnik-3',275,'Aurora',950,'Gemini-III','Gemini-3',575,'Voyager-I','Voyager-1',500,'Orion',175,'Apollo-VII','Apollo-7',425,'Aphelion',275,'Polaris',300,'Secret Mission X',650,'Secret Mission',225,'Nebula',165,'Saturn-VI','Saturn-6',1100,'Sputnik-II','Sputnik-2',700,'Sputnik',180,'Titan-II','Titan-2','Atlas-III','Atlas-3',200,'Saturn-V','Saturn-5',240,'Space-rocket',400,'WOW',250,'Gemini-IV','Gemini-4',250,'Mission Control',300,'Saturn-V','Saturn-5','Mercury-IV','Mercury-4',400,'Cosmic Call',200,'Delta-2','Delta-II']
        break;
        
        case 'spiral electric':
        case 'spiral':
        models = [200,'Brute']
        break;
        
        case 'steel panther shop':
        case 'steel panther':
        case 'satchel':
        case 'sp':
        models = [200,'B','P']
        break;
        
        case 'stomp under foot':
        case 'suf':
        models = [150,"Ram's Head",'Red-Army','Greasy-Creek',190,'Fuzz-Honey',120,'Green Russian','Civil War',140,'Tri-Muff','Pumpkin Pi','Astoria',130,'Violet Menace','Skinner',110,'Civil Unrest','Son of a Bee',85,'Hellephant','Serenity',100,'Sonic Warfare',135,'Mountain Goat',90,'Halo-Bender',175,'Alabaster',180,'Cosmonaut',115,'Rhinosaur']
        break;
        
        case 'stone deaf fx':
        case 'stone deaf':
        models = [120,'Warp-Drive','Trashy',130,'PDF-2',135,'Fig Fumb',150,'PDF-1',190,'Tremotron',100,'Noise',225,'Syncopy',95,'EP-1',125,'Kliptonite']
        break;
        
        case 'stonefly effects':
        case 'stonefly':
        models = [275,'Alien Sasquatch',300,'Stone Skull',295,'Switch-blade',225,'Grizzly','Grizly',200,'Werewolf']
        break;
                
        case 'strymon':
        models = [400,'Night-Sky',225,'Lex','River-side',310,'Zelzah',260,'Deco','Compadre',375,"Timeline",'Iridium',210,'Orbit',240,'El-Capistan','El-Capitan',200,'Zuma',100,'Ojai',350,'Mobius','Volante',425,'Big-Sky',240,'Blue-Sky','Sunset',140,'OB.1','OB-1',215,'Brigadier',250,'Flint',235,'DIG',75,'Multi-switch']
        break;
        
        case 'subdecay':
        case 'sub decay':
        models = [50,'Starlight Quantum',80,'Spring Theory','Liquid',225,'Prometheus DLX',150,'Prometheus','Quantum Quasar',100,'Starlight','Noise','F-Bomb',180,'Vitruvian','Quasar DLX',125,'Tomato',110,'Octasynth','Variac',130,'Proteus','Anamnesis',120,'Echo-box',140,'Antagonizer',125,'Vector']
        break;
        
        case 'suhr':
        models = [160,'Koko',90,'Shiba Drive Reloaded Mini',120,'Shiba','Riot','Jack-Rabbit','Koji',185,'Eclipse',225,'Alexa',300,'Reactive']
        break;
        
        case 'suncoast':
        models = [500,'BC-2','BC-3','HD-2',400,'B-500',475,'HD-2',150,'HD-1',80,'Lebel']
        break;
        
        case 'supro':
        models = [90,'Fuzz',175,'Trem',100,'Boost',130,'Drive']
        break;
        
        case 'surfy industries':
        case 'surfy':
        models = [300,'Surfy-bear']
        break;
        
        case 'sushi box':
        models = [175,'Sunnday','Sunday',110,'Particle',200,'Slampeg',300,'Deep']
        break;
        
        case 'svisound':
        case 'svi sound':
        models = [260,'Vibrozoid',110,'Retrozoid,',100,'Techno FA']
        break;
        
        case 'sweet sound':
        case 'sweet':
        models = [275,'Mojo-Vibe',300,'Ultra-Vibe II','Ultra-Vibe 2',80,'Mo-Faux']
        break;
        
        case 'swell pedals':
        case 'swell':
        models = [130,'G-TOD']
        break;
        
        case 't1m':
        models = [100,'Pearl']
        break;
        
        case 't-rex':
        case 't rex':
        case 't. rex':
        case 't.rex':
        case 'trex':
        models = [150,'Mudhoney-II','Mudhoney-2',180,'Spin Doctor-2','Spin Doctor-II','Spindoctor-2','Spindoctor-II',175,'Magnus',95,'Dr. Swamp',200,'Spin-Doctor',70,'Fuel Tank Junior','Fuel Tank Jr.','Comp-Nova',105,'Alberta II','Alberta 2',140,'Gristle King',60,'Tremster',70,'Neocomp',80,'Creamer','Shafter','Yellow Drive',50,'Nitros',110,'Fuel Tank Classic','Replay',130,'Moller',125,'Reptile','Mudhoney',40,'Vulture',150,'Quint','Room-Mate',45,'Tunemaster',90,'Twin Boost','Chameleon',180,'Replica']
        break;
        
        case 'talos':
        models = [100,'Ass-Bite']
        break;
        
        case 'tanabe.tv':
        case 'tanabe tv':
        case 'tanabe':
        models = [600,'Dumkudo Twin',400,'Dumkudo']
        break;
        
        case 'tc electronic':
        case 't.c. electronic':
        case 'tc electronics':
        case 't.c. electronics':
        models = [175,'Ditto X-4',190,'Hall of Fame 2 x4',140,'Ditto Jam X-4',70,'Flash-back Mini','Mini Flash-Back','Katana Mini','Mini Katana','Hyper-gravity Mini','Mini Hyper-gravity',60,'Corona Mini','Mini Corona','Mimiq Mini','Mini Mimiq',55,'Vortex Mini','Mini Vortex','Drip',35,'Spark Mini','Mini Spark',110,'Nova Reverb',125,'Nova Drive','NDR-1',300,'Dual Parametric',100,'Dreamscape',140,'Flashback X-4',175,'Triple Flashback','Nova System',110,'Ditto X-2','Hall of Fame 2','NDY-1',150,'Alter Ego X-4',160,'Spectra-Drive',60,'Bodyrez','Shaker','Ditto','Polytune Mini',65,'Mini Sub','Up Mini',70,'Vortex','Spark',90,'Sub','Flashback','Trinity',125,'ND-1','Nova Delay',80,'Mimiq','Polytune 3','Sentry','Hall of Fame','Arena','Corona','Hyper-gravity',40,'Wiretap',150,'Alter-Ego X4',120,'Brainwaves','Alter-Ego',200,'Stereo Chorus',50,'Force-field',60,'Spectra-comp']
        break;
        
        case 'tc helicon':
        case 't.c. helicon':
        models = [415,'Plethora X-5',350,'G-System',160,'Voice-Live Play',200,'Play Electric','Play Acoustic','GTX',75,'Ditto',175,'Correct XT',125,'Correct',425,'Voice-live 3',90,'Mic Mechanic',70,'T-1',260,'Voicelive Touch',150,'Harmony G']
        break;
        
        case 'tc jauernig':
        case 't.c. jauernig':
        case 't jauernig':
        case 't. jauernig':
        case 'jauernig':
        models = [275,'Double DGTM','DGTM Double',70,'DGTM',100,'Black Ops','Bump',110,'Kleer',205,'Triple Gristle',90,'Reverie','Gristle King Lean','Luxury',150,'Gristle King']
        break;
        
        case 'tech 21':
        case 'tech21':
        models = [165,'YYZ',300,'Blonde Deluxe',275,'GED-2112',150,'VT Bass D.I.','VT Bass-DI','Leeds','Para-Driver',80,'Killer Wail',250,'Liverpool Deluxe',50,'XXL',60,'Double Drive','Doubledrive',180,'VT Bass Deluxe','Fly Rig 5 Cali','Flyrig 5 Cali','Cali Fly Rig','Cali Flyrig','Landers','PL-1',100,'Blonde','VT Bass','OMG','Killer','DLA','D.L.A.',250,'Sans-amp Classic',130,'Liverpool v2','Roto-choir',175,'RK-5','Kotzen','Fly-Rig Brit','Fly-Rig 5 Brit','Brit Fly-Rig',150,'Fly-Rig 5',140,'BBDI','Bass Driver',100,'GT2','Liverpool v1','British',70,'Comptortion',200,'Fly-rig V2','Strip','DP-3X',80,'Mouse','RVB']
        break;
        
        case 'teisco':
        models = [120,'Delay']
        break;
        
        case 'thermion':
        models = [150,'Outlaw']
        break;
        
        case 'thorpyfx':
        case 'thorpy fx':
        case 'thorpy':
        models = [200,'Fallout','Field','Medic',300,'Muffroom',175,'Wart-hog',190,'Peace','Gun-shot',230,'Water','Bunker',275,'Camoflange','Pulse',210,'Veteran',250,'Dane','Oggin',130,'Chain',225,'Fat General']
        break;
        
        case 'toadworks':
        models = [90,'John Bull']
        break;
        
        case 'tonehunter':
        models = [190,'Juicy']
        break;
        
        case 'trace elliot':
        case 'trace elliott':
        models = [275,'Transit A Pro',225,'Transit']
        break;
        
        case 'trickfish':
        models = [425,'Trilobite']
        break;
        
        case 'tronographic':
        models = [175,'Rusty',150,'Boxidizer']
        break;
        
        case 'tru-fi':
        case 'trufi':
        models = [120,'Colordriver','Zoso']
        break;
        
        case 'truetone':
        case 'true tone':
        models = [150,'Hyde',110,'66','VS-XO',120,'H2O',100,'1-Spot Pro','One Spot Pro','CS-6']
        break;
        
        case 'tsakalis audioworks':
        case 'tsakalis audio works':
        case 'tsakalis':
        models = [175,'Phonkify','Experience','Ocean',150,'Nerve','Riff-Raff',300,'G-Spot','Gravity Spot','TSA-GS',130,'Zipper']
        break;
        
        case 'twa':
        models = [100,'Sake',160,'Triskelion']
        break;
        
        case 'two notes':
        case 'twonotes':
        case '2 notes':
        models = [200,'Le-Bass','Le-Lead','Torpedo','Le-Crunch','Le-Clean',180,'Captor']
        break;
        
        case 'tycobrahe':
        models = [750,'Pedal-Flanger',700,'Para-pedal']
        break;
        
        case 'tym':
        models = [250,'Big Mud']
        break;
        
        case 'union tube & transistor':
        case 'union tube and transistor':
        case 'union tube':
        models = [200,'Sub-Buzz','More Ltd.','Tour Bender','Druid',180,'More',250,'Beelzebuzz',175,'Bomb',200,'Swindle',325,'Bumble-Buzz']
        break;
        
        case 'universal audio':
        case 'universal':
        models = [375,'Golden',325,'Astra',350,'Starlight']
        break;
        
        case 'univox':
        models = [700,'Super-Fuzz']
        break;
        
        case 'vahlbruch':
        models = [200,'Space-time','X-Roads','BBQ-XL',300,'Kaluna',175,'Opto-Trem','Chorus','BBQ','Octavia','Pipeline','Quantum','Phaser']
        break;
        
        case 'van weelden':
        case 'van weedlen':
        case 'vanweelden':
        case 'vanweedlen':
        models = [600,'Royal']
        break;
        
        case 'vemuram':
        case 'venuram':
        models = [350,'Shanks','Jan-Ray','Oz','Galea','Karen','Rage','Myriad',500,'DJ-1',1000,'TSV-808']
        break;
        
        case 'verellen':
        models = [350,'Spider']
        break;
        
        case 'vertex':
        models = [225,'Landau Boost',100,'T-Drive',175,'Steel-String SRV',90,'Dynamic',165,'Boost',150,'Steel-String','Ultra-Phonix',110,'Tone Secret',200,'Nyle']
        break;
        
        case 'vfe':
        case 'v.f.e.':
        models = [95,'Bumble-bee J',135,'Triumvirate','Vomit',150,'Tractor','Dragon','Blues','Bumble-bee',110,'Old-School','Pale-Horse',145,'Choral Reef',90,'Blue-print',120,'Dark-Horse','Distortion','Scream',160,'Mini-Mu','Alpha-Dog',140,'White-Horse',200,'Merman',250,'Chupacabra']
        break;
        
        case 'vick audio':
        case 'vick':
        models = [80,'V-2','Tree','Overdriver','Pleasant','Hypocenter',90,'Russian','Ram','1861','R-Comp',95,'Triangle']
        break;
        
        case 'victory amps':
        case 'victory':
        models = [350,'Sheriff','Kraken',400,'Countess']
        break;
        
        case 'visual sound':
        models = [130,'Dual Tap']
        break;
        
        case 'voodoo lab':
        case 'voodoo labs':
        models = [200,'Pedal Power 3',110,'Pedal Power 2 +','Pedal Power 2+','Pedal Power 2 Plus',90,'Commander',200,'Mondo',100,'Pedal Switcher',75,'ISO-5',65,'Superfuzz','Tremolo',70,'Sparkle Drive',80,'Giggity',130,'4x4',90,'Digital',120,'Analog Chorus']
        break;
        
        case 'vox':
        modes = [180,'V-829','Tone-lab SE',150,'Treble/Bass','V8401',100,'V-848','McCoy','Lil Looper',190,'King Wah',155,'V-846HW',85,'Trike',300,'Repeat',90,'Double Deca',140,'Tone-lab LE',150,'Big Bad Wah',120,'Cooltron']
        break;
        
        case 'walrus audio':
        case 'walrus':
        models = [300,'ACS1',165,'385',225,'Mako',200,'Julianna','Juliana',375,'Fathom/SL','Fathom/SL','Fathom-SL','Fathom - SL',130,'Deep Six','Aetos',140,'Julia','Lillian','Lilian',100,'Iron Horse','Plainsman','Mayflower','Emissary',180,'Descent','Monument','Bellwether',190,'Janus',145,'ARP-87',165,'Slö','Slo',110,'Harvester','Transit-3',90,'Jupiter',150,'Luminary','Fathom','Ages','EB-10',125,'War-horn','Messner',120,'Voyager',150,'Kangra','Defcon','Polychrome',160,'Vanguard']
        break;
        
        case 'wampler':
        models = [90,'Mini Ego','Ego Mini',175,'Faux Tape Echo v2',110,'Faux Tape Echo','Rats-bane',160,'Pinnacle Deluxe v2',225,'Black 65',"Black \'65","65",150,'Tweed 57',"Tweed \'57",'Slo-stortion','Plexi-Drive Deluxe','Bad Dog',120,'Plextortion','Euphoria','Doctor',175,'Faux Tape Echo v2','Paisley Deluxe','Paisley Drive Deluxe',135,'Ego',140,'Equator','Equater','Ethereal',150,'Latitude Deluxe','Latitude Tremolo Deluxe','Nirvana','Triple-Wreck','Thirty Something','Thirtysomething','30 Something','Tumnus Deluxe','Deluxe Tumnus',110,'Faux Analog-Echo','Low-Blow','Faux Spring Reverb',90,'Pinnacle',100,'Sovereign','Paisley','Pinnacle Deluxe',115,'Plexi-Drive',140,'Triple Recstortion','Dracarys',95,'Catapulp',230,'Terraform',120,'Clarksdale',130,'Hot-Wired','Pantheon','Leviathan','Belle','Dual Fusion',160,'Fuzztration',110,'Tumnus',125,'Velvet']
        break;
        
        case 'warm audio':
        models = [150,'Jet',130,'Foxy']
        break;
        
        case 'way huge':
        case 'way huge electronics':
        models = [250,'Ring-worm',90,'Swollen Pickle','Pork Loin','Saffron Squeeze',95,'Conspiracy Theory',100,'Red Llama','Echo-Puss','Over-rated','STO',250,'Doubleland',65,'Saucy','Rhino','WHE-202',120,'WH302GB','Geisha',65,'Havalina',100,'Hippo','Aqua-Puss',70,'Fat Sandwich',160,'Camel Toe','Cameltoe',150,'Supa-Puss','WHE707',120,'Pickle','WHE-214',110,'Purple Platypus mkII','Purple Platypus mk2','WHE-800',450,'Purple Platypus',185,'Atreides','Atriedes']
        break;
        
        case 'weehbo':
        models = [180,'Plexdrive','JVM','JMP',200,'Plex-face','Slo','Dumbledore',130,'Bastard',180,'Helldrive','JCM',125,'JTM',140,'Mastiff',175,'Hellfire',190,'Morbid']
        break;
        
        case 'wells amp':
        case 'wells amp nyc':
        case 'wells nyc':
        case 'wells':
        models = [350,'Shadow']
        break;
        
        case 'wilson effects':
        case 'wilson':
        models = [150,'Freaker','Stoned',105,'Haze',125,'Vintage Spec']
        break;
        
        case 'wmd':
        models = [175,'Fatman',150,'Civilian','Utility',385,'Counter Pro',130,'Goldilocks',250,'Proto-star',100,'Arcane',200,'Geiger Counter']
        break;
        
        case 'wounded paw':
        models = [140,'Battering','Black Sheep',120,'Attack Goat','EQ',150,'Echo','Super Blender']
        break;
        
        case 'wren and cuff':
        case 'wren & cuff':
        case 'wren&cuff':
        models = [165,'Gold-Comp',120,'Phat Phuk','Suppa',140,'Eye',160,'Super Russian','Elk','Hangman','Sonder',140,'Tall-Font',250,'Riva',150,'Two-Five','Irkalla','Manifest','Caprid Small','Box of War Small','Violet','Your Face',300,'Caprid','mk-11',200,'Box of War',125,'Tri-Pie',130,'Pickle',135,'Elephant',110,'Mercy','Ace Octave']
        break;
        
        case 'wrought iron effects':
        case 'wrought iron':
        models = [140,'Aslan']
        break;
        
        case 'xact tone solutions':
        case 'xact':
        case 'xts':
        models = [160,'Shape-charger',180,'Imperial',175,'Winford','Atomic','Tejas',100,'Pegasus',400,'Preamp',150,'Precision Multi-Drive',275,'Dual Precision',130,'Precision Overdrive',160,'Fermata']
        break;
        
        case 'xotic':
        models = [200,'Hinds',110,'Soul',140,'Henderson','Tri-Logic',120,'X-Blender','Robo-talk 2',80,'SL Drive','EP Boost','RC Boost','SP Comp','AC Boost',100,'AC-Plus','AC-+','BB Pre-amp',85,'Super-clean',90,'Sweet']
        break;
        
        case 'yankee':
        models = [215,'HS-M10',350,'HS-M24',175,'HS-M5',80,'PS-M0','PS-MO']
        break;
        
        case 'zoom':
        models = [85,'MS-70CDR',95,'G-3',70,'MS-50G',100,'MS-100BT',135,'B3N',90,'B-3']
        break;
        
        case 'zvex':
        models = [215,'Super Seek Wah','Super Seek Trem',175,'Vertical',160,'Seek Wah',300,'Super Ring',150,'Ooh Wah II','Ooh Wah 2','Octane',450,'Fuzz Factory-7','Fuzz Factory-Seven','Woolly Mammoth-7','Woolly Mammoth-Seven',140,'Fuzz Factory','Fuzz Factory Vexter','Vexter Fuzz Factory','Wah Probe',275,'Inventobox',160,'Sonar',100,'Box of Metal',250,'Ringtone','Ring Tone',190,'Woolly Mammoth','Wooly Mammoth',180,'Double-Rock',180,'Instant Lo-Fi Junky','Instant Lo-Fi Junkie',170,'Jonny-Octave','Johnny-Octave','Fuzz-Probe',100,'Box of Rock']
        break;
        
        default:
        models = [0,model];
        
    }
    return models;

}


function setObjectProp(keys, value, obj) {
    obj = obj || {}
    keys = typeof keys === 'string'
        ? keys.match(/\w+/g)
        : Array.prototype.slice.apply(keys)
    keys.reduce(function(obj, key, index) {
        obj[key] = index === keys.length - 1 
            ? value 
            : typeof obj[key] === 'object' && obj !== null
                ? obj[key]
                : {}
        return obj[key]
    }, obj)
    return obj
}


    function wordSplit(x,theNumber){
        var myArr = x.split(" ");
        var y = "";
        var theCount = 0;
        do {
  y = y + myArr[theCount] + " "
  theCount++;
}
while (theCount < theNumber);
        
        
    return y; 
    }


function sendMessage(theMessage) {
    console.log("this is sendMessage!!!!!!");
    //window.localStorage.setItem("value", "fromSendMessage");
    fetch('http://localhost:3001/sendmessage', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: theMessage
        })
    }).then(res => console.log(res))
    .catch(err => {
        console.log(err);
        throw err;
    })
}

function getSubstringBetweenTokens(str, startToken, endToken) {
  // Find the position of the start token
  let startPos = str.indexOf(startToken);

  // If start token is not found, return an empty string
  if (startPos === -1) return 'not found';

  // Adjust startPos to get the position right after the start token
  startPos += startToken.length;

  // Find the position of the end token, starting the search from startPos
  const endPos = str.indexOf(endToken, startPos);

  // If end token is not found, return an empty string
  if (endPos === -1) return 'not found either';

  // Extract and return the substring between the start and end positions
  
  //process.stdout.write("test!!: " + str.substring(startPos,endPos))
  
  return str.substring(startPos, endPos);
}

async function getItemsInfo(listItem) {
  try {
    const response = await Axios.get(`https://www.ebay.com/b/${listItem}?LH_BIN=1&LH_ItemCondition=3000&LH_PrefLoc=3&mag=1&rt=nc&_sop=10`,
    {
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        "user-agent": "TestService"
      }
    });
    
    // const oldRegex = /<li class="s-item s-item--large s-item--bgcolored">(.*?)<\/li>/g;
    const regex = /<li class="s-item s-item--large">(.*?)<\/li>/g;
    const arr = response.data.match(regex);
    
    const linkEx = /<a *[^>]+? class=s-item__link *[^>]+?href=(.*?)>/g;

    const re = arr.map(element => {
        const link = Array.from(element.matchAll(linkEx), m => m[1]);
        return link[0];
    });

    return re;

  } catch (err) {
    console.log('getItemsInfo(): ERROR');
    console.log(err);
    return null;
  }
}

async function getItemDetails(link) {
  try {
    const linkEx = /https:\/\/www.ebay.com\/itm\/(\d*.?)/g;
    const itemNumber = Array.from(link.matchAll(linkEx), m => m[1])[0].replace('?', '');

    const response = await Axios.get(link,
      {
        headers: {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9"
        }
      });

    const data = response.data.trim();
    
    //process.stdout.write(data);
/*
    const titleEx = /<h1 class=x-item-title__mainTitle> <!--F#0--><!--F#f_1--><!--F#1\[0]--><span class="ux-textspans ux-textspans--BOLD">(.*?)<\/span>/g;
    let title = Array.from(data.matchAll(titleEx), m => m[1]);

    if (title.length === 0) {
        const additionalTitleEx = /<span id="vi-lkhdr-itmTitl" class="u-dspn">(.*?)<\/span>/g;
        let tempTitle = Array.from(data.matchAll(additionalTitleEx), m => m[1]);
        if (tempTitle.length > 0) {
            title = tempTitle;
        }
    }
*/

    let title =  getSubstringBetweenTokens(data,"twitter:title\" content=\"","\" \/>")


    const priceEx = /<div class="vim x-seo-structured-data" data-testid=x-seo-structured-data><script type=application\/ld\+json>([\s\S]*?)<\/script><\/div>/g;
    const price = Array.from(data.matchAll(priceEx), m => m[1]);
    
    let lastPrice = "";

    try {
      lastPrice = JSON.parse(price[0])['offers']['price'];
    } catch { lastPrice = "" };

    // const brandEx = /<span itemprop="brand" itemscope="itemscope" itemtype="http:\/\/schema.org\/Brand"><span itemprop="name">(.*?)<\/span><\/span>/g;
    const brandEx= /<span class=ux-textspans>Brand<\/span><!--F\/--><!--F\/--><!--F\/--><\/div><\/div><\/div><div class=ux-labels-values__values><div class=ux-labels-values__values-content><div><!--F#0--><!--F#f_1--><!--F#1\[0]--><span class=ux-textspans>(.*?)<\/span>/g;
    const brand = Array.from(data.matchAll(brandEx), m => m[1]);
    
    // const modelEx = /<span itemprop="model">(.*?)<\/span>/g;
   
    // const modelEx = /<span class=ux-textspans>MPN<\/span><!--F\/--><!--F\/--><!--F\/--><\/div><\/div><\/div><div class=ux-labels-values__values><div class=ux-labels-values__values-content><div><!--F#0--><!--F#f_1--><!--F#1\[0]--><span class=ux-textspans>(.*?)<\/span>/g;
    const mpnRegEx = /<span class=ux-textspans>MPN<\/span><!--F\/--><!--F\/--><!--F\/--><\/div><\/div><\/div><div class=ux-labels-values__values><div class=ux-labels-values__values-content><div><!--F#0--><!--F#f_1--><!--F#1\[0]--><span class=ux-textspans>(.*?)<\/span>/g;
    const modelEx = /<span class=ux-textspans>Model<\/span><!--F\/--><!--F\/--><!--F\/--><\/div><\/div><\/div><div class=ux-labels-values__values><div class=ux-labels-values__values-content><div><!--F#0--><!--F#f_1--><!--F#1\[0]--><span class=ux-textspans>(.*?)<\/span>/g;
    let model = Array.from(data.matchAll(modelEx), m => m[1]);

    if (model.length == 0) {
        model = Array.from(data.matchAll(mpnRegEx), m => m[1]);
    }
    
    // const upcEx = /<span itemprop="gtin13">(.*?)<\/span>/g;
    const upcEx = /<span class=ux-textspans>UPC<\/span><!--F\/--><!--F\/--><!--F\/--><\/div><\/div><\/div><div class=ux-labels-values__values><div class=ux-labels-values__values-content><div><!--F#0--><!--F#f_1--><!--F#1\[0]--><span class=ux-textspans>(.*?)<\/span>/g;
    const upc = Array.from(data.matchAll(upcEx), m => m[1]);

    const zipCode = '07052'
    const shippingResp = await Axios.get(`https://www.ebay.com/itm/getrates?item=${itemNumber}&country=1&zipCode=${zipCode}&co=0`);
    const shippingCost = shippingResp.data.freeShipping ?
      "Free Shipping":
      Array.from(shippingResp.data.shippingSummary.matchAll(/<span>(\$\d.*)?<\/span>/g), m => m[1])[0] || "";
    
    return {
      id: itemNumber,
      //title: (title.length && title.length > 0) ? title[0].replace('<span class="g-hdn">Details about  &nbsp;</span>', '') : "",
      title: title,
      price: lastPrice != "" ? parseFloat(lastPrice).toFixed(2) : "",
      make: brand[0] || "",
      model: model[0] || "",
      UPC: upc[0] || "",
      shippingCost: shippingCost.replace('$', '')
    }
    return {};
  } catch(err) {
    console.log('getItemDetails(): ERROR');
    console.log(err);
  }
}

function testBrand(x){
    
    var y = getModels(x.trim(),"test")
    //console.log("TEST " + x  + " " + y[0]+ "!!!!!!!")
    if ((y[0] > 0) || (getDefaults(x.trim()) > 0)){return true}
    
    return false
    
}

function groomEbayItem(x){
    
    //x = setObjectProp(["condition","display_name"],"Very Good",x);
    x = setObjectProp(["shipping","initial_offer_rate","rate","original","amount"],Number(x.shippingCost),x);
    
    x.model = x.model.toLowerCase()
    x.make = x.make.toLowerCase()
    x.title = x.title.toLowerCase()
    x.title = x.title.replace('<wbr/>','')
    x.make = x.make.replace('<wbr/>','')
    x.model = x.model.replace('used','')
    x.model = x.model.replace('pre-owned','')
    x.model = x.model.replace('preowned','')
    x.model = x.model.replace('pre owned','')
    x.model = x.model.trim()
    x.title = x.title.replace('used','')
    x.title = x.title.replace('pre-owned','')
    x.title = x.title.replace('preowned','')
    x.title = x.title.replace('pre owned','')
    x.title = x.title.trim()
    
    
    
    //x = setObjectProp(["shipping","initial_offer_rate","region_code"],"US_CON",x);
    if (isNaN(x.shipping.initial_offer_rate.rate.original.amount)){x.shipping.initial_offer_rate.rate.original.amount = 0};
    

    if (x.make.length < 1){
        
        var y = ""
        
        for (let step = 4; step > 0; step--) {
            y = wordSplit(x.title,step)
            y = y.trim()

            if (testBrand(y)){
                x.make = y;
                x.model = x.title.replace(y,'')
                x.model = x.model.trim()
                break;
            }  
        }
    }
    //x.year = "2021";
    //x.finish = "Doesn't matter"
    //x.description = "Placeholder"
    
    // console.log(x)
    //console.log(x.condition.display_name)
    //console.log(x.shipping.initial_offer_rate.rate.original.amount)
    process.stdout.write(x.id + "^#@" + x.title + "^#@" + x.make + "^#@" + x.model + "^#@" + x.UPC + "^#@" + x.price + "^#@" + x.shippingCost + "&!*")
};

process.stdout.write("var ebayitems = \"")


getItemsInfo("Guitar-Effects-Pedals/181222").then(async (re) => {
  for(let i=0; i<10; i++){
    const details = await getItemDetails(re[i]);
    // console.log("Details: %O", details);
    groomEbayItem(details);
    // details = setObjectProp(["idx","condition","display_name"],"Very Good",details);
    // console.log(details.idx.condition.display_name)
  }
  process.stdout.write("\"")
}).catch((err) => {
    console.log('catch error');
    console.log(err);
}) 
