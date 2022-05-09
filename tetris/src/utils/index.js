//The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min

  }

