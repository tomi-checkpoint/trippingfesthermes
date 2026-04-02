/**
 * Curated gradient presets organized by mood/theme.
 * Each preset has a name, category tag, and 3-5 RGB color stops.
 * Used with the multiGradient color mode.
 */

const c = (r, g, b) => ({ r, g, b, a: 255 });

export const GRADIENT_PRESETS = [
  // ── Pastels ──
  { name: 'Cotton Candy',    tag: 'pastel',        colors: [c(255,182,193), c(186,218,255), c(255,218,233), c(200,230,255)] },
  { name: 'Spring Bloom',    tag: 'pastel',        colors: [c(255,209,220), c(255,236,179), c(178,235,200), c(200,191,231)] },
  { name: 'Lavender Dream',  tag: 'pastel',        colors: [c(230,190,255), c(190,220,255), c(255,200,230), c(200,255,230)] },
  { name: 'Soft Sorbet',     tag: 'pastel',        colors: [c(255,179,186), c(255,223,186), c(255,255,186), c(186,255,201), c(186,225,255)] },

  // ── Warm ──
  { name: 'Sunset Blaze',    tag: 'warm',          colors: [c(255,61,0), c(255,145,0), c(255,214,0), c(255,61,87)] },
  { name: 'Autumn Leaves',   tag: 'warm',          colors: [c(165,42,42), c(210,105,30), c(218,165,32), c(139,69,19)] },
  { name: 'Golden Hour',     tag: 'warm',          colors: [c(255,200,50), c(255,150,50), c(255,100,80), c(255,180,100)] },
  { name: 'Campfire',        tag: 'warm',          colors: [c(255,80,20), c(255,165,0), c(255,220,50), c(200,40,10)] },

  // ── Cool ──
  { name: 'Arctic Frost',    tag: 'cool',          colors: [c(180,230,255), c(100,180,255), c(200,240,255), c(140,200,255)] },
  { name: 'Deep Ocean',      tag: 'cool',          colors: [c(0,40,80), c(0,100,160), c(0,160,200), c(0,60,120)] },
  { name: 'Glacier',         tag: 'cool',          colors: [c(200,235,255), c(150,210,240), c(100,185,225), c(175,225,250)] },
  { name: 'Twilight Sky',    tag: 'cool',          colors: [c(25,25,112), c(72,61,139), c(123,104,238), c(65,105,225)] },

  // ── Complementary ──
  { name: 'Fire & Ice',      tag: 'complementary', colors: [c(255,50,30), c(255,140,0), c(0,150,255), c(0,80,200)] },
  { name: 'Purple & Gold',   tag: 'complementary', colors: [c(128,0,128), c(180,50,180), c(255,200,0), c(255,160,0)] },
  { name: 'Teal & Coral',    tag: 'complementary', colors: [c(0,180,170), c(0,140,140), c(255,127,80), c(255,99,71)] },
  { name: 'Lime & Magenta',  tag: 'complementary', colors: [c(120,255,0), c(180,255,50), c(255,0,150), c(200,0,120)] },

  // ── Neon ──
  { name: 'Cyberpunk',       tag: 'neon',          colors: [c(255,0,255), c(0,255,255), c(255,0,100), c(100,0,255)] },
  { name: 'Electric Dreams',  tag: 'neon',          colors: [c(0,255,0), c(255,255,0), c(255,0,255), c(0,200,255)] },
  { name: 'Rave',            tag: 'neon',          colors: [c(255,0,80), c(0,255,200), c(150,0,255), c(255,200,0), c(0,150,255)] },
  { name: 'Laser Show',      tag: 'neon',          colors: [c(255,0,0), c(0,255,0), c(0,100,255), c(255,0,200)] },

  // ── Earth ──
  { name: 'Forest Floor',    tag: 'earth',         colors: [c(34,85,34), c(85,107,47), c(107,142,35), c(60,80,30)] },
  { name: 'Desert Sand',     tag: 'earth',         colors: [c(210,180,140), c(188,143,90), c(222,184,135), c(160,120,80)] },
  { name: 'Volcanic',        tag: 'earth',         colors: [c(50,10,10), c(180,30,0), c(255,100,0), c(100,20,5)] },
  { name: 'Mossy Stone',     tag: 'earth',         colors: [c(100,110,90), c(130,150,100), c(85,95,75), c(140,160,110)] },

  // ── Monochrome ──
  { name: 'Silver Streak',   tag: 'mono',          colors: [c(220,220,220), c(160,160,160), c(200,200,200), c(120,120,120)] },
  { name: 'Midnight',        tag: 'mono',          colors: [c(20,20,40), c(50,50,80), c(80,80,120), c(40,40,60)] },
  { name: 'Blueprint',       tag: 'mono',          colors: [c(0,50,120), c(0,80,160), c(0,110,200), c(0,65,140)] },

  // ── Psychedelic ──
  { name: 'Acid Trip',       tag: 'psychedelic',   colors: [c(255,0,128), c(0,255,128), c(128,0,255), c(255,255,0), c(0,128,255)] },
  { name: 'Rainbow Classic', tag: 'psychedelic',   colors: [c(255,0,0), c(255,165,0), c(255,255,0), c(0,200,0), c(0,100,255)] },
  { name: 'Oil Slick',       tag: 'psychedelic',   colors: [c(100,0,150), c(0,100,130), c(150,100,0), c(0,150,100), c(130,0,100)] },
  { name: 'Tropical Punch',  tag: 'psychedelic',   colors: [c(255,100,150), c(255,200,0), c(0,220,180), c(180,0,255)] },
];

/** All unique category tags in display order */
export const GRADIENT_TAGS = ['all', 'pastel', 'warm', 'cool', 'complementary', 'neon', 'earth', 'mono', 'psychedelic'];
