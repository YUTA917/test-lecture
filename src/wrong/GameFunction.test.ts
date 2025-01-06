import {play} from "./GameFunction";
import { describe, it, expect } from 'vitest';

describe("じゃんけん", () => {
  //テストコードを見直して正しく書き換えてみましょう
  it("p1👊 vs p2✌️のときp1_winsが返る" , () => {
    const result = play()
    expect(result).toBe("p1-win",)
  })

  //他の組み合わせのテストを記述してみましょう
})
