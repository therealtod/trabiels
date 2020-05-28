/** Class representing a Room. */
export default class Room {
  /**
   * Create a Room.
   * @param {String} id - Place holder for a unique Firebase id.
   * @param {String} name - The name of the Room (and Game).
   * @param {String} password - The password to enter the Room.
   * @param {Number} roomSize - The max number of players that can join the room.
   * @param {Number} numberOfDistricts - The number of districts to win the Game.
   * @param {Array} players - The player that have already joined the room
  */
  id = ''

  name = ''

  password = ''

  roomSize = 0

  numberOfDistricts = 0

  players = []

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
