/** Class representing a Game. */
export default class Game {
  /**
   * Create a game.
   * @param {String} id - Place holder for a unique Firebase id.
   * @param {String} name - The name of the game.
   * @param {String} password - The password to enter the game.
   * @param {Number} numberOfPlayers - The number of players
   * @param {Number} numberOfDistricts - The number of districts to win the game.
  */
  id = ''

  name = ''

  password = ''

  numberOfPlayers = 0

  numberOfDistricts = 0

  /**
   * @param  {Object} args - User arguments supplied during
   * user creation
   */
  constructor(args) {
    // eslint-disable-next-line no-unused-vars
    Object.keys(args).forEach((v, i) => {
      this[v] = args[v];
    });

    return {
      ...this,
    };
  }
}
