export enum LED_BUTTON {
  // Left side buttons
  LT = 23,
  LM = 24,
  LB = 25,

  // Right side buttons
  RT = 20,
  RM = 21,
  RB = 22,

  // Bank #4
  // Top left quadrant
  B4_Q1TL = 39,
  B4_Q1TR = 38,
  B4_Q1BL = 43,
  B4_Q1BR = 42,

  // Top right quadrant
  B4_Q2TL = 37,
  B4_Q2TR = 36,
  B4_Q2BL = 41,
  B4_Q2BR = 40,

  // Bottom left quadrant
  B4_Q3TL = 47,
  B4_Q3TR = 46,
  B4_Q3BL = 51,
  B4_Q3BR = 50,

  // Bottom right quadrant
  B4_Q4TL = 45,
  B4_Q4TR = 44,
  B4_Q4BL = 49,
  B4_Q4BR = 48,

  // Bank #3
  // Top left quadrant
  B3_Q1TL = 39 + 16 * 1,
  B3_Q1TR = 38 + 16 * 1,
  B3_Q1BL = 43 + 16 * 1,
  B3_Q1BR = 42 + 16 * 1,

  // Top right quadrant
  B3_Q2TL = 37 + 16 * 1,
  B3_Q2TR = 36 + 16 * 1,
  B3_Q2BL = 41 + 16 * 1,
  B3_Q2BR = 40 + 16 * 1,

  // Bottom left quadrant
  B3_Q3TL = 47 + 16 * 1,
  B3_Q3TR = 46 + 16 * 1,
  B3_Q3BL = 51 + 16 * 1,
  B3_Q3BR = 50 + 16 * 1,

  // Bottom right quadrant
  B3_Q4TL = 45 + 16 * 1,
  B3_Q4TR = 44 + 16 * 1,
  B3_Q4BL = 49 + 16 * 1,
  B3_Q4BR = 48 + 16 * 1,

  // Bank #2
  // Top left quadrant
  B2_Q1TL = 39 + 16 * 2,
  B2_Q1TR = 38 + 16 * 2,
  B2_Q1BL = 43 + 16 * 2,
  B2_Q1BR = 42 + 16 * 2,

  // Top right quadrant
  B2_Q2TL = 37 + 16 * 2,
  B2_Q2TR = 36 + 16 * 2,
  B2_Q2BL = 41 + 16 * 2,
  B2_Q2BR = 40 + 16 * 2,

  // Bottom left quadrant
  B2_Q3TL = 47 + 16 * 2,
  B2_Q3TR = 46 + 16 * 2,
  B2_Q3BL = 51 + 16 * 2,
  B2_Q3BR = 50 + 16 * 2,

  // Bottom right quadrant
  B2_Q4TL = 45 + 16 * 2,
  B2_Q4TR = 44 + 16 * 2,
  B2_Q4BL = 49 + 16 * 2,
  B2_Q4BR = 48 + 16 * 2,

  // Bank #1
  // Top left quadrant
  B1_Q1TL = 39 + 16 * 3,
  B1_Q1TR = 38 + 16 * 3,
  B1_Q1BL = 43 + 16 * 3,
  B1_Q1BR = 42 + 16 * 3,

  // Top right quadrant
  B1_Q2TL = 37 + 16 * 3,
  B1_Q2TR = 36 + 16 * 3,
  B1_Q2BL = 41 + 16 * 3,
  B1_Q2BR = 40 + 16 * 3,

  // Bottom left quadrant
  B1_Q3TL = 47 + 16 * 3,
  B1_Q3TR = 46 + 16 * 3,
  B1_Q3BL = 51 + 16 * 3,
  B1_Q3BR = 50 + 16 * 3,

  // Bottom right quadrant
  B1_Q4TL = 45 + 16 * 3,
  B1_Q4TR = 44 + 16 * 3,
  B1_Q4BL = 49 + 16 * 3,
  B1_Q4BR = 48 + 16 * 3,
}

export default LED_BUTTON
