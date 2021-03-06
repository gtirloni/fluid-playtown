This game was developed as a [Google Summer of Code](https://summerofcode.withgoogle.com/) project under the [Inclusive Design Institute](https://inclusivedesign.ca/). Blog posts detailing the work process can be found [here](http://blog.christinehu.org/search/label/gsoc), and you can play the game [here](https://christine-hu.github.io/playtown/)!

# Playtown!

“Playtown!” is a web game for kids to discover and personalize their own world. The game begins with a town map, and users can complete different activities at different locations. Players will be able to: 
- build an ice cream sundae,
- create a robot,
- customize an avatar, and
- design a house!

All controls are switch-accessible, and users can also adjust text size and scroll speed. Design-wise, Playtown aims to follow the [Inclusive Design Guide](https://guide.inclusivedesign.ca/index.html) and the [Game Accessibility Guidelines](http://gameaccessibilityguidelines.com/full-list/).


On the technical side, the game is being built with:
- HTML, JavaScript, & CSS (Using the [Phaser](http://phaser.io/) game engine)
- [Assembly](http://assemblyapp.co/), [InkScape](https://inkscape.org/en/), & [TexturePacker](https://www.codeandweb.com/texturepacker) (Sprite creation)

# User Tips

Two-switch controls (`tab` to scan, `enter` to select) are recommended for users who want greater control over the scan speed. 

Press the `escape` key at any point in the game to return to the previous screen: 
  * Location escapes to map
  * Map escapes to main menu
  * Main menu escapes to control selection

# Running Locally
To run the game locally, complete the following steps: 

1. Clone the repository: `git clone https://github.com/christine-hu/playtown.git` 

2. Navigate to the repository, and download the dependencies: `npm install`

3. Set up a local testing server (ex: `python -m SimpleHTTPServer`)

4. Go to the server (ex: `localhost:8000`) via your web browser. Tada!
