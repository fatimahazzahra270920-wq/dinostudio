import { ColoringPage } from '../types/coloring';

export const DINO_PAGES: ColoringPage[] = [
  {
    id: 1,
    title: 'Smiling T-Rex & Ice Cream',
    subtitle: 'T-Rex tersenyum memegang es krim',
    prompt: 'Color the three scoops with your favorite yummy ice cream flavors!',
    ageRecommendation: 'Ages 3-6',
    category: 'cute',
    imageUrl: '/src/assets/images/dino_trex_icecream_1793206986468.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Sun and clouds -->
      <circle cx="410" cy="90" r="45" stroke-width="6" />
      <line x1="410" y1="25" x2="410" y2="40" stroke-width="6" />
      <line x1="475" y1="90" x2="460" y2="90" stroke-width="6" />
      <line x1="410" y1="155" x2="410" y2="140" stroke-width="6" />
      <line x1="345" y1="90" x2="360" y2="90" stroke-width="6" />
      <line x1="455" y1="45" x2="445" y2="55" stroke-width="6" />
      <line x1="455" y1="135" x2="445" y2="125" stroke-width="6" />
      <line x1="365" y1="45" x2="375" y2="55" stroke-width="6" />
      <line x1="365" y1="135" x2="375" y2="125" stroke-width="6" />

      <path d="M70,120 Q95,95 130,115 Q165,95 190,120 Q215,145 190,165 Q130,175 70,165 Q45,145 70,120 Z" stroke-width="6" fill="white" />
      
      <!-- Ground line & flowers -->
      <path d="M20,580 Q150,560 250,575 T480,570" stroke-width="6" />
      <circle cx="80" cy="550" r="14" stroke-width="5" fill="white" />
      <path d="M80,564 L80,580" stroke-width="5" />
      <circle cx="430" cy="545" r="16" stroke-width="5" fill="white" />
      <path d="M430,561 L430,575" stroke-width="5" />

      <!-- T-Rex Body -->
      <!-- Tail -->
      <path d="M130,470 Q80,450 40,390 Q90,380 150,420" stroke-width="7" fill="white" />
      <!-- Legs and feet -->
      <path d="M150,470 C140,530 130,560 115,570 C140,575 160,575 175,570 C185,550 185,510 185,470" stroke-width="7" fill="white" />
      <path d="M260,475 C250,535 240,565 225,575 C250,580 270,580 285,575 C295,550 295,510 295,475" stroke-width="7" fill="white" />
      <!-- Main Torso -->
      <path d="M150,420 C140,320 180,240 230,230 C270,220 280,270 290,350 C300,430 280,490 200,490 C160,490 145,460 150,420 Z" stroke-width="7" fill="white" />
      <!-- Big Cute Head -->
      <path d="M220,240 C210,170 240,110 320,110 C390,110 410,160 410,210 C410,250 370,270 320,270 C280,270 250,265 220,240 Z" stroke-width="8" fill="white" />
      <!-- Big Cheerful Eye -->
      <circle cx="340" cy="165" r="22" stroke-width="6" fill="white" />
      <circle cx="346" cy="160" r="10" fill="currentColor" stroke="none" />
      <circle cx="352" cy="155" r="4" fill="white" stroke="none" />
      <!-- Smile & Teeth -->
      <path d="M300,225 C330,245 380,240 395,215" stroke-width="6" />
      <path d="M330,228 L338,240 L346,230 L354,240 L362,230" stroke-width="5" />
      <!-- Nostril & Cheek -->
      <ellipse cx="395" cy="180" rx="4" ry="7" fill="currentColor" stroke="none" />
      <circle cx="310" cy="205" r="10" stroke-dasharray="3,3" stroke-width="4" />

      <!-- Back Spikes -->
      <path d="M225,120 L210,105 L220,135" stroke-width="6" fill="white" />
      <path d="M210,150 L190,140 L205,170" stroke-width="6" fill="white" />
      <path d="M195,190 L175,185 L190,215" stroke-width="6" fill="white" />
      <path d="M180,240 L160,240 L175,270" stroke-width="6" fill="white" />
      <path d="M165,300 L145,305 L160,335" stroke-width="6" fill="white" />

      <!-- Cute Tiny Arm holding Ice Cream -->
      <path d="M275,320 Q310,340 340,325 Q350,335 340,345 Q310,360 270,340 Z" stroke-width="6" fill="white" />

      <!-- Giant Ice Cream Cone -->
      <polygon points="345,350 385,350 365,450" stroke-width="6" fill="white" />
      <!-- Waffle pattern on cone -->
      <line x1="352" y1="370" x2="378" y2="370" stroke-width="4" />
      <line x1="358" y1="395" x2="372" y2="395" stroke-width="4" />
      <line x1="362" y1="420" x2="368" y2="420" stroke-width="4" />
      <!-- Scoop 1 (Bottom) -->
      <circle cx="365" cy="340" r="28" stroke-width="6" fill="white" />
      <!-- Scoop 2 (Middle) -->
      <circle cx="365" cy="295" r="25" stroke-width="6" fill="white" />
      <!-- Scoop 3 (Top) -->
      <circle cx="365" cy="255" r="22" stroke-width="6" fill="white" />
      <!-- Cherry on top -->
      <circle cx="365" cy="225" r="10" stroke-width="5" fill="white" />
      <path d="M365,215 Q380,195 395,200" stroke-width="4" />
    </g>`
  },
  {
    id: 2,
    title: 'Triceratops in the Flower Park',
    subtitle: 'Triceratops bermain di taman',
    prompt: 'Color the three special horns and the pretty garden blossoms!',
    ageRecommendation: 'Ages 3-7',
    category: 'scenery',
    imageUrl: '/src/assets/images/dino_triceratops_park_1793206986763.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Clouds -->
      <path d="M320,80 Q345,55 380,75 Q415,55 440,80 Q460,110 430,125 Q370,135 320,120 Z" stroke-width="6" fill="white" />
      <path d="M60,90 Q80,70 110,85 Q140,70 160,90 Q175,115 150,130 Q100,135 60,125 Z" stroke-width="6" fill="white" />

      <!-- Park Grass & Rolling Hill -->
      <path d="M10,560 Q200,530 500,560" stroke-width="6" />
      <path d="M10,500 Q150,470 300,510 Q420,490 500,530" stroke-width="4" stroke-dasharray="8,6" />

      <!-- Big Smiling Triceratops -->
      <!-- Frill / Shield -->
      <path d="M210,190 C180,140 260,110 320,130 C370,145 400,200 380,260 C360,290 320,300 280,300" stroke-width="8" fill="white" />
      <!-- Frill scallops / bumps -->
      <circle cx="215" cy="170" r="12" stroke-width="5" fill="white" />
      <circle cx="245" cy="135" r="12" stroke-width="5" fill="white" />
      <circle cx="285" cy="120" r="12" stroke-width="5" fill="white" />
      <circle cx="330" cy="125" r="12" stroke-width="5" fill="white" />
      <circle cx="370" cy="155" r="12" stroke-width="5" fill="white" />
      <circle cx="390" cy="200" r="12" stroke-width="5" fill="white" />

      <!-- Head & Beak -->
      <path d="M280,230 C270,280 230,320 180,330 C150,335 140,310 160,290 C180,270 210,260 250,230 Z" stroke-width="7" fill="white" />
      <!-- Beak mouth -->
      <path d="M150,320 C175,340 210,335 230,310" stroke-width="6" />
      <!-- Cheek blushes -->
      <circle cx="225" cy="285" r="9" stroke-width="4" stroke-dasharray="3,3" />

      <!-- Horn 1 (Nose Horn) -->
      <path d="M165,280 Q150,220 135,210 Q160,240 180,275 Z" stroke-width="6" fill="white" />
      <!-- Horn 2 (Brow Left) -->
      <path d="M230,200 Q200,120 185,110 Q225,145 250,190 Z" stroke-width="6" fill="white" />
      <!-- Horn 3 (Brow Right) -->
      <path d="M290,190 Q290,110 295,95 Q310,135 315,185 Z" stroke-width="6" fill="white" />

      <!-- Eye -->
      <circle cx="245" cy="245" r="18" stroke-width="6" fill="white" />
      <circle cx="250" cy="242" r="8" fill="currentColor" stroke="none" />
      <circle cx="254" cy="238" r="3" fill="white" stroke="none" />

      <!-- Body -->
      <path d="M280,280 C320,270 380,280 420,330 C450,370 450,440 430,480 C370,510 300,500 260,450 C240,400 240,320 280,280 Z" stroke-width="8" fill="white" />
      <!-- Stumpy Legs -->
      <rect x="250" y="440" width="45" height="110" rx="18" stroke-width="7" fill="white" />
      <rect x="375" y="440" width="45" height="110" rx="18" stroke-width="7" fill="white" />
      <!-- Toenails -->
      <path d="M255,545 C255,535 270,535 270,545" stroke-width="5" />
      <path d="M275,545 C275,535 290,535 290,545" stroke-width="5" />
      <path d="M380,545 C380,535 395,535 395,545" stroke-width="5" />
      <path d="M400,545 C400,535 415,535 415,545" stroke-width="5" />

      <!-- Tail with cute tip -->
      <path d="M430,410 Q480,410 495,380 Q480,445 425,465" stroke-width="7" fill="white" />

      <!-- Flowers in Park -->
      <g transform="translate(60, 480)">
        <circle cx="20" cy="20" r="10" stroke-width="5" fill="white" />
        <circle cx="20" cy="5" r="7" stroke-width="4" fill="white" />
        <circle cx="35" cy="20" r="7" stroke-width="4" fill="white" />
        <circle cx="20" cy="35" r="7" stroke-width="4" fill="white" />
        <circle cx="5" cy="20" r="7" stroke-width="4" fill="white" />
        <line x1="20" y1="35" x2="20" y2="75" stroke-width="5" />
      </g>
      <g transform="translate(130, 500)">
        <circle cx="15" cy="15" r="8" stroke-width="5" fill="white" />
        <circle cx="15" cy="3" r="6" stroke-width="4" fill="white" />
        <circle cx="27" cy="15" r="6" stroke-width="4" fill="white" />
        <circle cx="15" cy="27" r="6" stroke-width="4" fill="white" />
        <circle cx="3" cy="15" r="6" stroke-width="4" fill="white" />
        <line x1="15" y1="27" x2="15" y2="60" stroke-width="5" />
      </g>
      <!-- Butterfly -->
      <g transform="translate(100, 220)">
        <path d="M30,30 Q15,10 5,25 Q15,40 30,35 Q15,50 10,65 Q25,70 30,45" stroke-width="5" fill="white" />
        <path d="M30,30 Q45,10 55,25 Q45,40 30,35 Q45,50 50,65 Q35,70 30,45" stroke-width="5" fill="white" />
        <line x1="30" y1="25" x2="30" y2="50" stroke-width="4" />
      </g>
    </g>`
  },
  {
    id: 3,
    title: 'Stegosaurus & Back Blossom Flowers',
    subtitle: 'Stegosaurus dengan bunga di punggungnya',
    prompt: 'Color the special garden flowers blooming along Steggie’s back plates!',
    ageRecommendation: 'Ages 3-8',
    category: 'cute',
    imageUrl: '/src/assets/images/dino_stegosaurus_flowers_1793206987376.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground -->
      <path d="M15,560 Q250,540 485,560" stroke-width="6" />
      
      <!-- Stegosaurus Body -->
      <path d="M110,430 C130,310 220,260 330,280 C400,300 420,380 410,440 C400,490 320,510 210,500 C150,490 110,465 110,430 Z" stroke-width="8" fill="white" />
      
      <!-- Stegosaurus Small Head & Long Neck -->
      <path d="M140,430 C110,420 80,410 50,440 C30,460 40,490 70,490 C100,490 120,470 145,455" stroke-width="7" fill="white" />
      <!-- Head Eye & Smile -->
      <circle cx="65" cy="455" r="10" stroke-width="4" fill="white" />
      <circle cx="67" cy="453" r="5" fill="currentColor" stroke="none" />
      <path d="M50,475 C60,483 75,483 82,475" stroke-width="4" />

      <!-- Flower Plates on Back (Replacing spiky plates with beautiful blooming flower petals!) -->
      <!-- Flower 1 -->
      <circle cx="170" cy="270" r="16" stroke-width="5" fill="white" />
      <circle cx="170" cy="245" r="12" stroke-width="4" fill="white" />
      <circle cx="190" cy="260" r="12" stroke-width="4" fill="white" />
      <circle cx="150" cy="260" r="12" stroke-width="4" fill="white" />
      <!-- Flower 2 (Big Middle) -->
      <circle cx="240" cy="225" r="22" stroke-width="6" fill="white" />
      <circle cx="240" cy="195" r="16" stroke-width="5" fill="white" />
      <circle cx="268" cy="215" r="16" stroke-width="5" fill="white" />
      <circle cx="212" cy="215" r="16" stroke-width="5" fill="white" />
      <circle cx="240" cy="250" r="14" stroke-width="4" fill="white" />
      <!-- Flower 3 -->
      <circle cx="315" cy="235" r="20" stroke-width="6" fill="white" />
      <circle cx="315" cy="205" r="15" stroke-width="5" fill="white" />
      <circle cx="340" cy="225" r="15" stroke-width="5" fill="white" />
      <circle cx="290" cy="225" r="15" stroke-width="5" fill="white" />
      <!-- Flower 4 -->
      <circle cx="380" cy="275" r="16" stroke-width="5" fill="white" />
      <circle cx="380" cy="250" r="12" stroke-width="4" fill="white" />
      <circle cx="400" cy="270" r="12" stroke-width="4" fill="white" />
      <circle cx="360" cy="270" r="12" stroke-width="4" fill="white" />

      <!-- Spiked Tail (Thagomizer with little stars!) -->
      <path d="M410,430 Q470,420 480,450 Q460,470 410,460" stroke-width="7" fill="white" />
      <polygon points="460,405 470,380 480,410" stroke-width="5" fill="white" />
      <polygon points="480,425 505,420 485,445" stroke-width="5" fill="white" />

      <!-- Strong Feet -->
      <rect x="165" y="470" width="45" height="90" rx="16" stroke-width="7" fill="white" />
      <rect x="330" y="470" width="45" height="90" rx="16" stroke-width="7" fill="white" />
      <circle cx="180" cy="545" r="6" stroke-width="3" />
      <circle cx="195" cy="545" r="6" stroke-width="3" />
      <circle cx="345" cy="545" r="6" stroke-width="3" />
      <circle cx="360" cy="545" r="6" stroke-width="3" />

      <!-- Cheerful Sun in corner -->
      <circle cx="90" cy="110" r="40" stroke-width="6" fill="white" />
      <path d="M80,105 Q90,95 100,105" stroke-width="4" />
      <path d="M85,120 Q90,126 95,120" stroke-width="4" />
    </g>`
  },
  {
    id: 4,
    title: 'Baby Dino Hatching from Egg',
    subtitle: 'Baby dino menetas dari telur',
    prompt: 'Give the spotted baby egg bright rainbow colors!',
    ageRecommendation: 'Ages 2-6',
    category: 'cute',
    imageUrl: '/src/assets/images/dino_baby_egg_1793206987720.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Nest / Twigs -->
      <path d="M60,540 Q250,590 440,540 Q460,570 410,600 Q250,620 90,600 Z" stroke-width="7" fill="white" />
      <line x1="80" y1="560" x2="160" y2="585" stroke-width="5" />
      <line x1="140" y1="575" x2="240" y2="585" stroke-width="5" />
      <line x1="280" y1="585" x2="380" y2="570" stroke-width="5" />
      <line x1="330" y1="560" x2="420" y2="580" stroke-width="5" />

      <!-- Lower Half of Egg Shell (Cracked Zigzag) -->
      <path d="M100,380 L140,340 L180,380 L230,335 L280,385 L330,340 L370,390 L400,380 C410,480 370,560 250,560 C130,560 90,480 100,380 Z" stroke-width="8" fill="white" />
      <!-- Big Decorative Spots on Egg -->
      <circle cx="170" cy="460" r="24" stroke-width="5" />
      <circle cx="320" cy="470" r="28" stroke-width="5" />
      <circle cx="240" cy="510" r="20" stroke-width="5" />
      <circle cx="260" cy="410" r="16" stroke-width="5" />

      <!-- Baby Dino Peeking Out -->
      <!-- Head -->
      <path d="M160,280 C150,170 210,120 250,120 C290,120 350,170 340,280 C320,340 180,340 160,280 Z" stroke-width="8" fill="white" />
      <!-- Huge Kawaii Eyes -->
      <circle cx="210" cy="210" r="24" stroke-width="6" fill="white" />
      <circle cx="214" cy="206" r="12" fill="currentColor" stroke="none" />
      <circle cx="218" cy="200" r="5" fill="white" stroke="none" />

      <circle cx="290" cy="210" r="24" stroke-width="6" fill="white" />
      <circle cx="286" cy="206" r="12" fill="currentColor" stroke="none" />
      <circle cx="282" cy="200" r="5" fill="white" stroke="none" />

      <!-- Cute Baby Cheeks & Smile -->
      <circle cx="185" cy="245" r="10" stroke-width="3" stroke-dasharray="3,3" />
      <circle cx="315" cy="245" r="10" stroke-width="3" stroke-dasharray="3,3" />
      <path d="M235,245 Q250,265 265,245" stroke-width="6" />

      <!-- Baby Dino Hands resting on egg rim -->
      <path d="M170,350 Q180,320 200,325 Q210,345 190,360 Z" stroke-width="6" fill="white" />
      <path d="M330,350 Q320,320 300,325 Q290,345 310,360 Z" stroke-width="6" fill="white" />

      <!-- Egg Shell Piece on Head as a cute little hat! -->
      <path d="M200,140 L220,110 L245,135 L270,105 L295,135 L305,115 C295,65 210,65 195,120 Z" stroke-width="7" fill="white" />
      <circle cx="250" cy="85" r="10" stroke-width="4" />

      <!-- Little floating celebratory stars -->
      <polygon points="90,160 97,175 112,177 101,188 104,203 90,195 76,203 79,188 68,177 83,175" stroke-width="4" fill="white" />
      <polygon points="410,180 417,195 432,197 421,208 424,223 410,215 396,223 399,208 388,197 403,195" stroke-width="4" fill="white" />
    </g>`
  },
  {
    id: 5,
    title: 'Brachiosaurus & The Tall Jungle Tree',
    subtitle: 'Brachiosaurus makan daun dari pohon tinggi',
    prompt: 'Color the long neck reaching all the way into the yummy jungle tree!',
    ageRecommendation: 'Ages 3-7',
    category: 'scenery',
    imageUrl: '/src/assets/images/dino_brachiosaurus_tree_1793207006022.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground -->
      <path d="M10,570 Q250,550 490,570" stroke-width="6" />

      <!-- Tall Jungle Tree on the Left -->
      <!-- Trunk -->
      <path d="M60,570 C70,400 50,300 80,180 C95,180 105,320 120,570" stroke-width="7" fill="white" />
      <!-- Tree Canopy Leaves -->
      <path d="M40,200 C10,170 10,100 60,80 C80,40 150,40 180,80 C220,70 240,130 210,180 C230,220 170,260 130,220 C90,260 40,240 40,200 Z" stroke-width="8" fill="white" />
      <!-- Leaf vein details -->
      <path d="M120,110 Q140,130 160,120" stroke-width="4" />
      <path d="M90,140 Q110,160 130,150" stroke-width="4" />

      <!-- Brachiosaurus -->
      <!-- Giant gentle body -->
      <path d="M240,440 C230,370 290,340 370,360 C430,380 460,450 430,500 C370,530 280,530 240,440 Z" stroke-width="8" fill="white" />
      <!-- Four column legs -->
      <rect x="250" y="470" width="38" height="100" rx="14" stroke-width="7" fill="white" />
      <rect x="305" y="470" width="35" height="100" rx="14" stroke-width="7" fill="white" />
      <rect x="365" y="470" width="38" height="100" rx="14" stroke-width="7" fill="white" />
      <rect x="415" y="470" width="35" height="100" rx="14" stroke-width="7" fill="white" />

      <!-- Extremely Long Graceful Neck reaching to tree -->
      <path d="M260,370 C240,260 210,160 160,110 C185,100 205,100 220,120 C270,180 295,280 310,360" stroke-width="8" fill="white" />
      <!-- Friendly Head Munching Leaves -->
      <path d="M160,110 C140,90 120,95 115,115 C115,130 140,140 170,130 Z" stroke-width="6" fill="white" />
      <circle cx="140" cy="110" r="6" stroke-width="3" fill="white" />
      <circle cx="141" cy="109" r="3" fill="currentColor" stroke="none" />
      <!-- Delicious Leaf in Mouth -->
      <path d="M115,120 Q95,125 90,140 Q105,145 120,125" stroke-width="5" fill="white" />
      <line x1="90" y1="140" x2="115" y2="120" stroke-width="3" />

      <!-- Tail -->
      <path d="M430,440 Q475,440 490,420 Q485,465 430,480" stroke-width="7" fill="white" />
    </g>`
  },
  {
    id: 6,
    title: 'Skater Dino on the Move',
    subtitle: 'Dino naik skateboard',
    prompt: 'Design a cool colorful pattern for the skateboard deck!',
    ageRecommendation: 'Ages 4-8',
    category: 'action',
    imageUrl: '/src/assets/images/dino_skater_board_1793207007308.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground line & motion dashes -->
      <line x1="30" y1="560" x2="470" y2="560" stroke-width="6" />
      <line x1="40" y1="520" x2="100" y2="520" stroke-width="5" stroke-dasharray="8,8" />
      <line x1="60" y1="480" x2="120" y2="480" stroke-width="5" stroke-dasharray="8,8" />

      <!-- Skateboard Deck -->
      <path d="M120,500 L380,500 C405,500 415,480 430,470 L435,485 C415,505 400,520 370,520 L130,520 C100,520 85,505 65,485 L70,470 C85,480 95,500 120,500 Z" stroke-width="7" fill="white" />
      <!-- Skateboard Wheels -->
      <circle cx="140" cy="535" r="18" stroke-width="6" fill="white" />
      <circle cx="140" cy="535" r="7" stroke-width="4" />
      <circle cx="360" cy="535" r="18" stroke-width="6" fill="white" />
      <circle cx="360" cy="535" r="7" stroke-width="4" />

      <!-- Skater Dino (Cool Raptor / T-Rex) -->
      <!-- Legs posed on board -->
      <path d="M180,420 L170,490 L150,500 L200,500" stroke-width="7" fill="white" />
      <path d="M300,420 L320,490 L300,500 L350,500" stroke-width="7" fill="white" />

      <!-- Body Leaning Forward with Excitement -->
      <path d="M180,420 C170,340 220,290 290,290 C340,290 350,350 320,420 C280,450 210,450 180,420 Z" stroke-width="8" fill="white" />

      <!-- Tail Outstretched for Balance -->
      <path d="M180,390 Q100,390 60,350 Q120,340 190,370" stroke-width="7" fill="white" />

      <!-- Head with Skater Helmet -->
      <path d="M280,290 C260,230 300,170 360,170 C410,170 430,210 430,250 C430,285 390,305 340,305 Z" stroke-width="8" fill="white" />
      <!-- Skater Helmet on Head -->
      <path d="M280,210 C290,140 410,140 425,210 Z" stroke-width="7" fill="white" />
      <path d="M290,210 L300,240 L310,240" stroke-width="5" /> <!-- Helmet strap -->

      <!-- Happy Winking Eye -->
      <path d="M360,220 Q375,210 390,220" stroke-width="6" />
      <circle cx="385" cy="245" r="8" stroke-width="3" stroke-dasharray="2,2" /> <!-- Cheek -->
      <!-- Big Smile -->
      <path d="M345,260 Q380,285 410,255" stroke-width="6" />

      <!-- Arms Pumped for Balance -->
      <path d="M300,340 Q350,360 380,340" stroke-width="7" />
      <path d="M240,340 Q210,320 200,290" stroke-width="7" />
    </g>`
  },
  {
    id: 7,
    title: 'Dino Astronaut on the Moon',
    subtitle: 'Dino astronot di bulan',
    prompt: 'Color the astronaut suit and glowing stars in deep space!',
    ageRecommendation: 'Ages 4-9',
    category: 'action',
    imageUrl: '/src/assets/images/dino_astronaut_moon_1793206988769.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Moon Surface with Craters -->
      <path d="M10,520 Q250,470 490,520 L490,620 L10,620 Z" stroke-width="7" fill="white" />
      <!-- Craters -->
      <ellipse cx="120" cy="550" rx="40" ry="15" stroke-width="5" />
      <ellipse cx="370" cy="545" rx="50" ry="18" stroke-width="5" />
      <ellipse cx="250" cy="580" rx="30" ry="10" stroke-width="4" />

      <!-- Stars and Planets in Space -->
      <circle cx="80" cy="120" r="30" stroke-width="6" fill="white" />
      <!-- Saturn Planet Ring -->
      <ellipse cx="80" cy="120" rx="55" ry="12" stroke-width="5" transform="rotate(-20, 80, 120)" />

      <!-- Twinkling Stars -->
      <polygon points="410,90 415,102 428,104 418,113 421,126 410,119 399,126 402,113 392,104 405,102" stroke-width="4" fill="white" />
      <polygon points="340,160 344,170 355,171 347,178 349,189 340,183 331,189 333,178 325,171 336,170" stroke-width="4" fill="white" />
      <polygon points="170,80 173,88 182,89 175,95 177,104 170,99 163,104 165,95 158,89 167,88" stroke-width="3" fill="white" />

      <!-- Dino Astronaut -->
      <!-- Astronaut Boots -->
      <path d="M180,450 L170,495 C150,495 150,515 190,515 L215,515 L215,450 Z" stroke-width="7" fill="white" />
      <path d="M285,450 L285,515 L330,515 C345,515 345,495 320,495 L315,450 Z" stroke-width="7" fill="white" />

      <!-- Spacesuit Torso & Control Panel -->
      <path d="M180,310 C160,370 170,450 215,460 L285,460 C330,450 340,370 320,310 Z" stroke-width="8" fill="white" />
      <!-- Chest Control Box -->
      <rect x="225" y="350" width="50" height="40" rx="8" stroke-width="5" fill="white" />
      <circle cx="240" cy="370" r="5" stroke-width="3" />
      <circle cx="260" cy="370" r="5" stroke-width="3" />

      <!-- Bubble Astronaut Helmet (Huge Round Glass Dome) -->
      <circle cx="250" cy="220" r="95" stroke-width="8" fill="white" />
      <!-- Helmet Collar -->
      <rect x="200" y="300" width="100" height="20" rx="10" stroke-width="6" fill="white" />

      <!-- Smiling Dino Face Inside Helmet -->
      <path d="M200,240 C190,180 230,150 265,150 C300,150 320,185 315,240 C300,265 220,265 200,240 Z" stroke-width="6" fill="white" />
      <circle cx="235" cy="195" r="14" stroke-width="5" fill="white" />
      <circle cx="237" cy="193" r="7" fill="currentColor" stroke="none" />
      <circle cx="280" cy="195" r="14" stroke-width="5" fill="white" />
      <circle cx="278" cy="193" r="7" fill="currentColor" stroke="none" />
      <path d="M245,225 Q258,240 270,225" stroke-width="5" />

      <!-- Flag Planted on Moon -->
      <line x1="430" y1="360" x2="430" y2="520" stroke-width="6" />
      <path d="M430,360 L370,390 L430,420 Z" stroke-width="6" fill="white" />
      <!-- Cute Dino footprint on flag -->
      <circle cx="405" cy="390" r="8" stroke-width="3" />
    </g>`
  },
  {
    id: 8,
    title: 'Sunny Dino Picnic with Friends',
    subtitle: 'Dino piknik bersama teman',
    prompt: 'Color the checkered picnic blanket, delicious sandwiches, and juice!',
    ageRecommendation: 'Ages 3-7',
    category: 'cute',
    imageUrl: '/src/assets/images/dino_picnic_blanket_1793207007878.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground & Grass -->
      <path d="M10,540 Q250,520 490,540" stroke-width="6" />
      
      <!-- Picnic Blanket (Checkered) -->
      <polygon points="80,510 420,510 470,590 30,590" stroke-width="7" fill="white" />
      <line x1="140" y1="510" x2="110" y2="590" stroke-width="4" />
      <line x1="200" y1="510" x2="190" y2="590" stroke-width="4" />
      <line x1="260" y1="510" x2="270" y2="590" stroke-width="4" />
      <line x1="320" y1="510" x2="350" y2="590" stroke-width="4" />
      <line x1="380" y1="510" x2="425" y2="590" stroke-width="4" />
      <line x1="55" y1="550" x2="445" y2="550" stroke-width="4" />

      <!-- Picnic Basket -->
      <rect x="340" y="440" width="80" height="70" rx="10" stroke-width="6" fill="white" />
      <line x1="340" y1="475" x2="420" y2="475" stroke-width="4" />
      <path d="M355,440 C355,400 405,400 405,440" stroke-width="5" />

      <!-- Delicious Food on Blanket -->
      <!-- Sandwich -->
      <polygon points="120,530 160,500 170,540" stroke-width="5" fill="white" />
      <!-- Juice Box with Straw -->
      <rect x="190" y="490" width="30" height="45" rx="5" stroke-width="5" fill="white" />
      <path d="M205,490 L205,465 L220,455" stroke-width="4" />
      <!-- Apple -->
      <circle cx="250" cy="520" r="16" stroke-width="5" fill="white" />
      <path d="M250,504 Q255,490 262,495" stroke-width="3" />

      <!-- Happy Dino Sitting Down -->
      <!-- Dino Body -->
      <path d="M160,490 C140,430 150,330 210,300 C270,300 290,360 280,450 C270,490 220,510 160,490 Z" stroke-width="8" fill="white" />
      <!-- Dino Head -->
      <path d="M190,310 C180,220 220,180 280,180 C330,180 350,220 340,280 C320,320 260,330 210,320 Z" stroke-width="7" fill="white" />
      <!-- Eye & Cheerful Smile -->
      <circle cx="280" cy="235" r="16" stroke-width="5" fill="white" />
      <circle cx="283" cy="232" r="8" fill="currentColor" stroke="none" />
      <path d="M260,280 Q290,305 320,275" stroke-width="6" />

      <!-- Little Bird Friend sitting on dino head -->
      <circle cx="280" cy="150" r="14" stroke-width="4" fill="white" />
      <polygon points="294,150 306,153 294,158" stroke-width="3" fill="white" />
      <circle cx="286" cy="147" r="3" fill="currentColor" stroke="none" />
      <!-- Bird Wing -->
      <path d="M272,152 Q260,155 272,160" stroke-width="3" />
    </g>`
  },
  {
    id: 9,
    title: 'Pterodactyl Soaring Across the Sky',
    subtitle: 'Pterodactyl terbang di antara awan',
    prompt: 'Color the grand wings gliding gracefully through sunny clouds!',
    ageRecommendation: 'Ages 3-8',
    category: 'action',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Distant Mountain Peaks Below -->
      <polygon points="30,580 140,460 250,580" stroke-width="6" fill="white" />
      <polyline points="105,500 140,515 175,500" stroke-width="4" />
      <polygon points="200,580 320,430 450,580" stroke-width="6" fill="white" />
      <polyline points="285,475 320,495 360,480" stroke-width="4" />

      <!-- Fluffy Sky Clouds -->
      <path d="M30,220 Q60,180 110,200 Q160,170 200,210 Q230,250 190,280 Q110,290 50,270 Z" stroke-width="6" fill="white" />
      <path d="M320,140 Q350,110 390,130 Q440,110 470,140 Q490,180 460,200 Q390,210 330,190 Z" stroke-width="6" fill="white" />

      <!-- Pterodactyl Center Body & Head -->
      <!-- Head Crest (Iconic long crest) -->
      <path d="M240,250 C230,170 190,130 160,120 C190,150 220,200 240,220 L300,225 C340,230 360,240 330,250 Z" stroke-width="7" fill="white" />
      <!-- Beak and Smile -->
      <path d="M255,245 L320,245" stroke-width="5" />
      <!-- Eye -->
      <circle cx="260" cy="225" r="10" stroke-width="4" fill="white" />
      <circle cx="262" cy="223" r="5" fill="currentColor" stroke="none" />

      <!-- Small Body & Little Tail -->
      <path d="M235,255 C220,300 230,340 250,370 C270,340 280,300 265,255 Z" stroke-width="6" fill="white" />
      <path d="M250,370 L250,400" stroke-width="5" />

      <!-- Huge Majestic Wings Spread Out Wide -->
      <!-- Left Wing -->
      <path d="M235,270 C170,220 90,210 30,250 C60,310 120,330 160,320 C190,350 220,340 235,310" stroke-width="8" fill="white" />
      <!-- Left Wing finger / claw -->
      <path d="M100,220 L95,205 L110,215" stroke-width="4" />

      <!-- Right Wing -->
      <path d="M265,270 C330,220 410,210 470,250 C440,310 380,330 340,320 C310,350 280,340 265,310" stroke-width="8" fill="white" />
      <!-- Right Wing finger / claw -->
      <path d="M400,220 L405,205 L390,215" stroke-width="4" />

      <!-- Little feet tucked in flight -->
      <path d="M240,365 L235,385 L245,385" stroke-width="4" />
      <path d="M260,365 L265,385 L255,385" stroke-width="4" />
    </g>`
  },
  {
    id: 10,
    title: 'Dino Floating with Party Balloons',
    subtitle: 'Dino membawa balon',
    prompt: 'Color every balloon a different bright pastel hue!',
    ageRecommendation: 'Ages 3-6',
    category: 'cute',
    imageUrl: '/src/assets/images/dino_balloon_float_1793207049014.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground line with tiny tufts of grass -->
      <path d="M20,570 Q250,550 480,570" stroke-width="6" />

      <!-- Cluster of Big Festive Balloons -->
      <!-- Balloon 1 (Center Top) -->
      <ellipse cx="250" cy="110" rx="35" ry="45" stroke-width="6" fill="white" />
      <polygon points="245,155 255,155 250,165" stroke-width="4" fill="white" />
      <!-- Balloon 2 (Left) -->
      <ellipse cx="180" cy="140" rx="36" ry="46" stroke-width="6" fill="white" />
      <polygon points="175,186 185,186 180,195" stroke-width="4" fill="white" />
      <!-- Balloon 3 (Right) -->
      <ellipse cx="320" cy="135" rx="36" ry="46" stroke-width="6" fill="white" />
      <polygon points="315,181 325,181 320,190" stroke-width="4" fill="white" />
      <!-- Balloon 4 (Far Left) -->
      <ellipse cx="125" cy="180" rx="32" ry="42" stroke-width="6" fill="white" />
      <!-- Balloon 5 (Far Right) -->
      <ellipse cx="375" cy="175" rx="32" ry="42" stroke-width="6" fill="white" />

      <!-- Balloon Strings tied together -->
      <path d="M250,165 Q245,240 230,310" stroke-width="4" />
      <path d="M180,195 Q210,250 230,310" stroke-width="4" />
      <path d="M320,190 Q270,250 230,310" stroke-width="4" />
      <path d="M125,222 Q180,270 230,310" stroke-width="4" />
      <path d="M375,217 Q300,270 230,310" stroke-width="4" />

      <!-- Cute Baby Dino Floating Slightly off the Ground -->
      <!-- Dino Body -->
      <path d="M160,430 C150,350 200,310 260,310 C310,310 340,360 330,440 C320,490 260,500 200,490 C170,480 160,455 160,430 Z" stroke-width="8" fill="white" />
      <!-- Cute Face Looking Up at Balloons -->
      <path d="M200,310 C190,240 230,200 280,200 C330,200 350,230 350,280 C340,320 290,330 250,320 Z" stroke-width="7" fill="white" />
      <circle cx="280" cy="250" r="15" stroke-width="5" fill="white" />
      <circle cx="282" cy="245" r="7" fill="currentColor" stroke="none" />
      <path d="M295,280 Q320,295 335,275" stroke-width="5" />

      <!-- Hand Clasping the Balloon Strings -->
      <path d="M220,330 Q235,310 245,320 Q235,340 220,330" stroke-width="6" fill="white" />

      <!-- Little Stumpy Legs dangling happily in the air -->
      <rect x="190" y="475" width="30" height="45" rx="12" stroke-width="6" fill="white" />
      <rect x="260" y="475" width="30" height="45" rx="12" stroke-width="6" fill="white" />
      <!-- Tail wagging -->
      <path d="M160,440 Q110,450 90,430 Q120,470 170,470" stroke-width="6" fill="white" />
    </g>`
  },
  {
    id: 11,
    title: 'Pool Time Splash with Rubber Duck',
    subtitle: 'Dino bermain di kolam renang',
    prompt: 'Color the cool blue water and sunny yellow rubber ducky!',
    ageRecommendation: 'Ages 3-7',
    category: 'cute',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Inflatable Pool -->
      <ellipse cx="250" cy="510" rx="200" ry="60" stroke-width="8" fill="white" />
      <!-- Water ripple level inside pool -->
      <path d="M70,495 C140,510 200,480 260,500 C320,515 380,485 430,495" stroke-width="5" />

      <!-- Cute Dino Sitting in Pool with Swim Ring -->
      <!-- Dino Head Wearing Snorkel Mask -->
      <path d="M200,310 C180,220 230,160 300,160 C360,160 380,210 375,280 C360,330 290,340 240,330 Z" stroke-width="8" fill="white" />
      <!-- Snorkel Mask -->
      <rect x="250" y="210" width="85" height="45" rx="15" stroke-width="6" fill="white" />
      <!-- Eyes behind mask -->
      <circle cx="275" cy="232" r="10" stroke-width="4" />
      <circle cx="277" cy="230" r="5" fill="currentColor" stroke="none" />
      <circle cx="310" cy="232" r="10" stroke-width="4" />
      <circle cx="312" cy="230" r="5" fill="currentColor" stroke="none" />
      <!-- Snorkel Breathing Tube -->
      <path d="M335,240 L370,240 L370,140 L350,140" stroke-width="6" />

      <!-- Big Happy Smile with Water Droplet -->
      <path d="M260,290 Q300,315 340,285" stroke-width="6" />

      <!-- Rubber Duck Inflatable Ring around Dino Torso -->
      <ellipse cx="270" cy="390" rx="110" ry="40" stroke-width="8" fill="white" />
      <!-- Duck Head on front of ring -->
      <circle cx="370" cy="360" r="24" stroke-width="6" fill="white" />
      <polygon points="390,355 420,365 390,375" stroke-width="5" fill="white" /> <!-- Duck Bill -->
      <circle cx="375" cy="355" r="4" fill="currentColor" stroke="none" />

      <!-- Water Splashes flying around -->
      <path d="M120,440 Q100,410 110,400 Q125,410 120,440" stroke-width="4" fill="white" />
      <path d="M150,420 Q140,390 150,380 Q160,395 150,420" stroke-width="4" fill="white" />
      <path d="M410,430 Q430,400 420,390 Q405,405 410,430" stroke-width="4" fill="white" />
    </g>`
  },
  {
    id: 12,
    title: 'Artist Dino Painting at the Easel',
    subtitle: 'Dino sedang menggambar/melukis',
    prompt: 'Color the artist canvas with your own imagination!',
    ageRecommendation: 'Ages 4-8',
    category: 'cute',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground line -->
      <line x1="30" y1="560" x2="470" y2="560" stroke-width="6" />

      <!-- Artist Easel on the Left -->
      <line x1="80" y1="560" x2="150" y2="200" stroke-width="7" />
      <line x1="220" y1="560" x2="150" y2="200" stroke-width="7" />
      <line x1="150" y1="560" x2="150" y2="200" stroke-width="5" />
      <!-- Canvas Board -->
      <rect x="70" y="240" width="160" height="180" rx="8" stroke-width="7" fill="white" />
      <!-- Drawing on the Canvas (Mini volcano & sun) -->
      <circle cx="110" cy="280" r="14" stroke-width="3" />
      <polygon points="120,390 160,330 200,390" stroke-width="4" />
      <path d="M150,330 Q160,300 170,330" stroke-width="3" />

      <!-- Dino Artist on the Right -->
      <!-- Body & Beret Hat -->
      <path d="M260,430 C250,360 280,310 340,310 C390,310 420,360 410,440 C390,500 320,510 270,490 Z" stroke-width="8" fill="white" />
      <!-- Head with French Artist Beret -->
      <path d="M290,310 C270,240 310,190 370,190 C420,190 440,230 435,280 C420,320 360,330 320,320 Z" stroke-width="7" fill="white" />
      <!-- French Beret -->
      <ellipse cx="370" cy="180" rx="50" ry="18" stroke-width="6" fill="white" />
      <line x1="370" y1="162" x2="370" y2="152" stroke-width="4" /> <!-- Beret stem -->

      <!-- Eye & Smile -->
      <circle cx="360" cy="240" r="14" stroke-width="5" fill="white" />
      <circle cx="363" cy="238" r="7" fill="currentColor" stroke="none" />
      <path d="M340,280 Q370,300 395,275" stroke-width="5" />

      <!-- Left Arm holding Paint Palette -->
      <path d="M320,380 L350,420" stroke-width="6" />
      <!-- Palette with Paint Daubs -->
      <ellipse cx="370" cy="430" rx="35" ry="25" stroke-width="6" fill="white" />
      <circle cx="355" cy="425" r="5" stroke-width="3" />
      <circle cx="370" cy="420" r="5" stroke-width="3" />
      <circle cx="385" cy="425" r="5" stroke-width="3" />
      <circle cx="375" cy="440" r="5" stroke-width="3" />

      <!-- Right Arm holding Paintbrush toward canvas -->
      <path d="M275,360 L210,330" stroke-width="6" />
      <line x1="210" y1="330" x2="185" y2="310" stroke-width="5" /> <!-- Brush handle -->
      <polygon points="185,310 170,295 180,305" stroke-width="4" fill="white" /> <!-- Bristles -->

      <!-- Dino Legs -->
      <rect x="290" y="480" width="35" height="80" rx="12" stroke-width="6" fill="white" />
      <rect x="360" y="480" width="35" height="80" rx="12" stroke-width="6" fill="white" />
    </g>`
  },
  {
    id: 13,
    title: 'Campfire & Cozy Mountain Tent',
    subtitle: 'Dino berkemah dengan tenda',
    prompt: 'Color the flickering warm campfire and cozy triangular tent!',
    ageRecommendation: 'Ages 4-8',
    category: 'scenery',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground line -->
      <path d="M10,560 Q250,540 490,560" stroke-width="6" />

      <!-- Cozy Canvas Tent on the Left -->
      <polygon points="130,280 40,540 220,540" stroke-width="8" fill="white" />
      <!-- Tent door flaps tied open -->
      <polygon points="130,280 90,540 170,540" stroke-width="6" fill="white" />
      <line x1="130" y1="280" x2="130" y2="240" stroke-width="5" /> <!-- Tent pole tip -->

      <!-- Pine Trees in Background -->
      <polygon points="260,280 230,340 290,340" stroke-width="5" fill="white" />
      <polygon points="260,330 220,400 300,400" stroke-width="5" fill="white" />
      <polygon points="260,390 210,470 310,470" stroke-width="5" fill="white" />
      <rect x="250" y="470" width="20" height="40" stroke-width="5" fill="white" />

      <!-- Campfire in Center -->
      <!-- Fire Logs -->
      <line x1="210" y1="540" x2="270" y2="520" stroke-width="6" />
      <line x1="215" y1="520" x2="265" y2="540" stroke-width="6" />
      <!-- Dancing Flames -->
      <path d="M240,520 C220,480 230,450 240,430 C250,450 260,480 240,520 Z" stroke-width="6" fill="white" />
      <path d="M225,520 C215,490 225,470 230,460 C235,480 240,500 225,520 Z" stroke-width="5" fill="white" />

      <!-- Happy Dino Sitting by Campfire Roasting Marshmallow -->
      <path d="M330,450 C320,380 350,330 400,330 C450,330 470,380 460,460 C440,510 370,520 330,450 Z" stroke-width="8" fill="white" />
      <path d="M360,330 C350,260 380,220 430,220 C470,220 485,250 480,290 C465,330 420,340 380,330 Z" stroke-width="7" fill="white" />
      <!-- Eye & Smile -->
      <circle cx="425" cy="260" r="12" stroke-width="5" fill="white" />
      <circle cx="427" cy="258" r="6" fill="currentColor" stroke="none" />
      <path d="M400,295 Q430,315 450,290" stroke-width="5" />

      <!-- Marshmallow Roasting Stick -->
      <line x1="410" y1="380" x2="250" y2="460" stroke-width="5" />
      <!-- Marshmallow -->
      <rect x="250" y="450" width="20" height="16" rx="4" stroke-width="4" fill="white" />

      <!-- Stars in night sky -->
      <polygon points="120,120 125,132 138,134 128,143 131,156 120,149 109,156 112,143 102,134 115,132" stroke-width="3" fill="white" />
      <polygon points="380,100 384,110 395,111 387,118 389,129 380,123 371,129 373,118 365,111 376,110" stroke-width="3" fill="white" />
    </g>`
  },
  {
    id: 14,
    title: 'Birthday Party with Giant Cake',
    subtitle: 'Dino ulang tahun dengan kue',
    prompt: 'Color the birthday candles and yummy frosting swirls!',
    ageRecommendation: 'Ages 3-7',
    category: 'cute',
    imageUrl: '/src/assets/images/dino_birthday_party_1793207048784.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Party Bunting Garland at top -->
      <path d="M30,80 Q250,140 470,80" stroke-width="5" />
      <polygon points="70,95 100,150 130,105" stroke-width="4" fill="white" />
      <polygon points="150,110 180,165 210,118" stroke-width="4" fill="white" />
      <polygon points="230,120 260,175 290,120" stroke-width="4" fill="white" />
      <polygon points="310,118 340,165 370,110" stroke-width="4" fill="white" />
      <polygon points="390,105 420,150 450,95" stroke-width="4" fill="white" />

      <!-- Table with Party Cake -->
      <rect x="60" y="460" width="380" height="25" rx="6" stroke-width="7" fill="white" />
      <line x1="90" y1="485" x2="90" y2="580" stroke-width="7" />
      <line x1="410" y1="485" x2="410" y2="580" stroke-width="7" />

      <!-- 3-Tier Birthday Cake -->
      <!-- Bottom Tier -->
      <rect x="150" y="380" width="200" height="80" rx="10" stroke-width="7" fill="white" />
      <path d="M150,410 C180,425 220,400 250,420 C280,400 320,425 350,410" stroke-width="4" />
      <!-- Middle Tier -->
      <rect x="180" y="310" width="140" height="70" rx="8" stroke-width="7" fill="white" />
      <path d="M180,335 C205,345 235,325 250,340 C265,325 295,345 320,335" stroke-width="4" />
      <!-- Top Tier -->
      <rect x="210" y="250" width="80" height="60" rx="6" stroke-width="6" fill="white" />
      <!-- Birthday Candles with Flames -->
      <rect x="230" y="220" width="8" height="30" stroke-width="3" fill="white" />
      <path d="M234,220 Q228,205 234,195 Q240,205 234,220" stroke-width="3" fill="white" />
      <rect x="260" y="220" width="8" height="30" stroke-width="3" fill="white" />
      <path d="M264,220 Q258,205 264,195 Q270,205 264,220" stroke-width="3" fill="white" />

      <!-- Dino Peeking Behind Table with Party Hat -->
      <path d="M100,460 C90,380 120,300 170,260 C210,260 230,310 220,380" stroke-width="7" fill="white" />
      <!-- Party Cone Hat with Pom-pom -->
      <polygon points="140,260 170,160 200,260" stroke-width="5" fill="white" />
      <circle cx="170" cy="155" r="8" stroke-width="4" fill="white" />
      <!-- Party Horn in Dino Mouth -->
      <path d="M130,340 L70,330 L60,340 L70,350 L130,350" stroke-width="4" fill="white" />
      <!-- Happy Eye -->
      <circle cx="150" cy="305" r="12" stroke-width="4" fill="white" />
      <circle cx="152" cy="303" r="6" fill="currentColor" stroke="none" />
    </g>`
  },
  {
    id: 15,
    title: 'Dino Train Engineer & Steam Engine',
    subtitle: 'Dino naik kereta api',
    prompt: 'Color the shiny steam locomotive chugging along the train tracks!',
    ageRecommendation: 'Ages 3-7',
    category: 'action',
    imageUrl: '/src/assets/images/dino_train_driver_1793207049983.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Railroad Tracks -->
      <line x1="20" y1="540" x2="480" y2="540" stroke-width="7" />
      <line x1="20" y1="565" x2="480" y2="565" stroke-width="7" />
      <!-- Railroad ties -->
      <line x1="50" y1="535" x2="50" y2="570" stroke-width="5" />
      <line x1="120" y1="535" x2="120" y2="570" stroke-width="5" />
      <line x1="190" y1="535" x2="190" y2="570" stroke-width="5" />
      <line x1="260" y1="535" x2="260" y2="570" stroke-width="5" />
      <line x1="330" y1="535" x2="330" y2="570" stroke-width="5" />
      <line x1="400" y1="535" x2="400" y2="570" stroke-width="5" />
      <line x1="470" y1="535" x2="470" y2="570" stroke-width="5" />

      <!-- Steam Train Engine -->
      <!-- Train Wheels -->
      <circle cx="140" cy="510" r="30" stroke-width="7" fill="white" />
      <circle cx="140" cy="510" r="10" stroke-width="4" />
      <circle cx="230" cy="510" r="30" stroke-width="7" fill="white" />
      <circle cx="230" cy="510" r="10" stroke-width="4" />
      <circle cx="360" cy="500" r="40" stroke-width="8" fill="white" />
      <circle cx="360" cy="500" r="14" stroke-width="5" />
      <!-- Wheel linkage connecting rod -->
      <line x1="140" y1="510" x2="230" y2="510" stroke-width="6" />

      <!-- Train Body / Boiler -->
      <rect x="100" y="370" width="180" height="110" rx="10" stroke-width="8" fill="white" />
      <!-- Cowcatcher grill on front -->
      <polygon points="100,430 40,530 100,530" stroke-width="6" fill="white" />
      <line x1="60" y1="490" x2="100" y2="490" stroke-width="4" />

      <!-- Smokestack -->
      <polygon points="130,370 120,300 160,300 150,370" stroke-width="6" fill="white" />
      <!-- Puffy Smoke Clouds coming from stack -->
      <circle cx="140" cy="250" r="25" stroke-width="5" fill="white" />
      <circle cx="170" cy="200" r="32" stroke-width="5" fill="white" />
      <circle cx="210" cy="140" r="40" stroke-width="5" fill="white" />

      <!-- Train Engineer Cab -->
      <rect x="280" y="310" width="140" height="170" rx="8" stroke-width="8" fill="white" />
      <rect x="300" y="330" width="60" height="60" rx="8" stroke-width="5" fill="white" />

      <!-- Dino Engineer Waving from the Train Window -->
      <path d="M310,390 C300,350 320,340 345,340 C365,340 370,360 365,390" stroke-width="6" fill="white" />
      <!-- Engineer Cap -->
      <path d="M315,345 C320,325 355,325 365,345 Z" stroke-width="4" fill="white" />
      <line x1="305" y1="345" x2="340" y2="345" stroke-width="4" /> <!-- Visor -->
      <!-- Happy Eye -->
      <circle cx="335" cy="360" r="5" stroke-width="3" fill="white" />
      <circle cx="336" cy="359" r="2" fill="currentColor" stroke="none" />
      <!-- Waving Claw out the window -->
      <path d="M370,360 Q390,340 400,355" stroke-width="5" />
    </g>`
  },
  {
    id: 16,
    title: 'Prehistoric Jungle & Giant Ferns',
    subtitle: 'Dino di dalam hutan dengan kupu-kupu',
    prompt: 'Color the lush giant prehistoric ferns and tropical leaves!',
    ageRecommendation: 'Ages 3-8',
    category: 'scenery',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground -->
      <path d="M10,560 Q250,540 490,560" stroke-width="6" />

      <!-- Giant Prehistoric Jungle Ferns (Left) -->
      <path d="M40,560 Q50,420 80,310" stroke-width="6" />
      <!-- Fern fronds -->
      <path d="M55,480 Q20,460 25,445" stroke-width="4" />
      <path d="M60,450 Q95,430 90,415" stroke-width="4" />
      <path d="M65,410 Q30,390 35,375" stroke-width="4" />
      <path d="M70,370 Q105,350 100,335" stroke-width="4" />
      <path d="M75,340 Q50,310 60,300" stroke-width="4" />

      <!-- Big Tropical Palm Leaf (Right) -->
      <path d="M440,560 Q430,380 390,260" stroke-width="6" />
      <path d="M425,470 Q465,450 460,435" stroke-width="4" />
      <path d="M415,430 Q370,410 380,395" stroke-width="4" />
      <path d="M405,380 Q450,360 440,345" stroke-width="4" />
      <path d="M395,330 Q360,310 370,295" stroke-width="4" />

      <!-- Cute Baby Dino Exploring the Jungle Floor -->
      <path d="M180,480 C170,410 200,360 260,360 C320,360 350,410 340,490 C320,530 250,540 190,510 Z" stroke-width="8" fill="white" />
      <!-- Head Sniffing a Jungle Flower -->
      <path d="M220,370 C200,300 240,260 290,260 C340,260 360,290 355,340 C340,380 280,390 240,380 Z" stroke-width="7" fill="white" />
      <!-- Curious Eye -->
      <circle cx="285" cy="305" r="14" stroke-width="5" fill="white" />
      <circle cx="288" cy="303" r="7" fill="currentColor" stroke="none" />
      <path d="M260,345 Q290,365 315,345" stroke-width="5" />

      <!-- Legs -->
      <rect x="200" y="500" width="35" height="60" rx="12" stroke-width="6" fill="white" />
      <rect x="285" y="500" width="35" height="60" rx="12" stroke-width="6" fill="white" />

      <!-- Beautiful Fluttering Butterfly -->
      <g transform="translate(290, 160)">
        <path d="M30,30 Q10,10 0,30 Q15,45 30,40 Q10,55 5,75 Q25,80 30,50" stroke-width="5" fill="white" />
        <path d="M30,30 Q50,10 60,30 Q45,45 30,40 Q50,55 55,75 Q35,80 30,50" stroke-width="5" fill="white" />
        <line x1="30" y1="20" x2="30" y2="55" stroke-width="4" />
      </g>
    </g>`
  },
  {
    id: 17,
    title: 'Storytime Under Giant Toadstool Mushroom',
    subtitle: 'Dino membaca buku',
    prompt: 'Color the storybook and spotted red fairytale mushroom!',
    ageRecommendation: 'Ages 3-8',
    category: 'cute',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground line with little grass blossoms -->
      <path d="M10,560 Q250,540 490,560" stroke-width="6" />

      <!-- Giant Toadstool Mushroom Umbrella -->
      <!-- Sturdy Stem -->
      <path d="M200,560 C205,420 180,300 210,240 L280,240 C310,300 285,420 290,560" stroke-width="8" fill="white" />
      <!-- Giant Mushroom Cap -->
      <path d="M90,240 C100,100 390,100 400,240 Z" stroke-width="8" fill="white" />
      <!-- Mushroom spots -->
      <circle cx="160" cy="180" r="22" stroke-width="5" fill="white" />
      <circle cx="250" cy="145" r="28" stroke-width="5" fill="white" />
      <circle cx="340" cy="185" r="22" stroke-width="5" fill="white" />

      <!-- Dino Sitting Under the Mushroom Reading a Big Book -->
      <path d="M290,440 C280,380 310,330 360,330 C410,330 430,380 420,460 C400,510 340,520 290,490 Z" stroke-width="8" fill="white" />
      <path d="M320,340 C310,270 340,230 390,230 C430,230 445,260 440,300 C425,340 380,350 340,340 Z" stroke-width="7" fill="white" />
      <!-- Cute Glasses on Dino -->
      <circle cx="370" cy="275" r="14" stroke-width="4" fill="white" />
      <circle cx="405" cy="275" r="14" stroke-width="4" fill="white" />
      <line x1="384" y1="275" x2="391" y2="275" stroke-width="4" />
      <circle cx="373" cy="275" r="5" fill="currentColor" stroke="none" />
      <circle cx="407" cy="275" r="5" fill="currentColor" stroke="none" />

      <!-- Big Open Storybook -->
      <!-- Left Page -->
      <polygon points="320,420 260,390 250,470 320,490" stroke-width="6" fill="white" />
      <line x1="265" y1="415" x2="310" y2="435" stroke-width="3" />
      <line x1="265" y1="435" x2="310" y2="455" stroke-width="3" />
      <!-- Right Page -->
      <polygon points="320,420 380,390 390,470 320,490" stroke-width="6" fill="white" />
      <line x1="330" y1="435" x2="375" y2="415" stroke-width="3" />
      <line x1="330" y1="455" x2="375" y2="435" stroke-width="3" />
    </g>`
  },
  {
    id: 18,
    title: 'Veggie Garden Harvest & Watering Can',
    subtitle: 'Dino memanen sayuran',
    prompt: 'Color the crunchy orange carrots and healthy green veggies!',
    ageRecommendation: 'Ages 3-7',
    category: 'cute',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Soil Mound Garden Bed -->
      <path d="M10,540 Q250,500 490,540 L490,620 L10,620 Z" stroke-width="7" fill="white" />
      
      <!-- Giant Carrots Growing in the Garden Soil -->
      <!-- Carrot 1 -->
      <polygon points="60,540 85,460 110,540" stroke-width="5" fill="white" />
      <path d="M85,460 Q70,410 60,390" stroke-width="4" />
      <path d="M85,460 Q85,400 85,380" stroke-width="4" />
      <path d="M85,460 Q100,410 110,390" stroke-width="4" />
      <!-- Carrot 2 -->
      <polygon points="140,530 165,440 190,530" stroke-width="5" fill="white" />
      <path d="M165,440 Q150,390 140,370" stroke-width="4" />
      <path d="M165,440 Q180,390 190,370" stroke-width="4" />

      <!-- Watering Can on the Left -->
      <rect x="50" y="480" width="40" height="40" rx="6" stroke-width="5" fill="white" />
      <path d="M90,490 L120,470" stroke-width="5" /> <!-- Spout -->
      <path d="M50,490 C30,490 30,515 50,515" stroke-width="4" /> <!-- Handle -->

      <!-- Happy Dino Farmer with Overalls -->
      <!-- Overalls & Body -->
      <path d="M260,430 C250,360 280,310 340,310 C390,310 420,360 410,440 C390,500 320,510 270,490 Z" stroke-width="8" fill="white" />
      <!-- Overalls Straps & Pocket -->
      <line x1="300" y1="360" x2="300" y2="430" stroke-width="5" />
      <line x1="360" y1="360" x2="360" y2="430" stroke-width="5" />
      <rect x="315" y="420" width="30" height="25" rx="4" stroke-width="4" fill="white" />

      <!-- Dino Head & Big Smile -->
      <path d="M290,310 C270,230 310,180 370,180 C420,180 440,220 435,270 C420,310 360,320 320,310 Z" stroke-width="7" fill="white" />
      <circle cx="360" cy="235" r="14" stroke-width="5" fill="white" />
      <circle cx="363" cy="233" r="7" fill="currentColor" stroke="none" />
      <path d="M340,270 Q370,290 395,265" stroke-width="5" />

      <!-- Hand holding a freshly pulled giant carrot -->
      <polygon points="230,360 210,430 250,430" stroke-width="6" fill="white" />
      <path d="M230,360 Q215,330 200,320" stroke-width="4" />
      <path d="M230,360 Q235,325 235,310" stroke-width="4" />
      <path d="M230,360 Q245,330 255,320" stroke-width="4" />
    </g>`
  },
  {
    id: 19,
    title: 'Master Chef Dino & Pancake Flip',
    subtitle: 'Dino pakai topi koki sambil memasak',
    prompt: 'Color the tall puffy chef toque and flying golden pancakes!',
    ageRecommendation: 'Ages 3-8',
    category: 'action',
    imageUrl: '/src/assets/images/dino_chef_pancakes_1793207007571.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Kitchen Table / Counter -->
      <rect x="30" y="480" width="440" height="30" rx="6" stroke-width="7" fill="white" />
      <line x1="60" y1="510" x2="60" y2="580" stroke-width="6" />
      <line x1="440" y1="510" x2="440" y2="580" stroke-width="6" />

      <!-- Dino Chef -->
      <!-- Body with Chef Apron -->
      <path d="M200,430 C190,350 230,290 300,290 C360,290 390,350 380,440 C360,490 290,500 240,490 Z" stroke-width="8" fill="white" />
      <path d="M245,350 L245,450 L325,450 L325,350 Z" stroke-width="5" fill="white" /> <!-- Apron -->

      <!-- Head with Huge Puffy Chef Toque -->
      <path d="M230,290 C210,210 250,170 310,170 C360,170 380,210 375,260 C360,300 300,310 260,300 Z" stroke-width="7" fill="white" />
      <!-- Tall Puffy Chef Hat -->
      <rect x="260" y="145" width="85" height="25" rx="4" stroke-width="6" fill="white" /> <!-- Band -->
      <path d="M255,145 C230,110 230,60 280,60 C290,30 330,30 345,60 C380,50 390,100 365,145 Z" stroke-width="7" fill="white" />

      <!-- Excited Big Eyes & Open Smile -->
      <circle cx="295" cy="225" r="14" stroke-width="5" fill="white" />
      <circle cx="298" cy="223" r="7" fill="currentColor" stroke="none" />
      <path d="M280,255 Q310,275 335,250" stroke-width="5" />

      <!-- Chef Frying Pan Held by Dino -->
      <line x1="220" y1="410" x2="140" y2="390" stroke-width="7" /> <!-- Pan handle -->
      <ellipse cx="110" cy="390" rx="40" ry="15" stroke-width="6" fill="white" /> <!-- Pan -->

      <!-- Flying Flipping Pancake in the Air! -->
      <ellipse cx="110" cy="260" rx="32" ry="12" stroke-width="5" fill="white" transform="rotate(-15, 110, 260)" />
      <!-- Motion flip arcs -->
      <path d="M90,340 Q75,300 95,280" stroke-width="4" stroke-dasharray="4,4" />
      <path d="M130,340 Q145,300 125,280" stroke-width="4" stroke-dasharray="4,4" />
      <!-- Butter Pat on flying pancake -->
      <rect x="105" y="250" width="12" height="8" rx="2" stroke-width="3" fill="white" />
    </g>`
  },
  {
    id: 20,
    title: 'Rainy Day Puddle Jumper & Umbrella',
    subtitle: 'Dino di tengah hujan membawa payung',
    prompt: 'Color the patterned rain umbrella and bright yellow rain boots!',
    ageRecommendation: 'Ages 3-7',
    category: 'cute',
    imageUrl: '/src/assets/images/dino_rain_umbrella_1793207049627.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Rain Clouds at Top -->
      <path d="M40,70 Q70,40 120,60 Q170,30 210,70 Q230,105 190,125 Q110,135 50,115 Z" stroke-width="6" fill="white" />
      <path d="M300,60 Q330,30 380,50 Q430,20 460,60 Q480,95 450,115 Q380,125 310,105 Z" stroke-width="6" fill="white" />

      <!-- Falling Raindrops -->
      <line x1="80" y1="150" x2="65" y2="190" stroke-width="4" />
      <line x1="130" y1="160" x2="115" y2="200" stroke-width="4" />
      <line x1="380" y1="140" x2="365" y2="180" stroke-width="4" />
      <line x1="430" y1="160" x2="415" y2="200" stroke-width="4" />
      <line x1="70" y1="360" x2="55" y2="400" stroke-width="4" />
      <line x1="440" y1="350" x2="425" y2="390" stroke-width="4" />

      <!-- Big Dome Umbrella Covering Dino -->
      <path d="M120,240 C140,110 360,110 380,240 Z" stroke-width="8" fill="white" />
      <!-- Umbrella panels / ribs -->
      <path d="M205,240 C205,170 240,130 250,120" stroke-width="5" />
      <path d="M295,240 C295,170 260,130 250,120" stroke-width="5" />
      <!-- Umbrella stick and hook handle -->
      <line x1="250" y1="120" x2="250" y2="360" stroke-width="6" />
      <path d="M250,360 C250,380 235,380 235,365" stroke-width="5" />
      <line x1="250" y1="120" x2="250" y2="105" stroke-width="5" /> <!-- Tip -->

      <!-- Dino Splashing in Rain Boots -->
      <path d="M200,430 C190,360 220,310 280,310 C330,310 350,360 340,440 C320,490 260,500 210,480 Z" stroke-width="8" fill="white" />
      <!-- Head with Big Grin -->
      <path d="M230,320 C220,250 250,220 295,220 C340,220 355,250 350,290 C340,325 290,335 255,325 Z" stroke-width="6" fill="white" />
      <circle cx="290" cy="260" r="12" stroke-width="4" fill="white" />
      <circle cx="292" cy="258" r="6" fill="currentColor" stroke="none" />
      <path d="M275,290 Q300,310 325,285" stroke-width="5" />

      <!-- Rain Boots -->
      <path d="M210,470 L210,540 L180,540 C170,540 170,520 190,520 L190,470 Z" stroke-width="6" fill="white" />
      <path d="M275,470 L275,540 L315,540 C325,540 325,520 295,520 L295,470 Z" stroke-width="6" fill="white" />

      <!-- Big Rain Puddle with Splashes -->
      <ellipse cx="250" cy="550" rx="150" ry="25" stroke-width="7" fill="white" />
      <path d="M150,540 Q130,510 140,500 Q155,510 150,540" stroke-width="4" fill="white" />
      <path d="M340,540 Q360,510 350,500 Q335,510 340,540" stroke-width="4" fill="white" />
    </g>`
  },
  {
    id: 21,
    title: 'Happy Dino Family Portrait',
    subtitle: 'Keluarga dino (ayah, ibu, anak)',
    prompt: 'Color the loving mama, papa, and baby dinosaur together!',
    ageRecommendation: 'Ages 3-8',
    category: 'cute',
    imageUrl: '/src/assets/images/dino_family_love_1793207047136.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground -->
      <path d="M10,560 Q250,540 490,560" stroke-width="6" />

      <!-- Papa Dino (Left, Tall & Strong) -->
      <!-- Body & Neck -->
      <path d="M90,510 C80,410 110,340 160,330 C200,330 220,380 210,480 C190,530 130,540 90,510 Z" stroke-width="8" fill="white" />
      <path d="M130,340 C120,240 150,190 190,190 C230,190 240,225 235,265 C220,305 180,315 150,310 Z" stroke-width="7" fill="white" />
      <circle cx="195" cy="230" r="14" stroke-width="4" fill="white" />
      <circle cx="197" cy="228" r="7" fill="currentColor" stroke="none" />
      <path d="M180,265 Q205,285 225,260" stroke-width="5" />
      <!-- Papa Bowtie -->
      <polygon points="170,320 185,327 170,335" stroke-width="3" fill="white" />
      <polygon points="200,320 185,327 200,335" stroke-width="3" fill="white" />
      <circle cx="185" cy="327" r="4" stroke-width="3" fill="white" />

      <!-- Mama Dino (Right, Graceful with Flower) -->
      <path d="M370,510 C360,420 380,350 420,340 C460,340 480,390 470,490 C450,540 400,540 370,510 Z" stroke-width="8" fill="white" />
      <path d="M390,350 C380,260 400,210 440,210 C480,210 490,245 485,285 C470,320 430,330 405,325 Z" stroke-width="7" fill="white" />
      <circle cx="445" cy="245" r="14" stroke-width="4" fill="white" />
      <circle cx="447" cy="243" r="7" fill="currentColor" stroke="none" />
      <path d="M430,280 Q455,300 475,275" stroke-width="5" />
      <!-- Mama Flower in hair -->
      <circle cx="460" cy="200" r="8" stroke-width="3" fill="white" />
      <circle cx="460" cy="188" r="6" stroke-width="3" fill="white" />
      <circle cx="472" cy="200" r="6" stroke-width="3" fill="white" />
      <circle cx="448" cy="200" r="6" stroke-width="3" fill="white" />

      <!-- Baby Dino (Center, Super Cute & Joyful) -->
      <path d="M220,520 C210,460 240,420 280,420 C320,420 340,460 330,520 C310,550 250,550 220,520 Z" stroke-width="7" fill="white" />
      <path d="M245,430 C235,370 260,340 295,340 C330,340 345,365 340,395 C330,425 290,435 265,430 Z" stroke-width="6" fill="white" />
      <circle cx="295" cy="370" r="12" stroke-width="4" fill="white" />
      <circle cx="297" cy="368" r="6" fill="currentColor" stroke="none" />
      <path d="M280,395 Q300,410 320,390" stroke-width="4" />

      <!-- Floating Love Hearts above the family -->
      <path d="M280,170 C280,150 260,140 250,155 C240,140 220,150 220,170 C220,195 250,215 250,215 C250,215 280,195 280,170 Z" stroke-width="5" fill="white" />
      <path d="M330,130 C330,115 315,108 308,118 C300,108 285,115 285,130 C285,150 308,165 308,165 C308,165 330,150 330,130 Z" stroke-width="4" fill="white" />
    </g>`
  },
  {
    id: 22,
    title: 'Soccer Star Dino Scoring a Goal',
    subtitle: 'Dino bermain bola',
    prompt: 'Color the soccer jersey and black-and-white patterned soccer ball!',
    ageRecommendation: 'Ages 4-8',
    category: 'action',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground line -->
      <line x1="20" y1="560" x2="480" y2="560" stroke-width="6" />

      <!-- Soccer Goal Net on the Right -->
      <polygon points="360,340 460,380 460,560 360,560" stroke-width="7" fill="white" />
      <!-- Net grid lines -->
      <line x1="360" y1="400" x2="460" y2="430" stroke-width="3" stroke-dasharray="6,6" />
      <line x1="360" y1="460" x2="460" y2="490" stroke-width="3" stroke-dasharray="6,6" />
      <line x1="360" y1="510" x2="460" y2="535" stroke-width="3" stroke-dasharray="6,6" />
      <line x1="390" y1="355" x2="390" y2="560" stroke-width="3" stroke-dasharray="6,6" />
      <line x1="425" y1="370" x2="425" y2="560" stroke-width="3" stroke-dasharray="6,6" />

      <!-- Soccer Ball in Mid-Air Flying into the Goal -->
      <circle cx="340" cy="420" r="32" stroke-width="6" fill="white" />
      <!-- Soccer ball pentagon pattern -->
      <polygon points="340,405 352,414 347,428 333,428 328,414" stroke-width="4" fill="currentColor" />
      <!-- Speed lines behind ball -->
      <line x1="280" y1="420" x2="300" y2="420" stroke-width="4" />
      <line x1="270" y1="405" x2="295" y2="410" stroke-width="4" />
      <line x1="270" y1="435" x2="295" y2="430" stroke-width="4" />

      <!-- Dino Striker Kicking the Ball with Power -->
      <!-- Body Leaning into the Kick -->
      <path d="M140,430 C130,350 170,300 230,300 C280,300 300,350 280,430 C250,480 190,480 140,430 Z" stroke-width="8" fill="white" />
      <!-- Head with Sport Headband -->
      <path d="M180,300 C170,220 200,180 255,180 C300,180 320,210 315,260 C300,300 250,310 215,305 Z" stroke-width="7" fill="white" />
      <!-- Sport Headband -->
      <rect x="200" y="210" width="105" height="18" rx="6" stroke-width="5" fill="white" />
      <!-- Determined Joyful Eye -->
      <circle cx="260" cy="245" r="12" stroke-width="4" fill="white" />
      <circle cx="263" cy="243" r="6" fill="currentColor" stroke="none" />
      <path d="M245,275 Q275,295 295,270" stroke-width="5" />

      <!-- Kicking Leg Extended Forward -->
      <path d="M220,440 L280,430 L300,430 L300,455 L260,465 Z" stroke-width="6" fill="white" />
      <!-- Cleats / Soccer shoes with studs -->
      <line x1="285" y1="455" x2="285" y2="465" stroke-width="4" />
      <line x1="295" y1="455" x2="295" y2="465" stroke-width="4" />
      <!-- Standing Leg planted on ground -->
      <rect x="150" y="440" width="35" height="120" rx="14" stroke-width="7" fill="white" />
    </g>`
  },
  {
    id: 23,
    title: 'Beach Day Sandcastle & Seashells',
    subtitle: 'Dino di pantai membuat istana pasir',
    prompt: 'Color the grand sandcastle towers, sunny ocean waves, and starfish!',
    ageRecommendation: 'Ages 3-7',
    category: 'scenery',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ocean Horizon & Gentle Waves -->
      <path d="M10,340 C100,330 200,350 300,335 C400,320 450,340 490,330" stroke-width="5" />
      <!-- Beach Sandline -->
      <path d="M10,440 Q250,420 490,440" stroke-width="6" />

      <!-- Big Majestic Sandcastle -->
      <!-- Center Keep -->
      <rect x="270" y="380" width="100" height="110" stroke-width="7" fill="white" />
      <!-- Castle Battlements -->
      <rect x="270" y="360" width="20" height="20" stroke-width="4" fill="white" />
      <rect x="310" y="360" width="20" height="20" stroke-width="4" fill="white" />
      <rect x="350" y="360" width="20" height="20" stroke-width="4" fill="white" />
      <!-- Castle Arched Doorway -->
      <path d="M305,490 L305,445 C305,430 335,430 335,445 L335,490 Z" stroke-width="5" fill="white" />
      <!-- Sandcastle Flag on top -->
      <line x1="320" y1="360" x2="320" y2="310" stroke-width="4" />
      <polygon points="320,310 355,325 320,340" stroke-width="4" fill="white" />

      <!-- Sand Pail & Shovel -->
      <polygon points="390,490 430,490 420,540 400,540" stroke-width="5" fill="white" />
      <path d="M395,490 C395,465 425,465 425,490" stroke-width="4" /> <!-- Pail handle -->
      <!-- Starfish on sand -->
      <polygon points="380,560 385,570 397,571 388,580 391,592 380,585 369,592 372,580 363,571 375,570" stroke-width="4" fill="white" />

      <!-- Dino Sitting on Sand Admiring Castle -->
      <path d="M120,460 C110,400 140,360 190,360 C240,360 260,410 245,480 C230,520 170,530 120,500 Z" stroke-width="8" fill="white" />
      <path d="M150,370 C140,290 170,250 220,250 C265,250 280,285 275,325 C260,360 210,370 180,365 Z" stroke-width="7" fill="white" />
      <circle cx="225" cy="295" r="14" stroke-width="4" fill="white" />
      <circle cx="227" cy="293" r="7" fill="currentColor" stroke="none" />
      <path d="M210,330 Q235,350 255,325" stroke-width="5" />
    </g>`
  },
  {
    id: 24,
    title: 'Vintage Bicycle Cruiser & Apple Basket',
    subtitle: 'Dino dengan sepeda',
    prompt: 'Color the retro bicycle frame, handlebar bell, and juicy red apples!',
    ageRecommendation: 'Ages 4-8',
    category: 'action',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground line -->
      <line x1="20" y1="560" x2="480" y2="560" stroke-width="6" />

      <!-- Bicycle Wheels -->
      <!-- Back Wheel -->
      <circle cx="120" cy="480" r="60" stroke-width="8" fill="white" />
      <circle cx="120" cy="480" r="12" stroke-width="5" />
      <!-- Spokes -->
      <line x1="120" y1="420" x2="120" y2="540" stroke-width="3" />
      <line x1="60" y1="480" x2="180" y2="480" stroke-width="3" />
      <!-- Front Wheel -->
      <circle cx="380" cy="480" r="60" stroke-width="8" fill="white" />
      <circle cx="380" cy="480" r="12" stroke-width="5" />
      <!-- Spokes -->
      <line x1="380" y1="420" x2="380" y2="540" stroke-width="3" />
      <line x1="320" y1="480" x2="440" y2="480" stroke-width="3" />

      <!-- Bicycle Frame Diamond -->
      <line x1="120" y1="480" x2="240" y2="480" stroke-width="7" />
      <line x1="240" y1="480" x2="210" y2="390" stroke-width="7" />
      <line x1="210" y1="390" x2="120" y2="480" stroke-width="7" />
      <line x1="240" y1="480" x2="340" y2="380" stroke-width="7" />
      <line x1="210" y1="390" x2="340" y2="380" stroke-width="7" />
      <line x1="340" y1="380" x2="380" y2="480" stroke-width="7" />

      <!-- Handlebars & Basket -->
      <line x1="340" y1="380" x2="330" y2="320" stroke-width="6" />
      <path d="M310,320 L350,320 L360,335" stroke-width="6" />
      <!-- Front Wicker Basket with Apples -->
      <rect x="360" y="325" width="50" height="40" rx="6" stroke-width="5" fill="white" />
      <circle cx="375" cy="320" r="10" stroke-width="4" fill="white" />
      <circle cx="395" cy="320" r="10" stroke-width="4" fill="white" />

      <!-- Dino Cyclist Pedaling Happily -->
      <!-- Body & Saddle -->
      <ellipse cx="205" cy="385" rx="25" ry="10" stroke-width="6" fill="white" /> <!-- Bike saddle -->
      <path d="M190,380 C180,310 210,260 270,260 C320,260 340,310 320,380 C290,410 230,410 190,380 Z" stroke-width="8" fill="white" />
      <!-- Head with Cap -->
      <path d="M230,260 C215,190 250,150 300,150 C345,150 360,185 355,225 C340,260 295,270 260,265 Z" stroke-width="7" fill="white" />
      <circle cx="305" cy="195" r="12" stroke-width="4" fill="white" />
      <circle cx="307" cy="193" r="6" fill="currentColor" stroke="none" />
      <path d="M290,230 Q315,250 335,225" stroke-width="5" />

      <!-- Little legs on the pedals -->
      <path d="M230,390 L240,470 L255,470" stroke-width="6" fill="white" />
    </g>`
  },
  {
    id: 25,
    title: 'Mountain Hiker Dino & Summit View',
    subtitle: 'Dino mendaki gunung',
    prompt: 'Color the snowy mountain ridge, backpack, and hiking pole!',
    ageRecommendation: 'Ages 4-9',
    category: 'action',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Mountain Slope -->
      <path d="M20,580 L480,380 L480,620 L20,620 Z" stroke-width="8" fill="white" />
      
      <!-- Snowcapped Mountain Peak in Distance -->
      <polygon points="120,320 220,160 320,320" stroke-width="7" fill="white" />
      <polyline points="180,225 220,245 260,225" stroke-width="5" /> <!-- Snowline -->

      <!-- Dino Hiker Climbing the Ridge -->
      <!-- Legs marching up slope -->
      <rect x="250" y="440" width="38" height="90" rx="14" stroke-width="7" fill="white" transform="rotate(-15, 250, 440)" />
      <rect x="330" y="400" width="38" height="90" rx="14" stroke-width="7" fill="white" transform="rotate(-25, 330, 400)" />

      <!-- Torso with Heavy Hiker Backpack -->
      <path d="M250,380 C240,300 280,250 340,250 C390,250 410,300 395,380 C370,420 300,420 250,380 Z" stroke-width="8" fill="white" />
      <!-- Hiker Backpack strapped to back -->
      <rect x="210" y="270" width="55" height="90" rx="12" stroke-width="7" fill="white" />
      <line x1="210" y1="315" x2="265" y2="315" stroke-width="4" />
      <rect x="220" y="245" width="35" height="25" rx="6" stroke-width="5" fill="white" /> <!-- Sleeping roll on top -->

      <!-- Head Looking Forward with Energy -->
      <path d="M300,250 C290,170 320,130 375,130 C420,130 435,165 430,205 C415,245 365,255 330,250 Z" stroke-width="7" fill="white" />
      <circle cx="375" cy="175" r="12" stroke-width="4" fill="white" />
      <circle cx="377" cy="173" r="6" fill="currentColor" stroke="none" />
      <path d="M360,205 Q385,225 405,200" stroke-width="5" />

      <!-- Hiking Pole in Hand -->
      <line x1="390" y1="280" x2="420" y2="440" stroke-width="6" />
      <circle cx="390" cy="275" r="6" stroke-width="4" /> <!-- Grip -->
      <circle cx="417" cy="425" r="8" stroke-width="3" /> <!-- Snow basket -->
    </g>`
  },
  {
    id: 26,
    title: 'Dreaming Under Twinkling Stars & Moon',
    subtitle: 'Dino tidur di bawah bintang',
    prompt: 'Color the dreamy golden crescent moon and peaceful night sky!',
    ageRecommendation: 'Ages 2-6',
    category: 'cute',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Huge Glowing Crescent Moon -->
      <path d="M340,80 C300,120 300,200 350,240 C280,240 230,170 250,100 C275,60 310,65 340,80 Z" stroke-width="7" fill="white" />
      <!-- Sleeping face on the moon -->
      <path d="M280,140 Q290,150 300,140" stroke-width="4" /> <!-- Moon sleeping eye -->
      <path d="M285,165 Q295,175 305,165" stroke-width="3" /> <!-- Moon smile -->

      <!-- Floating Night Stars & Sparkles -->
      <polygon points="120,100 125,112 138,114 128,123 131,136 120,129 109,136 112,123 102,114 115,112" stroke-width="4" fill="white" />
      <polygon points="180,180 184,190 195,191 187,198 189,209 180,203 171,209 173,198 165,191 176,190" stroke-width="4" fill="white" />
      <polygon points="410,180 414,190 425,191 417,198 419,209 410,203 401,209 403,198 395,191 406,190" stroke-width="4" fill="white" />

      <!-- Giant Soft Cloud Bed -->
      <path d="M70,460 C40,430 40,360 90,340 C110,300 180,300 210,340 C240,310 310,310 340,340 C380,300 450,320 460,370 C490,410 470,470 420,490 C370,520 120,520 70,460 Z" stroke-width="8" fill="white" />

      <!-- Cute Baby Dino Curled Up Fast Asleep on Cloud -->
      <!-- Body Curled -->
      <ellipse cx="260" cy="400" rx="90" ry="60" stroke-width="7" fill="white" />
      <!-- Sleeping Head on Paws with Nightcap -->
      <circle cx="190" cy="380" r="40" stroke-width="6" fill="white" />
      <!-- Sleeping Eye (Closed arc with eyelashes) -->
      <path d="M170,380 Q185,395 200,380" stroke-width="5" />
      <line x1="175" y1="388" x2="170" y2="396" stroke-width="3" />
      <line x1="185" y1="392" x2="185" y2="400" stroke-width="3" />
      <line x1="195" y1="388" x2="200" y2="396" stroke-width="3" />

      <!-- Nightcap Sleeping Hat -->
      <path d="M160,350 Q130,300 100,320 Q120,360 170,360 Z" stroke-width="5" fill="white" />
      <circle cx="95" cy="320" r="10" stroke-width="4" fill="white" /> <!-- Pom-pom -->

      <!-- Gentle Zzz floating in air -->
      <text x="140" y="270" font-family="sans-serif" font-size="28" font-weight="bold" fill="currentColor">Z</text>
      <text x="165" y="240" font-family="sans-serif" font-size="22" font-weight="bold" fill="currentColor">z</text>
      <text x="185" y="215" font-family="sans-serif" font-size="16" font-weight="bold" fill="currentColor">z</text>
    </g>`
  },
  {
    id: 27,
    title: 'Pirate Captain Dino & Treasure Chest',
    subtitle: 'Dino ber-kostum bajak laut',
    prompt: 'Color the skull tricorn hat, eye patch, and sparkling treasure!',
    ageRecommendation: 'Ages 4-8',
    category: 'action',
    imageUrl: '/src/assets/images/dino_pirate_treasure_1793207048344.jpg',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Pirate Ship Wooden Deck -->
      <line x1="20" y1="560" x2="480" y2="560" stroke-width="7" />
      <line x1="20" y1="585" x2="480" y2="585" stroke-width="5" />

      <!-- Overflowing Pirate Treasure Chest on Right -->
      <rect x="310" y="440" width="130" height="90" rx="8" stroke-width="7" fill="white" />
      <!-- Curved Open Chest Lid -->
      <path d="M310,440 C310,380 440,380 440,440 Z" stroke-width="6" fill="white" />
      <rect x="365" y="440" width="20" height="25" rx="4" stroke-width="4" fill="white" /> <!-- Lock hasp -->
      <!-- Gold Coins & Jewels spilling over -->
      <circle cx="340" cy="430" r="10" stroke-width="3" fill="white" />
      <circle cx="360" cy="425" r="10" stroke-width="3" fill="white" />
      <circle cx="385" cy="430" r="10" stroke-width="3" fill="white" />
      <circle cx="410" cy="425" r="10" stroke-width="3" fill="white" />

      <!-- Dino Pirate Captain -->
      <!-- Torso with Pirate Coat & Sash -->
      <path d="M160,430 C150,350 180,300 240,300 C290,300 310,350 300,430 C280,480 220,490 170,470 Z" stroke-width="8" fill="white" />
      <path d="M170,390 L290,440" stroke-width="6" /> <!-- Pirate Sash -->

      <!-- Head with Eyepatch & Captain Tricorn Hat -->
      <path d="M200,300 C185,230 220,185 270,185 C315,185 330,220 325,260 C310,295 260,305 230,300 Z" stroke-width="7" fill="white" />
      <!-- Classic Pirate Tricorn Hat -->
      <path d="M160,185 C190,130 310,130 350,185 C320,175 290,165 255,165 C220,165 190,175 160,185 Z" stroke-width="7" fill="white" />
      <!-- Jolly Roger Skull & Crossbones on hat -->
      <circle cx="255" cy="150" r="8" stroke-width="3" fill="white" />
      <line x1="245" y1="150" x2="265" y2="150" stroke-width="3" />

      <!-- Eyepatch on Right Eye -->
      <ellipse cx="285" cy="225" rx="10" ry="12" fill="currentColor" stroke="none" />
      <line x1="240" y1="210" x2="310" y2="235" stroke-width="4" />
      <!-- Open Jolly Smiling Eye on Left -->
      <circle cx="245" cy="220" r="12" stroke-width="4" fill="white" />
      <circle cx="247" cy="218" r="6" fill="currentColor" stroke="none" />
      <path d="M235,255 Q265,275 290,250" stroke-width="5" />

      <!-- Wooden Peg Leg -->
      <polygon points="190,480 215,480 205,560 200,560" stroke-width="6" fill="white" />
      <!-- Boot Leg -->
      <rect x="250" y="480" width="35" height="80" rx="10" stroke-width="6" fill="white" />
    </g>`
  },
  {
    id: 28,
    title: 'Meadow Garden, Bees & Ladybugs',
    subtitle: 'Dino bersama kupu-kupu dan bunga',
    prompt: 'Color the honeybee stripes and spotted little ladybug!',
    ageRecommendation: 'Ages 3-7',
    category: 'scenery',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ground line with meadow grass blades -->
      <path d="M10,560 Q250,540 490,560" stroke-width="6" />

      <!-- Wildflower Blossoms across foreground -->
      <g transform="translate(40, 470)">
        <circle cx="25" cy="25" r="12" stroke-width="5" fill="white" />
        <circle cx="25" cy="8" r="8" stroke-width="4" fill="white" />
        <circle cx="42" cy="25" r="8" stroke-width="4" fill="white" />
        <circle cx="25" cy="42" r="8" stroke-width="4" fill="white" />
        <circle cx="8" cy="25" r="8" stroke-width="4" fill="white" />
        <line x1="25" y1="42" x2="25" y2="90" stroke-width="5" />
      </g>
      <g transform="translate(390, 460)">
        <circle cx="25" cy="25" r="14" stroke-width="5" fill="white" />
        <circle cx="25" cy="6" r="10" stroke-width="4" fill="white" />
        <circle cx="44" cy="25" r="10" stroke-width="4" fill="white" />
        <circle cx="25" cy="44" r="10" stroke-width="4" fill="white" />
        <circle cx="6" cy="25" r="10" stroke-width="4" fill="white" />
        <line x1="25" y1="44" x2="25" y2="100" stroke-width="5" />
      </g>

      <!-- Gentle Friendly Dino Sitting in Meadow -->
      <path d="M170,470 C160,390 190,320 260,320 C320,320 340,370 330,460 C310,510 240,520 180,490 Z" stroke-width="8" fill="white" />
      <!-- Head with Cheerful Sniffing Expression -->
      <path d="M210,320 C190,230 230,180 290,180 C340,180 360,215 355,265 C340,305 285,320 245,315 Z" stroke-width="7" fill="white" />
      <circle cx="280" cy="235" r="14" stroke-width="4" fill="white" />
      <circle cx="282" cy="233" r="7" fill="currentColor" stroke="none" />
      <path d="M260,270 Q290,290 315,265" stroke-width="5" />

      <!-- Cute Honeybee Flying near Dino Nose -->
      <g transform="translate(360, 210)">
        <ellipse cx="25" cy="20" rx="18" ry="12" stroke-width="4" fill="white" />
        <line x1="20" y1="8" x2="20" y2="32" stroke-width="3" />
        <line x1="28" y1="8" x2="28" y2="32" stroke-width="3" />
        <!-- Bee Wings -->
        <ellipse cx="20" cy="5" rx="8" ry="12" stroke-width="3" fill="white" />
        <ellipse cx="28" cy="5" rx="8" ry="12" stroke-width="3" fill="white" />
        <!-- Flight dash trail -->
        <path d="M0,35 Q10,20 5,45" stroke-width="3" stroke-dasharray="3,3" />
      </g>

      <!-- Little Ladybug resting on Dino Tail -->
      <path d="M170,460 Q120,470 100,450 Q130,490 180,490" stroke-width="7" fill="white" />
      <circle cx="125" cy="450" r="10" stroke-width="4" fill="white" />
      <line x1="125" y1="440" x2="125" y2="460" stroke-width="2" />
      <circle cx="121" cy="446" r="2" fill="currentColor" stroke="none" />
      <circle cx="129" cy="446" r="2" fill="currentColor" stroke="none" />
    </g>`
  },
  {
    id: 29,
    title: 'Dino Floral Mandala & Sacred Geometry',
    subtitle: 'Pola mandala dino (untuk anak lebih besar)',
    prompt: 'Color the intricate floral rings, geometric stars, and centerpiece dino!',
    ageRecommendation: 'Ages 6-12',
    category: 'mandala',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Mandala Outer Decorative Border Circle -->
      <circle cx="250" cy="325" r="230" stroke-width="7" fill="white" />
      <circle cx="250" cy="325" r="215" stroke-width="4" />
      <circle cx="250" cy="325" r="170" stroke-width="5" />
      <circle cx="250" cy="325" r="120" stroke-width="5" />
      <circle cx="250" cy="325" r="70" stroke-width="6" />

      <!-- Mandala Petals & Geometric Rays -->
      <!-- 12 Petals around Outer Ring -->
      <path d="M250,95 Q235,115 250,135 Q265,115 250,95 Z" stroke-width="4" fill="white" />
      <path d="M250,515 Q235,535 250,555 Q265,535 250,515 Z" stroke-width="4" fill="white" />
      <path d="M40,325 Q60,310 80,325 Q60,340 40,325 Z" stroke-width="4" fill="white" />
      <path d="M420,325 Q440,310 460,325 Q440,340 420,325 Z" stroke-width="4" fill="white" />

      <path d="M102,177 Q118,193 134,209 Q140,185 102,177 Z" stroke-width="4" fill="white" />
      <path d="M398,177 Q382,193 366,209 Q360,185 398,177 Z" stroke-width="4" fill="white" />
      <path d="M102,473 Q118,457 134,441 Q140,465 102,473 Z" stroke-width="4" fill="white" />
      <path d="M398,473 Q382,457 366,441 Q360,465 398,473 Z" stroke-width="4" fill="white" />

      <!-- Scalloped Geometric Leaves around Middle Ring -->
      <circle cx="250" cy="180" r="14" stroke-width="3" />
      <circle cx="250" cy="470" r="14" stroke-width="3" />
      <circle cx="105" cy="325" r="14" stroke-width="3" />
      <circle cx="395" cy="325" r="14" stroke-width="3" />
      <circle cx="147" cy="222" r="14" stroke-width="3" />
      <circle cx="353" cy="222" r="14" stroke-width="3" />
      <circle cx="147" cy="428" r="14" stroke-width="3" />
      <circle cx="353" cy="428" r="14" stroke-width="3" />

      <!-- Centerpiece Baby T-Rex Silhouette & Blossom -->
      <path d="M225,360 C215,310 230,280 260,280 C285,280 300,305 295,345 C285,370 245,375 225,360 Z" stroke-width="6" fill="white" />
      <path d="M245,290 C235,255 250,240 270,240 C290,240 300,255 295,275 C290,290 270,295 255,290 Z" stroke-width="5" fill="white" />
      <circle cx="275" cy="260" r="6" stroke-width="3" fill="white" />
      <circle cx="276" cy="259" r="3" fill="currentColor" stroke="none" />
      <path d="M265,275 Q280,285 290,272" stroke-width="3" />
    </g>`
  },
  {
    id: 30,
    title: 'Bonus: Design & Draw Your Own Dino!',
    subtitle: 'Halaman bonus: "Gambar dinomu sendiri"',
    prompt: 'Use your super creativity to draw the most awesome dinosaur in the world!',
    ageRecommendation: 'All Ages',
    category: 'bonus',
    svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <!-- Decorative Dinosaur Bone & Leaf Border Frame -->
      <rect x="35" y="45" width="430" height="560" rx="20" stroke-width="7" fill="white" />
      <rect x="47" y="57" width="406" height="536" rx="14" stroke-width="3" stroke-dasharray="10,8" />

      <!-- Corner Dino Bone Badges -->
      <!-- Top Left Bone -->
      <path d="M60,75 L85,75 M60,70 A5,5 0 0,0 60,80 M85,70 A5,5 0 0,1 85,80" stroke-width="4" />
      <!-- Top Right Bone -->
      <path d="M415,75 L440,75 M415,70 A5,5 0 0,0 415,80 M440,70 A5,5 0 0,1 440,80" stroke-width="4" />
      <!-- Bottom Left Bone -->
      <path d="M60,575 L85,575 M60,570 A5,5 0 0,0 60,580 M85,570 A5,5 0 0,1 85,580" stroke-width="4" />
      <!-- Bottom Right Bone -->
      <path d="M415,575 L440,575 M415,570 A5,5 0 0,0 415,580 M440,570 A5,5 0 0,1 440,580" stroke-width="4" />

      <!-- Header Banner Box -->
      <rect x="90" y="80" width="320" height="55" rx="12" stroke-width="5" fill="white" />
      <text x="250" y="115" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="currentColor">
        DRAW YOUR OWN DINO!
      </text>

      <!-- Prompt Lines / Idea Sparks in Corners -->
      <!-- Cute Mini Guide Sketch in bottom corner -->
      <g transform="translate(70, 480)">
        <text x="0" y="0" font-family="sans-serif" font-size="12" font-weight="600" fill="currentColor">
          DINO PROFILE:
        </text>
        <text x="0" y="24" font-family="sans-serif" font-size="11" fill="currentColor">Dino Name: _______________________</text>
        <text x="0" y="48" font-family="sans-serif" font-size="11" fill="currentColor">Superpower: ______________________</text>
        <text x="0" y="72" font-family="sans-serif" font-size="11" fill="currentColor">Favorite Food: ___________________</text>
      </g>

      <!-- Little Mascot Egg cheering the kid in top right corner -->
      <g transform="translate(370, 490)">
        <ellipse cx="25" cy="35" rx="20" ry="26" stroke-width="4" fill="white" />
        <circle cx="18" cy="28" r="4" fill="currentColor" stroke="none" />
        <circle cx="32" cy="28" r="4" fill="currentColor" stroke="none" />
        <path d="M22,38 Q25,44 28,38" stroke-width="3" />
        <text x="25" y="75" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="currentColor">YOU CAN DO IT!</text>
      </g>

      <!-- Light Center Drawing Crosshairs (Watermark guide for kids) -->
      <line x1="250" y1="200" x2="250" y2="440" stroke-width="2" stroke-dasharray="6,8" stroke-opacity="0.3" />
      <line x1="120" y1="320" x2="380" y2="320" stroke-width="2" stroke-dasharray="6,8" stroke-opacity="0.3" />
    </g>`
  }
];

export const FRONT_COVER_PAGE: ColoringPage = {
  id: 0,
  title: 'Book Cover: Cute Dinosaurs Coloring Book',
  subtitle: 'Cover Buku Mewarnai (Bilingual Ready)',
  prompt: 'Print on heavy 100lb cardstock for the perfect front book cover!',
  ageRecommendation: 'Ages 3-8',
  category: 'cute',
  imageUrl: '/src/assets/images/dino_cover_mascot_1793207005557.jpg',
  svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <!-- Double Border Frame -->
    <rect x="25" y="25" width="450" height="600" rx="16" stroke-width="8" fill="white" />
    <rect x="38" y="38" width="424" height="574" rx="10" stroke-width="4" stroke-dasharray="12,8" />

    <!-- Top Badge Strip -->
    <rect x="80" y="60" width="340" height="42" rx="10" stroke-width="5" fill="white" />
    <text x="250" y="88" font-family="sans-serif" font-size="15" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="currentColor">
      30 ADORABLE COLORING PAGES
    </text>

    <!-- Main Title -->
    <text x="250" y="165" font-family="sans-serif" font-size="38" font-weight="900" text-anchor="middle" fill="currentColor">
      CUTE DINOSAURS
    </text>
    <text x="250" y="205" font-family="sans-serif" font-size="20" font-weight="bold" letter-spacing="4" text-anchor="middle" fill="currentColor">
      COLORING BOOK
    </text>

    <!-- Cover Mascot T-Rex Smiling with Ice Cream and Balloon -->
    <g transform="translate(25, 30)">
      <!-- Body -->
      <path d="M160,390 C150,300 190,230 250,230 C300,230 330,280 320,380 C310,440 240,460 180,440 Z" stroke-width="8" fill="white" />
      <!-- Head -->
      <path d="M210,240 C190,170 230,120 295,120 C360,120 380,165 375,215 C360,255 315,265 275,260 Z" stroke-width="8" fill="white" />
      <circle cx="310" cy="180" r="18" stroke-width="5" fill="white" />
      <circle cx="314" cy="176" r="9" fill="currentColor" stroke="none" />
      <circle cx="318" cy="172" r="3" fill="white" stroke="none" />
      <path d="M280,225 Q320,250 350,220" stroke-width="6" />

      <!-- Ice Cream Cone in hand -->
      <polygon points="325,320 355,320 340,390" stroke-width="5" fill="white" />
      <circle cx="340" cy="305" r="20" stroke-width="5" fill="white" />
      <circle cx="340" cy="275" r="16" stroke-width="5" fill="white" />

      <!-- Legs -->
      <rect x="180" y="440" width="38" height="65" rx="14" stroke-width="7" fill="white" />
      <rect x="250" y="440" width="38" height="65" rx="14" stroke-width="7" fill="white" />
    </g>

    <!-- Subtitle Bar -->
    <rect x="60" y="530" width="380" height="45" rx="12" stroke-width="5" fill="white" />
    <text x="250" y="558" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="1" text-anchor="middle" fill="currentColor">
      SCREEN-FREE CREATIVE FUN FOR AGES 3-8
    </text>
  </g>`
};

export const BELONGS_TO_PAGE: ColoringPage = {
  id: -1,
  title: 'Personalization: This Book Belongs To',
  subtitle: 'Halaman Kepemilikan Buku',
  prompt: 'Write the lucky child’s name in the banner below!',
  ageRecommendation: 'All Ages',
  category: 'cute',
  svgContent: `<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <!-- Outer Frame -->
    <rect x="35" y="35" width="430" height="580" rx="18" stroke-width="7" fill="white" />
    <rect x="47" y="47" width="406" height="556" rx="12" stroke-width="3" stroke-dasharray="10,6" />

    <!-- Cute Dino Mascot Peeking Over Banner -->
    <path d="M190,160 C180,100 210,65 250,65 C290,65 320,100 310,160 Z" stroke-width="7" fill="white" />
    <circle cx="225" cy="115" r="12" stroke-width="4" fill="white" />
    <circle cx="227" cy="113" r="6" fill="currentColor" stroke="none" />
    <circle cx="275" cy="115" r="12" stroke-width="4" fill="white" />
    <circle cx="277" cy="113" r="6" fill="currentColor" stroke="none" />
    <path d="M240,140 Q250,150 260,140" stroke-width="4" />

    <!-- Title Banner -->
    <rect x="65" y="160" width="370" height="70" rx="14" stroke-width="6" fill="white" />
    <text x="250" y="205" font-family="sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="currentColor">
      THIS BOOK BELONGS TO:
    </text>

    <!-- Name Line Box -->
    <rect x="75" y="270" width="350" height="75" rx="12" stroke-width="5" fill="white" />
    <line x1="95" y1="325" x2="405" y2="325" stroke-width="3" stroke-dasharray="6,6" />

    <!-- Details Box -->
    <g transform="translate(85, 380)">
      <text x="0" y="30" font-family="sans-serif" font-size="16" font-weight="600" fill="currentColor">
        Age: ________________________
      </text>
      <text x="0" y="80" font-family="sans-serif" font-size="16" font-weight="600" fill="currentColor">
        Date Started: _______________
      </text>
      <text x="0" y="130" font-family="sans-serif" font-size="16" font-weight="600" fill="currentColor">
        Favorite Color: _____________
      </text>
    </g>
  </g>`
};
