 # UPDATE LOG
## 1st May 2023:

* The bot can now greet joining and departing users in the server. [ AUTO ]
* The bot can clean the given chat but keep the pinned messages.<br>[ command: "!clean" ]
* The bot can play rock, paper and scissors with the user's prompt.<br>[ command: "!rps <option>" ]

## 8th May 2023:

* You can now perform a coin flip and alfred and do the coin flip for you!<br>[ command: "!flip" ]

## 9th May 2023:

* You can now ask Alfred to generate a random number between two given numbers.<br>[ command: "!generate <min> <max>" ]
* The way that index.js calls around the functions of the bot has been changed. Till this commit, the bot can do functions such as rps, flip and generateRandom.
        These functions are now under 'funExt' ( stands for fun Extensions).
        This is done to improve the flow of the code and readability of the server code.
* You can now ask Alfred a question and Alfred will answer like the Magic 8 Ball,
        which is a toy used for fortune-telling or seeking advice.<br>[ command: "!ask <any question>" ]

* Created new folder 'misc'.
* Updated command line visual with timestamped activity so developer can track.

## 10th May 2023:

* Updated route that index.js calls around chat functions. Functions that are related are now under 'chatExt' ( stands for chat Extensions).

# 5th June 2023:

* added lint to use standardised style for the repo.
* updated the !help prompt to simpler message.
* weather function will be added as a TODO for later use of the repo.
* finalised READMe.md for making the repo public.

