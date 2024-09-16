# Rock-Paper-Scissors Game

Welcome to my Rock-Paper-Scissors game! 🎮✊📄✂️

## Overview

I created this simple yet fun Rock-Paper-Scissors game using React. It features an interactive UI where you can play against the computer, track your wins, draws, and losses, and have your scores persist across page refreshes using `localStorage`.

## Features

- **Play the Game:** Choose Rock, Paper, or Scissors and see how your choice fares against the computer's.
- **Score Tracking:** Keep track of your wins, draws, and losses. Your scores are saved in `localStorage`, so they persist even if you refresh the page.
- **User Interface:** The game uses responsive design to ensure it looks great on both desktop and mobile devices.



## How to Play

- Click on one of the icons (Rock, Paper, or Scissors) to make your choice.
- The computer will randomly select its choice.
- The game will display the result: whether you won, lost, or drew.
- Your scores will be updated and saved automatically.

## Code Overview

- **`Game.js`**: Contains the main game logic, including state management for player choices, computer choices, and scores. The `useEffect` hooks handle saving and loading scores from `localStorage`, and the `checkWinner` function determines the game outcome.

- **`Buttons.js`**: A component used to render the clickable icons for Rock, Paper, and Scissors.

## Contributing

I welcome contributions to improve the game! If you have any ideas or find any bugs, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or just want to chat about the game, feel free to reach out to me at [ahmedgeger@gmail.com](mailto:ahmedgeger@gmail.com).

Happy gaming! 🎉

