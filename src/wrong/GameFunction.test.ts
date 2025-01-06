import {play} from "./GameFunction";
import { describe, it, expect } from 'vitest';

describe("じゃんけん", () => {
  it("p1👊 vs p2✌️のときp1_winsが返る" , () => {
    const result = play()
    expect(result).toBe("p1-win",)
  })
})
