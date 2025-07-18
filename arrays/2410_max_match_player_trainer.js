// Title: _max_match_player_trainer
// LeetCode ID: 2410
// Difficulty: Medium
// Tags: Array, Sorting, Greedy, Two pointers
// Date: 2025-07-13
// Link:https://leetcode.com/problems/maximum-matching-of-players-with-trainers/description/?envType=daily-question&envId=2025-07-13

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);

  // let result = 0

  // for(let i = 0; i < players.length; i++){
  //     for(let j = 0; j < trainers.length; j++){
  //         if(players[i] <= trainers[j]){
  //             trainers.splice(j, 1);
  //             result++
  //             break
  //         }
  //     }
  // }

  // return result

  let result = 0;
  let trainer = 0;
  let player = 0;

  while (player < players.length && trainer < trainers.length) {
    if (players[player] <= trainers[trainer]) {
      result++;
      player++;
      trainer++;
    } else {
      trainer++;
    }
  }

  return result;
};
