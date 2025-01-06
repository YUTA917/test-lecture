type GameResult =  "p1-win" | "p2-win" | "Draw"

type Throw = "Rock" | "Scissors" | "Paper"

export const play = (p1:Throw, p2:Throw): GameResult => {
  if(p1 === p2){
    return "Draw"
  }

  if(p1 === "Scissors" && p2 === "Rock"){
    return "p2-win"
  }

  if(p1 === "Paper" && p2 === "Scissors"){
    return "p2-win"
  }

  if(p1 === "Rock" && p2 === "Paper"){
    return "p2-win"
  }

  return "p1-win"
}